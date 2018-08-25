var readline = require('readline');
var utility = require('/home/adminsitrator/Documents/akshayk/utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,output:process.stdout
});
function primeFactor()
{
    read.question('Enter the number : ',function(num){
        utility.primeFactor();
        read.close();
    })
    
}
primeFactor();