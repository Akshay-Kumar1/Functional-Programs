var readline = require('readline')
var utility = require('/home/adminsitrator/Documents/akshayk/utility/utility.js')
var read = readline.createInterface({
    input:process.stdin,output:process.stdout
})

function coupon(){
    read.question('Enter minimum number : ',function(min){
        read.question('Enter maximum number : ',function(max){
            read.question('Enter the number of coupons : ',function(num){
                
            utility.coupon(min,max,num);
            read.close();
            })
        })
    })
}
coupon();