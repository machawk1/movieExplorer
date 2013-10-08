<?php
header('Access-Control-Allow-Origin: http://machawk1.github.io');  
header('Access-Control-Allow-Origin: http://matkelly.com');  

//remove this in production, it's for local file testing ONLY
header('Access-Control-Allow-Origin: *');  

include 'phpQuery-onefile.php';

$actorWithSpace = $_GET['actor'];
$actor = preg_replace("/[^A-Za-z0-9]/", '', $_GET['actor']);
$filename = "actors/".strtoupper($actor).".json";

//TODO: sanitize actor value, which becomes the file name

$tuData = "";
if(!file_exists($filename)){
	$url = "http://www.imdb.com/xml/find?json=1&nr=1&nm=on&q=".urlencode($actor);
	
	$tuCurl = curl_init(); 
	curl_setopt($tuCurl, CURLOPT_URL, $url); 
	curl_setopt($tuCurl, CURLOPT_RETURNTRANSFER, 1);
	$tuData = curl_exec($tuCurl);
	curl_close($tuCurl); 
	
	preg_match('/id":"(nm[0-9]+)",/',$tuData,$matches);
	//echo $matches[1]; //get the actor ID
	
	$tuCurl2 = curl_init(); 
	//echo "http://www.imdb.com/name/".$matches[1]."/";
	curl_setopt($tuCurl2, CURLOPT_URL, "http://www.imdb.com/name/".$matches[1]."/"); 
	curl_setopt($tuCurl2, CURLOPT_RETURNTRANSFER, 1);
	$tuData2 = curl_exec($tuCurl2);
	//echo $tuData2;
	$doc = phpQuery::newDocumentHTML($tuData2);
	//echo $doc;
	$x = pq("#filmography .filmo-row b a");
	$movieLinks = $x[0];
	$movieAnchors = explode("\r\n",preg_replace('/<\/a>/',"</a>\r\n",$movieLinks));
	
	$ret = $actorWithSpace."\r\n";
	for($m = 0; $m < sizeof($movieAnchors); $m++){
		if(strpos($movieAnchors[$m],'_act_') !== false){
			preg_match('/>(.*)<\/a>/',$movieAnchors[$m],$movieName);
			preg_match('/tt[0-9]+/',$movieAnchors[$m],$ids);

			$ret .= $ids[0]." ".$movieName[1]."\r\n";
		}
		 
	}
	echo $ret;
	return;
}else {
	$tuData = file_get_contents($filename);
}

$domData = $tuData2;
$domData = trim(preg_replace('/\s+/', ' ', $domData));
$domData = trim(preg_replace('/"/', "'", $domData));
$domData = trim(preg_replace('/</', "&lt;", $domData));
$domData = trim(preg_replace('/>/', "&gt;", $domData));
//echo $tuData; 
/*
<html>
<head>
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript">

$(document).ready(function(){

var x = "<?=$domData ?>".replace(/&gt;/g,">").replace(/&lt;/g,"<");
var val = $(x).find(".filmo-row");

var filmographySection = $(x).find("#filmography");
var moviesSection = filmographySection[0].children[1];
$.each($(moviesSection).find("b a"),function(i,v){
	$('body').append(v.text+"<br />");
});

});
</script>
</head>
<body>

</body></html>*/
?>
