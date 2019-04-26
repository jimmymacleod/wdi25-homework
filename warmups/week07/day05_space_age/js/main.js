console.log('Connected');

/*
- Given a # of seconds,
- convert seconds into Earth years
- apply the ratio to Earth Years to find out the planet years

USING A CONSTRUCTOR

SYNTAX
const Point = function ( x, y ) {
    this.x = x;
    this.y = y;
}
*/

const SpaceAge = function( inputSeconds ){
  this.seconds = inputSeconds;
  this.yearsOnEarth = this.seconds / 31557600;
  this.earthYearsToPlanets = {
    Earth: 1,
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132
  };

  this.yearsOnAllPlanets = function(){
    // calculate Planet years:
     // this.yearsOnEarth / this.earthYearsToPlanets.Mercury

    // for .. in loop
    // - apply the ratio to Earth Years to find out the planet years
    for (let key in this.earthYearsToPlanets ){
      let ratio = this.earthYearsToPlanets[key]; //0.2408467
      let numYears = this.yearsOnEarth / ratio;

      //this.yearsOnEarth / this.earthYearsToPlanets.Mercury
      console.log(`You are ${numYears} ${key}-years old`);
      // You are 31.68808781402895 Earth-years old
    }

  };
  // debugger;


  this.yearsOnPlanet = function(planet){

    //basically a copy and paste line 40-44 above but remember we're taking a specific planet as an input
    let yearsOnEarth = this.yearsOnEarth;
    let ratio = this.earthYearsToPlanets[planet]; //0.2408467
    // debugger;
    let numYears = this.yearsOnEarth / ratio;
    // console.log({yearsOnEarth, ratio, numYears})
    console.log(`You are ${numYears} ${planet}-years old`);
  }

}

const age = new SpaceAge(1000000000);
const priyanka = new SpaceAge(50000000);
console.log(age.yearsOnAllPlanets());
console.log(priyanka.yearsOnAllPlanets());
