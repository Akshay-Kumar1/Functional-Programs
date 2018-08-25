var readline=require('readline');
var utility=require('/home/adminsitrator/Documents/akshayk/utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,output:process.stdout
});
function coinFlip(){
   read.question('Enter the number of times to be tossed: ',function(num){
    utility.coinFlip(num);
    read.close();
   })
    
}
coinFlip();