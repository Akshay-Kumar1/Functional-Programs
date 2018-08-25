var readline= require('readline');
var utility=require('/home/adminsitrator/Documents/akshayk/utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,output:process.stdout
})
function quadratic(){
    read.question('Enter a : ',function(a){
        read.question('Enter b :',function(b){
            read.question('Enter c :',function(c){
                utility.quadratic(a,b,c);
                read.close();
            })
        })
    })
  
    
}
quadratic();