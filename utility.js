module.exports={
    leapcheck: function(year)
    {
        if(year%4==0 && year%100!=0 || year%400==0)
        {
            console.log("Leap Year");
        }
        else
        { 
            console.log("Not a leap year");
        }
},
  stringReplace: function(userinput)
  {
      if(userinput.length>=3)
      console.log('Hi ' + userinput + ' how are u');
      else console.log('Length of name is less');
  },
  powerof: function(num)
  {
      for(var i=0;i<=num;i++){
          var res = Math.pow(2,i);
          console.log('2 to the power of ' + i +' is ' + res);
      }    
  },
  harmonic: function(num)
  {
      var sum=0,i;
      for(i=1;i<=num;i++){
        sum+=1/i;
      }      
      console.log('Harmonic Sum is ' + sum);

  },
  primeFactor: function(num)
  {
    var primeArray = [];
    var isPrime=0;
    for (i = 2; i < num/2; i++) {
      if (num % i == 0) {
    
        for (var j = 2; j <= i / 2; j++) {
          if (i % j == 0) {
            isPrime = false;
          } else {
            isPrime = true;
          }
        }

        if (isPrime == true) {
          
          num /= i
          primeArray.push(i);
        }
      }
    }
    
    for (var k = 0; k < primeArray.length; k++) {
      console.log(primeArray[k]);
    }
    
  },

  coinFlip : function(num){
    var result=0;
    var count=0;
    for(var i=1;i<=num;i++)
    {
        result = Math.random()
        if(result < 0.5)
        {
            count++;
        }  
        var tp=(count/num)*100;
        var hp=100-Number(tp);
  }  
  
  console.log('Heads : '+ hp +'%');
  console.log('Tails : '+ tp +'%');
},

gambler: function(stakes,goal,trails){

    var bets=0;
    var wins=0;
    for(var i=1;i<=trails;i++){

      var cash=stakes;
      while(cash>0 && cash<goal){
        bets++;
        var check=Math.random()
        if(check < 0.5)
        cash--;
        else 
        cash++;

      }
      if(cash==goal)
      wins++;
    }
      var wp=(wins/trails)*100;
      var lp=100-wp
      console.log('Number of Wins : ' + wins);
      console.log('Wins percentage '+ wp+'%');
      console.log('Loss percentage '+ lp+'%');  
  
},

euclid : function(x,y){

    var dist;
    dist=Math.sqrt(Math.pow(x,2)+Math.pow(y,2))
    console.log('Distance Between the provided point and origin is '+dist);
},

quadratic : function(a,b,c){
    var delta=(b*b)-(4*a*c);
    console.log('delta value : '+delta);
    if(delta > 0)
    {
    var r1=(-b + Math.sqrt(delta))/2*a;
    var r2=(-b - Math.sqrt(delta))/2*a;

    console.log('Roots are : '+ r1 , r2)
    
}
else{
  console.log('Roots are imaginary');
}
},

windchill:function(temp,speed){

    
    if(temp<50 && speed>3 && speed<120){
    var res = 35.74 + 0.6215*temp +(0.4275*temp - 35.75)*Math.pow(speed,0.16);
    console.log('Windchill is ' + res);
    }
    else {console.log('Values not in the range')}
  },
    
  coupon : function(min,max,num){

    var arr=[];
   for(var i=0;i<=num;i++){
     arr.push(Math.floor(Math.random(min,max)))
   } 
   for(i=0;i<=arr.length;i++){

    if(arr[i]==arr[i+1]){
      arr.pop(arr[i+1])
    }
   }
    for(var j=0;j<arr.length;j++){
      console.log('Distinct Numbers :'+arr[j])
    }
  },
  getCurrentTime : function(){
    var d=new Date();
    var n=d.getTime();
    return n;
  },
  getElapsedTime : function(startTime,stopTime){
    var elapsed = (stopTime-startTime)/1000;
    return elapsed;
  },

  array : function(row){
    var prompt = require('prompt-sync')();
    var arr = new Array(row)
    var column = prompt('Enter columns : ');
    
    for(var i=0;i<row;i++){
      
      arr[i]= new Array(column)
      for(var j=0;j<column;j++){
          
          arr[i][j]=prompt('Enter Elements : ')      
        }
    }
    console.log(arr)
  },

triplets : function(num){

    var prompt = require('prompt-sync')();
    var arr = new Array(num);
    var arr1= new Array()
    var count = 0 ;
    var result = '';
    for(var i=0;i<num;i++){

      arr[i]=prompt('Enter elements : ');
    } 
    console.log(arr)

for(var i=0 ; i<arr.length;i++){

  for(var j=i+1;j<arr.length;j++){
      
    for(k=j+1;k<arr.length;k++){

      var sum = Number(arr[i])+Number(arr[j])+Number(arr[k])
      if(sum==0){
        count++;
        arr1.push(arr[i]+','+arr[j] +','+ arr[k] + ' ');
        
      }
    }

  }
}
function dup(arr){
   var uniquearray=[];
   for(var i=0;i<arr.length;i++)
   {
     if(uniquearray.indexOf(arr[i])==-1)
     {
       uniquearray.push(arr[i])
     }
   }
return uniquearray;
}

  console.log(dup(arr1))
  console.log(dup(arr1).length)
},


permutate : function(str){
    var permutations = [];
    permutate1(str,[])
    console.log(permutations)

    function permutate1(str,arr){
      if(typeof (str)=='string')
         str=str.split('');
      
      if(str.length==0)
         permutations.push(arr.join(''))
  
    for(var i=0; i< str.length;i++){
    var x= str.splice(i,1)
    arr.push(x)
    permutate1(str,arr)
    arr.pop()
    str.splice(i,0,x)
  }
}
}

}
