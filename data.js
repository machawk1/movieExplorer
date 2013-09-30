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
	
//3-29
var giJoe = new Movie(
	"G.I. Joe: Retaliation",
	[actors["Dwayne Johnson"],actors["Jonathan Pryce"],actors["Byung-hun Lee"]],
	[new Writer("Rhett Reese"),new Writer("Paul Wernick")],
	[new Director("Jon M. Chu")]
);//3-29

var theHost = new Movie(
	"The Host",
	[actors["Rachel Robert"],actors["Shyaam Karra"],actors["Brent Wendell William"]],
	[new Writer("Stephanie Meyer"),new Writer("Andrew Niccol")],
	[new Director("Andew Niccol")]
);

//April 19, 2013
var oblivion = new Movie(
	"Oblivion",
	[actors["Tom Cruise"],actors["Morgan Freeman"],actors["Olga Kurlenko"]],
	[new Writer("Joseph Kosinski")],
	[new Director("Joseph Kosinski")]
);

//April 26, 2013
var bigWedding = new Movie(
	"The Big Wedding",
	[actors["Robert De Niro"],actors["Katherine Heigl"],actors["Diane Keaton"]],
	[new Writer("Justin Zackham"), new Writer("Jean-Stephane Bron")],
	[new Director("Justin Zackham")]
);

var painAndGain = new Movie(
	"Pain & Gain",
	[actors["Mark Wahlberg"],actors["Dwayne Johnson"],actors["Anthony Mackie"]],
	[new Writer("Christopher Markus"),new Writer("Stephen McFeely")],
	[new Director("Michael Bay")]
)

//May 3, 2013
var ironMan = new Movie("Iron Man 3",[new Actor("Robert Downney Jr.",30),new Actor("Gwyneth Paltrow",35),new Actor("Don Cheadle",14)],[new Writer("Drew Pearce"),new Writer("Shane Black")],[new Director("Shane Black")])	

allMovies = [giJoe,theHost,oblivion,bigWedding,painAndGain,ironMan];