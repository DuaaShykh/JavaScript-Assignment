document.write("Ch_1 <br><br>");//Chapter#1

alert("Greetings!");//Q:1
alert("Error! Please enter a valid password.");//Q:2
alert("Welcome to JS Land...\nHappy coding!");//Q:3
alert("Welcome to JS Land..");//Q:4
alert("Happy coding!\nPrevent this page from creating additional dialogs");
alert("Hello... I can run JS through my web browser's console");//Q:5


document.write("Ch_2 <br><br>");//chapter#2
var username;//Q:1
var myName="Duaa Shaikh";//Q:2
var message="Hello World";//Q:3
var studentName="John Doe";//Q:4
var studentAge="15 years old";
var studentProfession="Certified Mobile Application Development";
var display="PIZZA\nPIZZ\nPIZ\nPI\nP";//Q:5
var email="duashykh68%7@gmail.com"//Q:6
var book="A smarter way to learn Javascript"//Q:7
alert(message);
alert(studentName);
alert(studentAge);
alert(studentProfession);
alert(display);
alert("My email address is "+ email);
alert("Yah! I can write HTML content through JavaScript")//Q:8
alert("i am trying to learn from the Book "+ book);
alert("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");//Q:9



document.write("Ch_3 <br><br>");//Chapter#3
var username;//Q:1
var myName="Duaa Shaikh";//Q:2
var message="Hello World";//Q:3
var studentName="John Doe";//Q:4
var studentAge="15 years old";
var studentProfession="Certified Mobile Application Development";
var display="PIZZA\nPIZZ\nPIZ\nPI\nP";//Q:5
var email="duashykh68%7@gmail.com"//Q:6
var book="A smarter way to learn Javascript"//Q:7
alert(message);
alert(studentName);
alert(studentAge);
alert(studentProfession);
alert(display);
alert("My email address is "+ email);
alert("Yah! I can write HTML content through JavaScript")//Q:8
alert("i am trying to learn from the Book "+ book);
alert("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");//Q:9


document.write("Ch_4 <br><br>");//Chapter#4


var x,y,z; //Q:1

var a,_b,c1,b,d;//Q:2
//var 1s,2d,+b,82,9; 

document.write("Q:3 <br><br>");//Q:3
document.write("Rules for naming JS variables <br><br>");
var a="numbers,",b="$,",c="and _.",d="letter,";
document.write("Variables names can only contain"+a+b+c+"<br>Variables must begin with a"+d+b+c+"<br>Variable names are case sensitive"+"<br>Variables names should not be JS keywords<br>");

document.write("Ch:5 <br> <br>");//Chapter#5

document.write("Q:1 <br><br>");//Q:1

var a= +prompt("Enter 1st number" );
var b= +prompt("Enter 2nd number" );
var c=a+b;
document.write("sum of " + a + " " + "and"+ " " + b + " "+ "is" + " "+ c +"<br><br>" );

