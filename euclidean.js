var readline = require('readline');
var utility= require('/home/adminsitrator/Documents/akshayk/utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,output:process.stdout
});
function euclid(){
    read.question('Enter the x coordinate :',function(x){
        read.question('Enter the y coordinate :',function(y){
            utility.euclid(x,y);
            read.close();
        })
    })


}
euclid();