var readline=require('readline')
var utility=require('/home/adminsitrator/Documents/akshayk/utility/utility.js')
var read=readline.createInterface({
    input:process.stdin,output:process.stdout
});
function gambler(){
    read.question('Stakes:',function(stakes){
        read.question('Goal:',function(goal){
            read.question('Trails:',function(trails){
                utility.gambler(stakes,goal,trails)
                read.close(); 
            })
        })
    })
    
}
gambler();