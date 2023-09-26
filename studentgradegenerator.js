//defines a function whereby score should be a number and then works on the score value with the statements to return a respective grade
const grades = function (score){
    if (Number.isNaN(score) || !Number.isInteger(score)){
        console.log("Not Allowed")// If it's not a valid number or integer, print "Not Allowed".
    }else if(score >= 80 && score <=100){
        console.log("A") // If the score is between 80 and 100 print "A".
    } else if (score >=60 && score <=79){
        console.log("B") // If the score is between 60 and 79, print "B".
    } else if (score >=49 && score <= 59){
        console.log("C") // If the score is between 49 and 59, print "c".
    } else if (score >=40 && score <=49){
        console.log("D") // If the score is between 40 and 49, print "d".
    } else if (score >=0 && score <= 39){
        console.log("E") // If the score is between 0 and 39, print "E".
    } 
    else{
        console.log(invalid)//if score does not fall in brackets above
    }
     
    };
    //calls the function with a score of 80
    grades(80);