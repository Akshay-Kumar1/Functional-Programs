var readline=require('readline');
var utility=require('/home/adminsitrator/Documents/akshayk/utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,output:process.stdout
});
function harmonic()
{
    read.question('Enter the number :',function(num){
    utility.harmonic(num)
    read.close();
})
}
harmonic();