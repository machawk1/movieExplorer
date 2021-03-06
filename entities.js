function Actor(nameIn,prominenceIn){
	this.type = "Actor"; //deep copy doesn't preserve data type so keep reference to what I am here.
	this.name = nameIn; this.prominence=prominenceIn;
	//this.getMovies(); //hmm, why doesn't this work?
	
	this.fetchMovies = function(){
		//try to get movies list for actor
		var movies;
		$.ajax({
			url:"http://matkelly.com/projects/ieeevis/?actor=" + this.name//,
			//timeout: 3000
		}).done(function(resp){
			var lines = resp.split("\r\n");
			var actorName = lines.splice(0,1);
			console.log("setting movies for "+actorName);
			viz.updatePercentage();
			Actor.setMovies(actorName,lines);
		}).fail(function(status,error,x){
			console.log("error!");
			console.log(status);
			console.log(error);
			console.log(x);
			$("rect").addClass("error");
		});
	};
	
	this.setMovies = function(m){
		console.log("SETTING MOVIES!");
		this.movies = m;
	}
	
}

function Writer(nameIn){
	this.type = "Writer"; 
	this.name = nameIn;
}

function Director(nameIn){
	this.type = "Director";
	this.name = nameIn;
}

function Movie(titleIn,actorsIn,writersIn,directorsIn){
	this.type = "Movie";
	this.title = titleIn;
	this.actors = actorsIn;
	this.writers = writersIn;
	this.directors = directorsIn;
}
