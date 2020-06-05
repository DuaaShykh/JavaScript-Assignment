document.write("Ch_14-16 <br><br>"); 


var arr=[]; //Q:1

var arr1 = new Array(); //Q:2

var stuArr=["Duaa","Emilly","Falak"]; //Q:3

var numArr=[450,258,359];//Q:4

var bolArr=[true,false,true];//Q:5

var mixArr=["Danish",8,"duaa",1];//Q:6

document.write("Q:7 <br><br>"); 

var qual=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
document.write("Qualifications<br>");
for(var i=0;i<qual.length;i++)
    {
      document.write(i+1+")"+qual[i]+"<br>");  
    }

document.write("Q:8 <br><br>"); 
var student=["Michael","John","Tony"];
var score=[320,230,480];
var total_marks=500;
for(i=0;i<student.length;i++)
    {
        document.write("Score of "+student[i]+" is "+score[i]+". Percentage:"+(score[i]/total_marks)*100+"%<br>");
    }


    document.write("<br>Q:9 <br><br>"); 

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


document.write("<br>Q:10 <br><br>"); 

var score=[320,230,480,120];
document.write("Score of Students: "+score+"<br>Ordered Score of Students: "+score.sort());


document.write("<br>Q:11 <br><br>"); 
var city=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("<br>Cities list: <br>"+  city +"<br>Selected cities list:<br>"+city.slice(2,4));

document.write("<br>Q:12 <br><br>"); 

var arr=["This","is","my","cat"];
document.write("<br>Array:<br>"+arr+"<br>String:<br>"+arr.join(" "));


document.write("<br>Q:13 <br><br>"); 

var devices=["keyboard","mouse","printer","monitor"];

document.write("<br>Devices:<br>"+devices);
for(var i=0;i<devices.length;i++)
    {
        document.write("<br>Out:<br>"+devices[i]);
    }

    document.write("<br>Q:14 <br><br>"); 

var devices=["keyboard","mouse","printer","monitor"];

document.write("<br>Devices:<br>" + devices);
for(var i=devices.length-1;i>=0;i--)
    {
        document.write("<br>Out:<br>"+devices[i]);
    }

    document.write("<br>Q:15 <br><br>"); 

var arr=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write(arr);