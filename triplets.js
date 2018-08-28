var prompt = require('prompt-sync')()
var utility = require('/home/adminsitrator/Documents/akshayk/utility/utility.js')

function triplets(){
    var num = prompt('Number of intergers : ');
    utility.triplets(num)
}
triplets()
