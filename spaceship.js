///Spaceship:

class Spaceship {
  constructor(name, crew, phasers, shields, cloaked, warpDrive, docked, phasersCharge) {
    this.name = name;
    this.crew = crew.map(function(oneCrewMember) {oneCrewMember.currentShip = this}.bind(this)); //added this
    //line above is saying: map over crew, and for each crewMember, set the crewMember's current ship to this ship
    //note: association between Spaceship and crewMember is happening in space-invaders-test.js, line 68: spaceship = new Spaceship('The Krestel', [tristan, jon, katie], 5, 4)
    //bind.this at end of line above is saying bind the 'this' within {crewMember.currentShip = this} to 'this' class Spaceship instance
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = cloaked = false;
    this.warpDrive = warpDrive = "disengaged";

    this.docked = docked;
    if (crew.length === 0) {
      this.docked = true; //set docked to true if there's no crew
    } else {
      this.docked = false; //set docked to false if there is a crew
    }

    this.phasersCharge = phasersCharge = "uncharged"; //default

  } //end class constructor
} //end class Spaceship
