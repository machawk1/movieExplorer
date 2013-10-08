var actors = [];
actors["Morgan Freeman"] = new Actor("Morgan Freeman",20);
actors["Tom Cruise"] = new Actor("Tom Cruise",30);
actors["Olga Kurlenko"] = new Actor("Olga Kurlenko",5);
actors["Dwayne Johnson"] = new Actor("Dwayne Johnson",10);
actors["Byung-hun Lee"] = new Actor("Byung-hun Lee",1);
actors["Jonathan Pryce"] = new Actor("Jonathan Pryce",2);

actors["Rachel Robert"] = new Actor("Rachel Robert",11);
actors["Shyaam Karra"] = new Actor("Shyaam Karra",3);
actors["Brent Wendell William"] = new Actor("Brent Wendell William",1);

actors["Robert De Niro"] = new Actor("Robert De Niro",30);
actors["Katherine Heigl"] = new Actor("Katherine Heigl",15);
actors["Diane Keaton"] = new Actor("Diane Keaton",20);
actors["Mark Wahlberg"] = new Actor("Mark Wahlberg",5);
actors["Dwayne Johnson"] = new Actor("Dwayne Johnson",4);
actors["Anthony Mackie"] = new Actor("Anthony Mackie",2);

actors["Robert Downney Jr."] = new Actor("Robert Downney Jr.",30);
actors["Gwyneth Paltrow"] = new Actor("Gwyneth Paltrow",35);
actors["Don Cheadle"] = new Actor("Don Cheadle",14);

for(var actorName in actors){
	console.log("Fetching movies for "+actorName);
	actors[actorName].fetchMovies();
}

Actor.setMovies = function(actorName,movieLines){

	if(actors[actorName]){
		actors[actorName].movies = Movie.createArrayOfMoviesFromList(movieLines);
		//console.log("new movie length for "+actorName+" = "+actors[actorName].movies.length);
	}else {
		console.log("There is no actor named '"+actorName+"' in our data");
	}
}

Movie.createArrayOfMoviesFromList = function(movieLines){
	var movies = new Array();
	for(var ll=0; ll<movieLines.length; ll++){
		var title = movieLines[ll].substr(movieLines[ll].indexOf(" "));
		movies[title] = new Movie(title);
	}
	return movies;
}

Actor.audit = function(){
	var ok = 0;
	for(var actorName in actors){
		console.log("X"+actors[actorName].movies);
		if(actors[actorName].movies != null){
			ok++;
		}
	}
	console.log("Actors audit: "+ok+"/"+Object.keys(actors).length+" ok");
}



//3-29
var giJoe = new Movie(
	"G.I. Joe: Retaliation",
	["Dwayne Johnson","Jonathan Pryce","Byung-hun Lee"],
	[new Writer("Rhett Reese"),new Writer("Paul Wernick")],
	[new Director("Jon M. Chu")]
);//3-29

var theHost = new Movie(
	"The Host",
	["Rachel Robert","Shyaam Karra","Brent Wendell William"],
	[new Writer("Stephanie Meyer"),new Writer("Andrew Niccol")],
	[new Director("Andew Niccol")]
);

//April 19, 2013
var oblivion = new Movie(
	"Oblivion",
	["Tom Cruise","Morgan Freeman","Olga Kurlenko"],
	[new Writer("Joseph Kosinski")],
	[new Director("Joseph Kosinski")]
);

//April 26, 2013
var bigWedding = new Movie(
	"The Big Wedding",
	["Robert De Niro","Katherine Heigl","Diane Keaton"],
	[new Writer("Justin Zackham"), new Writer("Jean-Stephane Bron")],
	[new Director("Justin Zackham")]
);

var painAndGain = new Movie(
	"Pain & Gain",
	["Mark Wahlberg","Dwayne Johnson","Anthony Mackie"],
	[new Writer("Christopher Markus"),new Writer("Stephen McFeely")],
	[new Director("Michael Bay")]
);

//May 3, 2013
var ironMan = new Movie(
	"Iron Man 3",
	["Robert Downney Jr.","Gwyneth Paltrow","Don Cheadle"],
	[new Writer("Drew Pearce"),new Writer("Shane Black")],
	[new Director("Shane Black")]
);	

allMovies = new Array();
allMovies[giJoe.title] = 	giJoe;
allMovies[theHost.title] = 	theHost;
allMovies[oblivion.title] =	oblivion;
allMovies[bigWedding.title] =bigWedding;
allMovies[painAndGain.title]=painAndGain;
allMovies[ironMan.title] =	ironMan;
