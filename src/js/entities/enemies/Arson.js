game.arson = game.Criminal.extend({
	"init": function(x, y, settings) {

		settings.image = "arsonSpriteSheet";

	  	this.parent(x, y, settings);

	  	this.type = "Arson"

	    this.health = 10;

	    console.log(this.type);


  }

});