document.write("Q:2 <br><br>");//Q:2
var val1= +prompt("Enter 1st number" );
var val2= +prompt("Enter 2nd number" );
var sub=val1-val2;
var mul=val1*val2;
var div=val1/val2;
var mod=val1%val2;
document.write("Subtraction of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ sub +"<br><br>" );
document.write("Multiplication of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ mul +"<br><br>" );
document.write("Division of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ div +"<br><br>" );
document.write("Modulus of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ mod +"<br><br>" );


document.write("Q:3 <br><br>");//Q:3
var v;
document.write("Value after variable declaration is: " + v + "<br>") ;
v=14;
document.write("Intial Value :" + v + "<br>");
document.write("Value after increment is :" + (++v) + "<br>");
v=v+7;
document.write("Value after addition is :" + v + "<br>");
document.write("Value after decrement is :" + (-- v) + "<br>");
document.write("The remainder is :" + v/3 + "<br><br>");

document.write("Q:4 <br><br>");//Q:4
var people=+prompt("Enter total number of people");
var tp=600*people;
document.write("Total cost to buy" + " " + people + " "+ "tickets to a movie is "+ ""+ tp+"PKR <br> <br>" );


document.write("Q:5 <br><br>");//Q:5
var num=+prompt("Enter any number for multiplication");
var length=+prompt("Enter length of table");
document.write("Table of" + " " + num  + " <br>" );
for(var i=1; i<=length;i++)
{
    var table=num*i;
    document.write(num + "*"+ i + "="+ table + "<br><br>");
}

document.write("Q:6 <br><br>");//Q:6
document.write("The Temperature Converter <br> <br>");
var celsius=+prompt("Enter temperature in celsius");
var fahrenheit=+prompt("Enter temperature in fahrenheit");
document.write(celsius+"oC" +" " + "is" +" "+((celsius*(9/5))+32)+"oF <br>");
document.write(fahrenheit+"oF" +" "+ "is"+" "+ ((fahrenheit-32)*(5/9)) +"oC <br> <br>");


document.write("Q:7 <br><br>");//Q:7
document.write("Shopping Cart <br><br>");
var item1=650;
var item2=100;
var quantity_item1=+prompt("Enter Quantity of item1");
var quantity_item2=+prompt("Enter Quantity of item2");
var ship_charges=100;
document.write("Price of item 1 is:" +" " + item1 +"<br>");
document.write("Quantity of item 1 is: "+ " " +  quantity_item1 +"<br>");
document.write("Price of item 2 is:" + " " + item2 +"<br>");
document.write("Quantity of item 2  is: " +" " + quantity_item2 +"<br>");
document.write("Shippment Charges :" + " " + ship_charges+"<br>");
document.write("Total cost of your order is:" +  " " + ((item1*quantity_item1)+(item2*quantity_item2)) +"<br><br>");

document.write("Q:8 <br><br>");//Q:8
document.write("Mark Sheet <br><br>");
var total_marks= +prompt("Enter total marks");
var obtained_marks=+prompt("Enter obtained marks");
var percentage=(obtained_marks/total_marks)*100;
document.write("Total marks: " + " " + total_marks+ "<br>");
document.write("Obtained marks: " + " " + obtained_marks+ "<br>");
document.write("Percentage: " + " " + percentage+ "%  <br><br>");

document.write("Q:9 <br><br>");//Q:9
document.write("Currency in PKR <br><br>");
var dollar_1 = 104.80;
var saudiRiyal_1=28;
document.write("Total Currency in PKR:"+" " + ((10*dollar_1)+(25*saudiRiyal_1)) +"<br><br>");

document.write("Q:10 <br><br>");//Q:10
var number=3;
document.write("Result:"+" "+ ((number+5)*10)/2 + "<br> <br>");

document.write("Q:11 <br><br>");//Q:11
document.write("Age Calculator <br><br>");
var current_year=2020;
var birth_year=+prompt("Enter your Birth Year");
document.write("Current Year: "+" "+ current_year+ "<br>");
document.write("Birth Year: "+" "+ birth_year + "<br>");
document.write("Your Age is: "+" "+ (current_year-birth_year) +"<br><br>");


document.write("Q:12 <br><br>");//Q:12
document.write("The Geometrize <br><br>");
var r=+prompt("Enter Radius");
var pi=3.142;
document.write("The Radius of Circle is: " +" "+ r +"<br>");
document.write("The Circumference is:"+ " " + 2*pi*r+ "<br>");
document.write("Area of circle is: "+" "+ pi*r*r + "<br> <br>");



document.write("Q:13 <br><br>");//Q:13
document.write("The Lifetime Supply Calculator<br><br>");
var fav_snack=prompt("Enter your Favourite Snack");
var current_age=+prompt("Enter your current age");
var max_age=+prompt("Enter your estimated maximum age");
var snack_perDay=+prompt("Enter estimated amount of snack per day");

document.write("Favourite Snack:"+" " + fav_snack + "<br>");
document.write("Current age:"+" " + current_age + "<br>");
document.write("Estimated Maximum Age:"+" " + max_age + "<br>");
document.write("Amount of snacks per day:"+" " + snack_perDay + "<br>");
document.write("You will need:"+" " +((max_age-current_age)*snack_perDay) +" "+ "chocolate chip to last you until the ripe old age of"+" "+ max_age+ "<br>" );

document.write("Ch_6-9 <br><br>"); //chapter#6-9

document.write("Q:1 <br><br>"); //Q:1

var a=+prompt("Enter a number");

document.write("Result:<br>The value of a is:"+a+"<br>...................<br>");
document.write("The value of ++a is:"+ ++a+"<br>Now the value of a is:"+a+"<br><br>");
document.write("The value of a++ is:"+a++ +"<br>Now the value of a is:"+a);
document.write("<br><br>The value of --a is:"+ --a+"<br>Now the value of a is:"+a);
document.write("<br><br>The value of a-- is:"+a-- +"<br>Now the value of a is:"+a);

document.write("Q:2 <br><br>");  //Q:2

var a = 2, b = 1;
var result = --a - --b + ++b + b--;//1-0+1+1
document.write("<br>a is 2<br>b is 1<br>result is "+result);

document.write("<br>Q:3 <br><br>");  //Q:3

var user=prompt("Enter your name");
alert("Greetings "+user );

document.write("<br>Q:4 <br><br>");  //Q:4
var num=+prompt("Enter a number");
for(var i=1;i<=10;i++)
    {
    if (num=="")
    document.write("<br>5*"+i+"="+5*i ); 
    else    
    document.write("<br>"+num+"*"+i+"="+num*i);   
    }
    document.write("<br><br>"); 

    document.write("Q:5 <br><br>");  //Q:5

var sub1=prompt("Enter 1st subject name");
var sub2=prompt("Enter 2nd subject name");
var sub3=prompt("Enter 3rd subject name");
var marks1=+prompt("Enter marks of 1st subject");
var marks2=+prompt("Enter marks of 2nd subject");
var marks3=+prompt("Enter marks of 3rd subject");
var total=100;

document.write("Chapter_9-11 <br> <br>");//chapter#9-11

document.write("Q:1 <br> <br>");//Q:1
var city = prompt("Enter City");
if(city === "karachi")
{
    document.write("Welcome to city of lights <br> <br>");
}

document.write("Q:2 <br> <br>");//Q:2
var gender= prompt("Enter your gender");
 if(gender === "male")
{
    document.write("Good Morning Sir <br><br>");
}
else{
    document.write("Good Morning Ma'am <br> <br> ")
}


document.write("Q:3 <br> <br>");//Q:3
var signal_color=prompt("Enter traffic signal color");
var red="Must Stop";
var yellow="Ready to move";
var green="Move now";
if(signal_color=== "red"){
document.write(red +" <br><br>");
}
else if(signal_color=== "yellow"){
    document.write(yellow +"<br><br>");
}
else{
    document.write(green +" <br><br>");
}

document.write("Q:4 <br> <br>");//Q:4
var fuel=+prompt("Enter remaining fuel of car in litres");
if(fuel < 0.25){
    document.write("Please refill the fuel in your car");
}
else{
    document.write("No need to refill the fuel <br> <br>");
}



document.write("Q:5 <br> <br>");//Q5
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true");
 } 
 var b = 82; 
 if (b++ === 83){ 
     alert("given condition for variable b is true"); 
    } 
 var c = 12; 
 if (c++ === 13){
      alert("condition 1 is true"); 
    } 
 
 if (c === 13){ 
     alert("condition 2 is true"); 
    }
  if (++c < 14){ 
      alert("condition 3 is true"); 
    }
       if(c === 14){
            alert("condition 4 is true");
         } 
 var materialCost = 20000; 
 var laborCost = 2000; 
 var totalCost = materialCost + laborCost;
  if (totalCost === laborCost + materialCost){
       alert("The cost equals"); 
} 
  if (true){ 
      alert("True");
     } 
  if (false){ 
      alert("False");
     } 
  if("car" < "cat"){ 
      alert("car is smaller than cat");
     } 
 
document.write("Q:6 <br> <br>");//Q:6
var subj1=+prompt("Enter marks of 1st subject");
var subj2=+prompt("Enter marks of 2nd subject");
var subj3=+prompt("Enter marks of 3rd subject");
var total_marks=300;
var obtained_marks=subj1+subj2+subj3;
var percentage=(obtained_marks/total_marks)*100;
document.write("Total Marks: "+" "+ total_marks+"<br>");
document.write("Obtained Marks: "+" "+ obtained_marks+"<br>");
if(percentage >= 80){
    document.write("Percentage:" + " " +percentage +"%<br>");
    document.write("Grade : A1 <br>");
    document.write("Remarks : Excellent<br><br>");
}
else if(percentage >= 70){
    document.write("Percentage:" + " " +percentage +"%<br>");
    document.write("Grade : A <br>");
    document.write("Remarks : Good<br><br>");
}
else if(percentage >= 60){
    document.write("Percentage:" + " " +percentage +"%<br>");
    document.write("Grade : B <br>");
    document.write("Remarks : You need to improve<br><br>");
}
else{
    document.write("Percentage:" + " " +percentage +"%<br>");
    document.write("Grade : Fail <br>");
    document.write("Remarks : Sorry<br><br>");
}


document.write("Q:7 <br> <br>");//Q:7
document.write("Guess Game <br> <br>");
var secret_num=5;
var guess_num=+prompt("Guess the secret number (ranging from 1 to 10)");
if(guess_num === secret_num){
    document.write("Bingo! Correct");
}
else if(guess_num+1 === secret_num){
    document.write("Close enough to the correct answer");
}
else{
    document.write("Try Again");

}

document.write("Q:8 <br> <br>");//Q:8
var num=+prompt("Enter number");
if(num%3 === 0){
document.write("Given number is divisible by 3 <br> <br>");
}
else{
    document.write("Try another number <br> <br>");

}


document.write("Q:9 <br> <br>");//Q:9
var number=+prompt("Enter number");
if(number%2=== 0){
document.write("Given number is even <br> <br>");

}
else{
    document.write("Given number is odd <br> <br>");
}


document.write("Q:10 <br> <br>");//Q:10
var temp=+prompt("Enter Temperature");
if(temp>40){
    document.write("It is too hot outside <br> <br>");
}
else if(temp>30){
    document.write("The Weather today is Normal <br> <br>");
}
else if(temp>20){
    document.write("Today’s Weather is cool <br> <br>");
}
else{
    document.write("OMG! Today’s weather is so Cool<br> <br>");
}


document.write("Q:11 <br><br>");//Q:11
var val1= +prompt("Enter 1st number" );
 var val2= +prompt("Enter 2nd number" );
 var op= prompt("Enter Operator");
 var ans;
 if(op === "+"){
    ans=val1+val2;
   document.write("Addition of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ans  + "<br>");
}
 else if(op === "-"){
     ans=val1-val2;
    document.write("Subtraction of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ans  + "<br>");
 }
 else if(op === "*"){
    ans=val1*val2;
   document.write("Multiplication of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ans  + "<br>");
}
else if(op === "/"){
    ans=val1/val2;
   document.write("Division of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ans  + "<br>");
}
else if(op === "%"){
    ans=val1%val2;
   document.write("Modulas of " + val1 + " " + "and"+ " " + val2 + " "+ "is" + " "+ans  + "<br>");
}
else{
    document.write("Invalid Operator");
}
document.write("<br><br>")


 
document.write("Ch_12-13 <br><br>"); //chapter#12-13

document.write("Q:1 <br><br>"); //Q:1

var x=prompt("Enter a character");
if(x>='A' && x<='Z')
    document.write("Character is uppercase");
else if(x>='a' && x<='z')
    document.write("Character is lowercase");
else 
    document.write("Character is a number");

    document.write("<br>Q:2 <br><br>"); //Q:2

var y=+prompt("Enter 1st integer");
var z=+prompt("Enter 2nd integer");
if(y==z)
    document.write("Integers are equal");
else if(y>z)
    document.write("Integer 1 is greater");
else
    document.write("Integer 2 is greater");
    
    document.write("<br>Q:3 <br><br>"); //Q:3

var num=+prompt("Enter a number");
if(num>0)
    document.write("Number is positive");
else if(num<0)
    document.write("Number is negative");
else
    document.write("Number is zero");

    document.write("<br>Q:4 <br><br>"); //Q:4

var x=prompt("Enter a character");
if(x=='a'||x=='e'||x=='i'||x=='o'||x=='u'||x=='A'||x=='E'||x=='I'||z=='O'||x=='U')
    document.write("true");
else
    document.write("false");

    document.write("<br>Q:5 <br><br>"); //Q:5

var pass="hardy123";
var userpass=prompt("Enter your password");
if(userpass=="")
    document.write("Please enter your password");
else if(userpass==pass)
    document.write("Correct!The password you entered matches the original password");
else
    document.write("Incorrect password");

 document.write("<br>Q:6 <br><br>"); //Q:6
var greeting; 
var hour = 13; 
if (hour < 18){
    greeting = "Good day"; 
}
else {
    greeting = "Good evening"; 
}

document.write("<br>Q:7 <br><br>"); //Q:7

var time=+prompt("Enter time in 24 hour format");
if(time>=0000 && time<1200)
    document.write("Good morning!");
else if(time>=1200 && time<1700)
    document.write("Good afternoon!");
else if(time>=1700 && time<2100)
    document.write("Good evening!");
else 
    document.write("Good night!");


    document.write("Ch_14-16 <br><br>"); //chapter#14-16


var arr=[]; //Q:1

var arr1 = new Array(); //Q:2

var stuArr=["Duaa","Emilly","Falak"]; //Q:3

var numArr=[450,258,359];//Q:4

var bolArr=[true,false,true];//Q:5

var mixArr=["Danish",8,"duaa",1];//Q:6

document.write("Q:7 <br><br>"); //Q:7

var qual=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
document.write("Qualifications<br>");
for(var i=0;i<qual.length;i++)
    {
      document.write(i+1+")"+qual[i]+"<br>");  
    }

document.write("Q:8 <br><br>"); //Q:8
var student=["Michael","John","Tony"];
var score=[320,230,480];
var total_marks=500;
for(i=0;i<student.length;i++)
    {
        document.write("Score of "+student[i]+" is "+score[i]+". Percentage:"+(score[i]/total_marks)*100+"%<br>");
    }


    document.write("<br>Q:9 <br><br>"); //Q:9
var colArr=["red","green","blue"];
document.write(colArr);
var item1=prompt("Which color you want to add at the beginning?");
colArr.unshift(item1);
document.write("<br>"+colArr);
var item2=prompt("Which color you want to add at the end?");
colArr.push(item2);
document.write("<br>"+colArr);
colArr.unshift("black","brown");
document.write("<br>"+colArr);
colArr.shift();
document.write("<br>"+colArr);
colArr.pop();
document.write("<br>"+colArr);
var index=+prompt("At which index you want to add the color?");
var item3=prompt("Which color you want to add?");
colArr.splice(index,0,item3);
document.write("<br>"+colArr);
var index1=+prompt("At which index you want to delete the color?");
var tnum=+prompt("how many colors you want to delete?");
colArr.splice(index1,tnum);
document.write("<br>"+colArr);


document.write("<br>Q:10 <br><br>"); //Q:10

var score=[320,230,480,120];
document.write("Score of Students: "+score+"<br>Ordered Score of Students: "+score.sort());


document.write("<br>Q:11 <br><br>"); //Q:11
var city=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("<br>Cities list: <br>"+  city +"<br>Selected cities list:<br>"+city.slice(2,4));

document.write("<br>Q:12 <br><br>"); //Q:12

var arr=["This","is","my","cat"];
document.write("<br>Array:<br>"+arr+"<br>String:<br>"+arr.join(" "));


document.write("<br>Q:13 <br><br>"); //Q:13

var devices=["keyboard","mouse","printer","monitor"];

document.write("<br>Devices:<br>"+devices);
for(var i=0;i<devices.length;i++)
    {
        document.write("<br>Out:<br>"+devices[i]);
    }

    document.write("<br>Q:14 <br><br>"); //Q:14

var devices=["keyboard","mouse","printer","monitor"];

document.write("<br>Devices:<br>" + devices);
for(var i=devices.length-1;i>=0;i--)
    {
        document.write("<br>Out:<br>"+devices[i]);
    }

    document.write("<br>Q:15 <br><br>"); //Q:15

var arr=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write(arr);


document.write("Ch_17-20 <br><br>"); //chapter#17-20

var arr=[]; //Q:1
var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]; //Q:2

document.write("Q:3 <br><br>");//Q:3
for(i=1;i<=10;i++){
    document.write(i+"<br>");
}
document.write("<br>Q:4 <br><br>");//Q:4
var num=+prompt("Enter a number to show its multiplication table");
var len=+prompt("Enter length multiplication table");
document.write("Multiplication table of "+num+"<br>Length "+len)
for(var i=1;i<=len;i++){
    document.write("<br>"+num+"*"+i+"="+num*i);
}

document.write("<br><br>Q:5<br>");//Q:5
var fruits = ["apple", "banana", "mango", "orange","strawberry"];
for(var i=0;i<fruits.length;i++)
    document.write("<br>"+fruits[i]);
for(var i=0;i<fruits.length;i++)
    document.write("<br>Element at index "+i+" is "+fruits[i] +"<br><br>");

document.write("<br>Q:6 <br><br>");//Q:6
document.write("Counting:<br>");
for(var i=1;i<15;i++){
    document.write(i+",");
}
document.write("<br>Reverse Counting:<br>");
for(var i=10;i>0;i--){
    document.write(i+",");
}
document.write("<br>Even:<br>");
for(var i=0;i<=20;i+=2){
    document.write(i+",");
}
document.write("<br>Odd:<br>");
for(var i=1;i<20;i++){
    document.write(i+",");
}
document.write("<br>Series:<br>");
for(var i=0;i<=20;i+=2){
    document.write(i+"k,");
}

document.write("<br><br>Q:7 <br><br>");//Q:7
var a=["cake","apple pie","cookie","chips","patties"];
var item=prompt("Welcome to ABC Bakery! What do you want to order sir/madam?");
for(var i=0;i<a.length;i++)
    if(a[i]==item)
    {document.write(item+" "+"is available at index "+i+" in our bakery <br><br>");
    break;}
else if(a[i]!=item)
   {document.write("We are sorry "+item+" is not available in our bakery<br><br>");
    break;
   }
document.write("<br>Q:8 <br><br>");//Q:8
var A = [24, 53, 78, 91, 12];
var max=0;
document.write("Array items:"+A);

for(var i=0;i<A.length;i++)
    {
        if(A[i]>max)
            max=A[i];
            
    }
document.write("<br>The largest number is "+max);

document.write("<br><br>Q:9 <br>");//Q:9
var A = [24, 53, 78, 91, 12];
var min=0;
document.write("<br>Array items:"+A);
min=A[0];
for(var i=0;i<A.length;i++)
    {
        if(A[i]<min)
            min=A[i];
            
    }
document.write("<br>The smallest number is "+min+"<br>");

document.write("<br>Q:10 <br><br>");
for(var i=5;i<=100;i+=5)
document.write(i+",")


