document.write("Ch_12-13 <br><br>"); 

document.write("Q:1 <br><br>"); 

var x=prompt("Enter a character");
if(x>='A' && x<='Z')
    document.write("Character is uppercase");
else if(x>='a' && x<='z')
    document.write("Character is lowercase");
else 
    document.write("Character is a number");

    document.write("<br>Q:2 <br><br>"); 

var y=+prompt("Enter 1st integer");
var z=+prompt("Enter 2nd integer");
if(y==z)
    document.write("Integers are equal");
else if(y>z)
    document.write("Integer 1 is greater");
else
    document.write("Integer 2 is greater");
    
    document.write("<br>Q:3 <br><br>"); 

var num=+prompt("Enter a number");
if(num>0)
    document.write("Number is positive");
else if(num<0)
    document.write("Number is negative");
else
    document.write("Number is zero");

    document.write("<br>Q:4 <br><br>"); 

var x=prompt("Enter a character");
if(x=='a'||x=='e'||x=='i'||x=='o'||x=='u'||x=='A'||x=='E'||x=='I'||z=='O'||x=='U')
    document.write("true");
else
    document.write("false");

    document.write("<br>Q:5 <br><br>"); 

var pass="hardy123";
var userpass=prompt("Enter your password");
if(userpass=="")
    document.write("Please enter your password");
else if(userpass==pass)
    document.write("Correct!The password you entered matches the original password");
else
    document.write("Incorrect password");

 document.write("<br>Q:6 <br><br>"); 
var greeting; 
var hour = 13; 
if (hour < 18){
    greeting = "Good day"; 
}
else {
    greeting = "Good evening"; 
}

document.write("<br>Q:7 <br><br>"); 

var time=+prompt("Enter time in 24 hour format");
if(time>=0000 && time<1200)
    document.write("Good morning!");
else if(time>=1200 && time<1700)
    document.write("Good afternoon!");
else if(time>=1700 && time<2100)
    document.write("Good evening!");
else 
    document.write("Good night!");