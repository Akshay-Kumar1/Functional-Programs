var readline = require('readline')
var utility = require('/home/adminsitrator/Documents/akshayk/utility/utility.js')
var read = readline.createInterface({
    input:process.stdin,output:process.stdout
})
function windchill(){

    read.question('Temperature (less than 50): ',function(temp){
    read.question('Windspeed (between 3 & 120): ',function(speed){
        utility.windchill(temp,speed);
        read.close();
    });
    });

}
windchill();