var prompt = require('prompt-sync')();
var utility = require('/home/adminsitrator/Documents/akshayk/utility/utility.js')
function prime (){
    var num = prompt('Enter the number : ');
    utility.prime(num)
}
prime()