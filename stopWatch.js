var readline = require('readline')
var utility = require('/home/adminsitrator/Documents/akshayk/utility/utility.js')
var startTime=0;
var read = readline.createInterface({
    input:process.stdin,output:process.stdout
})
stopwatch();
function stopwatch(){
    read.question('Press  1 to start : ',function(start){
        if(start==1){

                startTime=utility.getCurrentTime();
                read.question('Press 0 to end :',function(stop){
                    if(stop==0){
                var stopTime = utility.getCurrentTime()
                var res = utility.getElapsedTime(startTime,stopTime)
                console.log("Elapsed Time = " + res + ' seconds');
                read.close();
                    }
                    else {
                        console.log('Invalid input ');
                        read.close();
                    }
            })  
        }
        else{
            console.log('Invalid');
            read.close();
        }
    })
}
