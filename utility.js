const la = require('lodash')
module.exports={
    
        /**
         * @description : prompts input from the user for the variable year
         * 1. @param year
         */
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

    /**
     * @description : prompts input from the user for the variable str
     * @param str
     */
  stringReplace: function(str)
  {
    /**
     * @description : checks if input string length is greater than 3
     */
      if(str.length>=3) 
      console.log('Hi ' + str + ' how are u');
      else console.log('Length of name is less');
  },
  /**
   * @description : takes num as input from user
   * @param num
   */
  powerof: function(num)
  {
      for(var i=0;i<=num;i++)
      {
   /**
   * @description :  calculation of power of 2
   */
          var res = Math.pow(2,i);
          console.log('2 to the power of ' + i +' is ' + res);
      }    
  },


   /**
   * @description :  takes num as input from user
   */
  harmonic: function(num)
  {
      var sum=0,i;
   /**
   * @description :  adding consecutive sum of all 1/i 
   */
      for(i=1;i<=num;i++)
      {
        sum+=1/i;
      }      
      console.log('Harmonic Sum is ' + sum); 

  },
   /**
   * @description :  takes num as input from user
   */
  prime : function(num)
  
  {
       var factors = []; 
   /**
   * @description :  check if entered number is divisible by 2
   */
       while (num % 2 === 0) 
       {
        factors.push(2);  
        
        num =num / 2;
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
   /**
   * @description : takes user input for num
   */

  coinFlip : function(num)
  {
    var result=0;
    var count=0; // initialize result and count to zero
    for(var i=1;i<=num;i++)
    {
   /**
   * @description :  Math.random() generates random number 0-1
   */
        result = Math.random() 
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
   /**
   * @description :  user input is required for stakes , goal , trails
   */
gambler: function(stakes,goal,trails){

    var bets=0;
    var wins=0;
    for(var i=1;i<=trails;i++) // loop for trails
    {
      var cash=stakes;
   /**
   * @description : while loop runs until cash becomes zero and he/she reaches a goal
   */
      while(cash>0 && cash<goal)
      {
        bets++;
        var check=Math.random() 
        if(check < 0.5)
        cash--; //decrement cash
        else 
        cash++; // increment cash

      }
      /**
       * @description : if goal is achieved
       */
      if(cash==goal) 
      wins++; // increment wins
    }
      var wp=(wins/trails)*100; // calculate win percentage
      var lp=100-wp
      console.log('Number of Wins : ' + wins);
      console.log('Wins percentage '+ wp+'%');// printing percentages
      console.log('Loss percentage '+ lp+'%');  
  
},
      /**
       * @description : input the coordinates for X & Y
       */
euclid : function(x,y){
       /**
       * @description : calculation of square root of x^2+y^2
       */
    var dist;
    dist=Math.sqrt(Math.pow(x,2)+Math.pow(y,2)) // formula for euclidean distance
    console.log('Distance Between the provided point and origin is '+dist); // printing distance
},
        /**
       * @description : input the coefficients of x^2 , x and constant
       */
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
       /**
       * @description : takes input from user for temerature and speed
       */

windchill:function(temp,speed)
{

       /**
       * @description : checks if temperature < 50 and speed between 3 and 120
       */
    if(temp<50 && speed>3 && speed<120) 
    {
        var res = 35.74 + 0.6215*temp +(0.4275*temp - 35.75)*Math.pow(speed,0.16);
        console.log('Windchill is ' + res);
    }
    else 
    {
        console.log('Values not in the range')
    }
},
       /**
       * @description : takes input for minimum and maximum and number of coupons;
       */
    
coupon : function(min,max)
{
    var random = [],count,numbers;
    for(count=min;count<=max;count++){
        numbers = la.random(min,max)
        random.push(numbers)
    }
    console.log(random)
    console.log('No of coupons generated = '+ random.length)
    var distinct = new Set(random)
    var distarr = []
    distarr=Array.from(distinct)
    console.log(distarr)
    console.log('Number of distinct coupons = '+ distarr.length)

},
        /**
       * @description : getCurrentTime function returns the current date and time
       */
getCurrentTime : function()
{   
    var d=new Date(); // fetches the current date
    var n=d.getTime(); // fetches current time
    return n;
},
       /**
       * @description : getElapsed function returns the difference of milliseconds between start and end
       * @param startTime @param stopTime 
       */
getElapsedTime : function(startTime,stopTime)
{
    var elapsed = (stopTime-startTime)/1000; // elapsed time from start to stop
    return elapsed;
},
     /**
       * @description : getCurrentTime function returns the current date and time
       * @param row 
       */
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
    if((str>='a' && str <='z') || (str>='A' && str<='Z'))
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
}
else{
    console.log('String  input only');
}
},
}

