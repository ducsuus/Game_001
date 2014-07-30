game.CriminalSpawner = me.ObjectEntity.extend({
  "init": function(x, y, settings) {

    console.log("CriminalSpawner init called"); // called

    this.parent(x, y, settings);

    this.type = "Spawner";
    this.name = "Spawner";

    this.spawn();

  },


  spawn: function(){

    console.log("Look! === 1! " + game.crimes.length);

    index = Math.round(Math.random() * (game.crimes.length - 1))

    crime = game.crimes[index];

    game.crimes.splice(game.crimes, 1);

    console.log("Look! === 2! " + game.crimes.length);

    me.game.world.addChild(new game.crimeDictonary[crime]( 
      this.pos.x, 
      this.pos.y, 
      { gid: null,
        height: 64,
        image: "debug_die",
        isEllipse: false,
        isPolygon: false,
        isPolyline: false,
        name: "Criminal",
        spriteheight: 64,
        spritewidth: 64,
        type: undefined,
        width: 64,
        x: this.pos.x,
        y: this.pos.y,
        z: 100,

      } 
    ), 100);

  }


});