var readline=require('readline');
var utility=require('/home/adminsitrator/Documents/akshayk/utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,output:process.stdout
});
function leapcheck(){
    read.question('Input Year: ', function(year)
    {
        utility.leapcheck(year)
        read.close();
    })
}
leapcheck();