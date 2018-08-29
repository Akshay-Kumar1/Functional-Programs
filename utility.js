module.exports={
    leapcheck: function(year)
    {
        if(year%4==0 && year%100!=0 || year%400==0) //check if number is divisible by 4 or 400 
        {
            console.log("Leap Year");// its a leap year
        }
        else
        { 
            console.log("Not a leap year"); // else not a leap year
        }
},
  stringReplace: function(userinput)
  {
      if(userinput.length>=3) // insufficient length of string
      console.log('Hi ' + userinput + ' how are u');
      else console.log('Length of name is less');
  },
  powerof: function(num)
  {
      for(var i=0;i<=num;i++){
          var res = Math.pow(2,i); //calculation of power of 2
          console.log('2 to the power of ' + i +' is ' + res);// printing result
      }    
  },
  harmonic: function(num)
  {
      var sum=0,i;
      for(i=1;i<=num;i++)
      {
        sum+=1/i; //cosecutively adding the sum 
      }      
      console.log('Harmonic Sum is ' + sum); // printing the sum

  },
  prime : function(num)
  
  {
       var factors = []; //initialize empty arrary
       while (num % 2 === 0) //check if number divisible by 2
       {
        factors.push(2);  // push into array
        
        num = num / 2; // divide by 2
       }
    
      var sqrtNum = Math.sqrt(num); //calculate square root of the number
      for (var i = 3; i <= sqrtNum; i++) 
      {
            while (num % i === 0) // check factors are prime factors
            {
              factors.push(i);
              num = num / i;
            }
    }
    if(num ==1) // if input 1 , prime factor is 1
    console.log('1');
    
    if (num > 2) 
    {
        factors.push(num); // push factors into array
    }
    console.log(factors);// print
  
  },

  coinFlip : function(num)
  {
    var result=0;
    var count=0; // initialize result and count to zero
    for(var i=1;i<=num;i++)
    {
        result = Math.random() // generates random numbers between 0.1 to 1
        if(result < 0.5)
        {
            count++; //count number of values less thatn 0.5
        }  
        var tp=(count/num)*100; // tails percentage calculation
        var hp=100-Number(tp); // heads percentage calculation
  }  
  
  console.log('Heads : '+ hp +'%');
  console.log('Tails : '+ tp +'%');
},

gambler: function(stakes,goal,trails){

    var bets=0;
    var wins=0;
    for(var i=1;i<=trails;i++) // loop for trails
    {
      var cash=stakes;
      while(cash>0 && cash<goal) // untill cash is 0 or he/she reaches the goal
      {
        bets++;
        var check=Math.random() // random numbers between 0.1 to 1
        if(check < 0.5)
        cash--; // decrement cash
        else 
        cash++; // increment cash

      }
      if(cash==goal) // goal acheived
      wins++; // increment wins
    }
      var wp=(wins/trails)*100; // calculate win percentage
      var lp=100-wp
      console.log('Number of Wins : ' + wins);
      console.log('Wins percentage '+ wp+'%');// printing percentages
      console.log('Loss percentage '+ lp+'%');  
  
},

euclid : function(x,y){

    var dist;
    dist=Math.sqrt(Math.pow(x,2)+Math.pow(y,2)) // formula for euclidean distance
    console.log('Distance Between the provided point and origin is '+dist); // printing distance
},

quadratic : function(a,b,c)
{
    var delta=(b*b)-(4*a*c); // calculation of delta
    console.log('delta value : '+delta);
    if(delta > 0) // if delta greater then zero calulate roots
    {

    var r1=(-b + Math.sqrt(delta))/2*a;// root 1
    var r2=(-b - Math.sqrt(delta))/2*a;// root 2
    console.log('Roots are : '+ r1 , r2)
    
    }
    else
    {
      console.log('Roots are imaginary'); // priting message imaginary roots
    }
},

windchill:function(temp,speed)
{

    if(temp<50 && speed>3 && speed<120) // temperature less than 50 , speed (3-120)
    {
        var res = 35.74 + 0.6215*temp +(0.4275*temp - 35.75)*Math.pow(speed,0.16);
        console.log('Windchill is ' + res);
    }
    else 
    {
        console.log('Values not in the range')
    }
},
    
coupon : function(min,max,num)
{
    var arr=[];
   for(var i=0;i<=num;i++)
   {
      arr.push(Math.floor(Math.random(min,max)*100000)) // pushing rounded off random number
   } 

   for(i=0;i<=arr.length;i++)
   {
      if(arr[i]==arr[i+1]) // checking if duplicates are present
      {
        arr.pop(arr[i+1]) // popping element if two coupons are same
      }
   }

    for(var j=0;j<arr.length;j++)
    {
      console.log('Distinct Numbers :'+arr[j]) // printing distinct coupons
    }

},
  
getCurrentTime : function()
{
    var d=new Date(); //fetches todays date
    var n=d.getTime(); // fetches current time
    return n;
},
getElapsedTime : function(startTime,stopTime)
{
    var elapsed = (stopTime-startTime)/1000; // elapsed time from start to stop
    return elapsed;
},

array : function(row)
{
    var prompt = require('prompt-sync')();
    var arr = new Array(row) // creating array of size row
    var column = prompt('Enter columns : '); // prompt in console
    
    for(var i=0;i<row;i++) // loop for rows
    {
      arr[i]= new Array(column)
      for(var j=0;j<column;j++) // loop for columns
      {
          arr[i][j]=prompt('Enter Elements : ')  //prompting user for elements   
      }
    }
    console.log(arr)
},

triplets : function(num)
{
    var prompt = require('prompt-sync')();
    var arr = new Array(num);
    var arr1= new Array()
    var count = 0 ;
    var result = '';
    for(var i=0;i<num;i++)
    {

      arr[i]=prompt('Enter elements : '); // user input for array
    } 
    console.log(arr) // printing the arrary of integers

  for(var i=0 ; i<arr.length;i++) 
  {

    for(var j=i+1;j<arr.length;j++)
      {
      
        for(k=j+1;k<arr.length;k++)
        {

          var sum = Number(arr[i])+Number(arr[j])+Number(arr[k]) // checking the sum of integers
              
          if(sum==0) // if sum is zero 
          {
            count++; // increment count
            arr1.push(arr[i]+','+arr[j] +','+ arr[k] + ' '); //print the triples
        
          }
        }

      }
  }
  function dup(arr) // removing the duplicates
  {
    var uniquearray=[];
    for(var i=0;i<arr.length;i++)
    {
     if(uniquearray.indexOf(arr[i])==-1)
     {
       uniquearray.push(arr[i]) // push if unique
     }
    }
    return uniquearray; // return unique
  }
  console.log(dup(arr1))
  console.log(dup(arr1).length)
},


permutate : function(str)
{
    var permutations = []; // arrary for checking permutation(empty)
    permutate1(str,[])
    console.log(permutations)

    function permutate1(str,arr)
    {
      if(typeof (str)=='string') // if input type is string
         str=str.split(''); // split the string
      
      if(str.length==0)
         permutations.push(arr.join('')) // append the string to the previous
  
    for(var i=0; i< str.length;i++) // loop till string length
    {
      var x= str.splice(i,1)
      arr.push(x)
      permutate1(str,arr) // recursive calling of function
      arr.pop()
      str.splice(i,0,x)
    }
    }
},
}

