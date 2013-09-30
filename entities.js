function Actor(nameIn,prominenceIn){
	this.type = "Actor"; //deep copy doesn't preserve data type so keep reference to what I am here.
	this.name = nameIn; this.prominence=prominenceIn;
	
	//try to get movies list for actor
	$.ajax({
		url:"http://matkelly.com/projects/ieeevis/?actor=" + this.name
	}).done(function(resp){
		//console.log(resp);
		var obj = $.parseJSON(resp);
		console.log(obj);
	}).error(function(status,error){
		console.log(status);
		console.log(error);
	});
	
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