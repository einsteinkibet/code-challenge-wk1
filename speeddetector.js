// This function takes a 'speed' parameter as input and determines the appropriate response based on the speed.
function speedDetector(speed) {
    const speedLimit = 70;//speed limit
    const demeritPointsPerKm = 5;//points for every kilometer above limit
    const pointsThreshold = 12;//Threshold beyond which a license is suspended
  
    if (speed < speedLimit) {
      console.log("Ok");//prints OK if speed limit is nt exceeded
    } else {
      const points = Math.floor((speed - speedLimit) / demeritPointsPerKm);
  
      if (points > pointsThreshold) {
        console.log("License suspended");//prints "lisence suspended after" after speed exceeds threshold
      } else {
        console.log("Points: " + points);//prints number of points beforw threshold is reached
      }
    }
  }
  
  speedDetector("70");//calls the function with speed of 70 km/h
