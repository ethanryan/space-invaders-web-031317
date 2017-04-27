// Space flight is no joke, and neither is this lab.
// You're going to need to create two ES6 JS classes,
// Spaceship and CrewMember. These classes will pump out instances
// that are by default unable to interact with one another.

// A space ship will be inactive if it is created without a crew.
// And a crew member by default will be hanging out in the
// Cantina looking for a ride if they were not put inside a ship
// when it is initialized.

// Crew members will also be unable to use their special abilities
// if they're not assigned to a ship.
// For example, a pilot cannot engageWarpDrive if he is not
// in a ship and, therefore, can't make the
// Kessel Run in less than twelve parsecs.

// Crew members also should be unable to perform certain
// actions that their positions are incapable of doing.
// To have these two object types be aware of one another
// we need to have the ship become aware of it's crew members
// when it's created. This will also require you to make
// sure a crew member becomes aware of their ship when
// they are added to it.

//CrewMember:

class CrewMember {
  constructor(position, currentShip) {
    this.position = position;
    this.currentShip = currentShip = "Looking for a Rig";
  } //end class constructor

  // katie.chargePhasers()
  // expect(spaceship.phasersCharge).toBe('charged!')

  engageWarpDrive() {
    if ( (this.position === "Pilot") && (this.currentShip != "Looking for a Rig") ) {
    //if ( (this.position === "Pilot") ) {
      this.currentShip.warpDrive = "engaged!";
      //Spaceship.warpDrive = "engaged!"; //call this...
      return "engaged!"; //spaceship should return 'engaged!' if crewMember.position is Pilot
    } else {
      return "had no effect";
    }
  }

  chargePhasers() {
    if ( (this.position === "Gunner") && (this.currentShip != "Looking for a Rig") ) {
      this.currentShip.phasersCharge = "charged!";
      return "charged!"; //spaceship should return 'charged!' if crewMember.position is Gunner
    } else {
      return "had no effect";
    }
  }

  setsInvisibility() {
    if ( (this.position === "Defender") && (this.currentShip != "Looking for a Rig") ) {
      this.currentShip.cloaked = true;
      return "cloaked!"; //spaceship should return 'charged!' if crewMember.position is Gunner
    } else {
      return "had no effect";
    }
  }
} //end of class
