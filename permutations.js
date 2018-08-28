var prompt = require('prompt-sync')()
var utility = require('/home/adminsitrator/Documents/akshayk/utility/utility.js')
function permutate(){
    var str = prompt('Enter the string :');
    utility.permutate(str);
}
permutate()