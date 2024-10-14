function checkFuel(fuel) {
    return new Promise((ok, non) => {
      if (fuel >= 9) {
        ok("Ready to launch");} 
        else {
        non("Please refill fuel");}});
  }
  
  checkFuel(10)
    .then(message=>console.log("Fuel 10:", message))
    .catch(erreur=>console.log("Fuel 10:", erreur));
    
  checkFuel(5)
    .then(message=>console.log("Fuel 5:", message))
    .catch(erreur=>console.log("Fuel 5:", erreur));