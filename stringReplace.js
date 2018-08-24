var readline=require('readline');
var utility=require('/home/adminsitrator/Documents/akshayk/utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,output:process.stdout
});
function stringReplace(){

    read.question('Enter the username : ',function(userinput){
        utility.stringReplace(userinput);
        read.close();
    });
}
stringReplace();