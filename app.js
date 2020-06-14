//Chapter 1

//task 1
alert("Have a good day.");

//task 2
alert("Error! Please enter a valid password.");

//task 3
alert("Welcome to Js land...\nHappy Coding!");

//task 4
alert("Welcome to Js land...");
alert("Happy Coding!");

//task 5
console.log("Hello! I can run JS through my browser's console.");

//task 6,7 in index.html


//Chapter 2

//task 1
var username;

//task 2
var myname="Joti kumari Bai";

//task 3
var message="Hello World!";
alert(message);

//task 4
var name="john"
var age=20;
var certified="Certified Web Application Development"
alert(name);
alert(age);
alert(certified);

//task 5
var p="PIZZA\nPIZZ\nPIZ\n\PI\nP";
alert(p);

//task 6
var email="example@example.com";
alert("My email address is "+email);

//task 7
var book="A smarter way to learn JavaScript";
alert("I am trying to learn from the book "+book);

//task 8
document.write("Yah! I can write HTML content through Javasrcipt<br><br>");

//task 9
var str="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”<br><br>";
alert(str);
document.write(str);

//Chapter 3

//task1
var age=15;
alert("I am "+ age +" years old");

//task2
var N=14;
alert("You have visited "+N+" times");


//task 3
var birthYear=2000;
document.write("My birth year is "+birthYear+"<br>Data type of my declared variable is number<br><br>");

//task 4
var visiter_name=prompt("Enter your name");
var product_title=prompt("Enter product title");
var quality=prompt("Enter number of products");
document.write(visiter_name+" ordered "+quality+" "+product_title+" on XYZ store<br><br>");

//Chapter 4

//task 1
var a,b,c;

//task 2
//legal
var age;
var $age;
var _age;
var age_1;
var $age_12;

//illegal
// var 123age;
// var "age";
// var  var;
// var <age>;
// var age age;

//task 3
document.write("A heading stating Rules for naming JS variables. For example : $my_1stVariable<br>Variable names can only contain number, underscore, dollar sign and letter.<br>Variables must begin with a underscore, dollar sign, letter. For example $name, _name or name<br>Variable names are case sensitive.<br>Variable names should not be JS keywords.<br>");


//Chapter 5

//task 1
var first_value=+prompt("Enter first value");
var second_value=+prompt("Enter 2nd value");
var result=first_value+second_value;
document.write("<br>sum of "+first_value +" and "+second_value+" is "+result+"<br>");

//task 2
var result1=first_value-second_value;
document.write("substraction of "+first_value +" and "+second_value+" is "+result1+"<br>");

var result2=first_value*second_value;
document.write("Product of "+first_value +" and "+second_value+" is "+result2+"<br>");

var result3=first_value/second_value;
document.write("Ratio of "+first_value +" and "+second_value+" is "+result3+"<br>");

var result4=first_value%second_value;
document.write("modules of "+first_value +" and "+second_value+" is "+result4+"<br>");

//task 3
var value;
document.write("<br>Value after variable declaration is undefined<br>");
value=5;
document.write("Initial value is "+value +"<br>");
++value;
document.write("Value after increment is "+value+"<br>");
value=value+7;
document.write("Value after addition is "+value+"<br>");
--value;
document.write("Value after decrement is "+value+"<br>");
document.write("The remainder is "+(value%3)+"<br>");

// task 4
var ticket_price=600;
document.write("Total cost to buy 5 tickets to a movie is "+600*5+"<br>");

//task 5
for (var a = 1; a < 11; a++) {
    document.write("8 * " + a + " = " + (8 * a) + "<br>");
}

//task 6
var celsius_temp = 30;
document.write("<br>" + celsius_temp + "C is " + ((celsius_temp * 9 / 5) + 32) + "F<br>");
var Fahrenheit_temp = 70;
var celsius_temp1 = (Fahrenheit_temp - 32) * 5 / 9;
document.write(Fahrenheit_temp + "F is " + ((Fahrenheit_temp - 32) * 5 / 9) + "C<br>");

//task 7
var price_item1 = 650;
var price_item2 = 100;
var quantity_1 = 3;
var quantity_2 = 7;
var charges = 100;
var total = (650 * 3) + (100 * 7) + 100;
document.write("Total cost of your order is " + total + "<br>");

//task 8
var total_marks = 980;
var marks_obtained = 804;
document.write("<br>Total marks " + total_marks);
document.write("<br>marks obtained " + marks_obtained);
document.write("<br>Your percentage is " + marks_obtained / total_marks * 100 + "% <br>");

//task 9
var us_dollers = 10;
var saudi_riyals = 25;
var total_c = (us_dollers * 104.80) + (saudi_riyals * 28);
document.write("Total currency in PKR " + total_c);

//task 10
var num = 10;
num = ((num + 5) * 10) / 2
document.write("<br><br>Result after multiple operations: " + num);

//task 11
var this_year = 2016;
var birth_year = 1992;
var current_age = 2016 - 1992;
document.write("<br><br>Your age is " + current_age);

//task 12
var radius = 20;
document.write("<br><br>Radius is " + radius);
var circum = 2 * 3.142 * radius;
document.write("<br>circumference is " + circum);
var area = 3.142 * radius * radius;
document.write("<br>Area is " + area);

//task 13
var snack = "kurkure";
var c_age = 20;
var max_age = 70;
var no_of_snacks = 2;
var total_snacks = (70 - 20) * 2;
document.write("<br><br>You need " + total_snacks + " snacks till your lyf");

//Chapter 6-9

//task 1
var m = 10;
document.write("Result: <br> The value of m is " +m+"<br> The value of ++m is "+ (++m) +"<br>Now the value of m is " + m+ "<br>The value of m++ is " +(m++)+ "<br>Now the value of m is " + m+ "<br> The value of m-- is "+ (m--) +"<br>Now the value of m is " + m+ "<br>The value of --m is " +(--m)+"<br>Now the value of m is " + m);

//task 2
var a1=2;
var b1=1;
var result=--a - --b + ++b +b--;
//--A = 1
// --A - --B =  1 - 0 = 2
// --A - --B  + ++B = 1-0+1 = 2
// --A - --B + ++B + B-- = 1-0+1+1 = 3
document.write("<br> Value of a = " + A + "<br>Value of b = "  + B + "Result  = "  +result);


//task 3
var user_name = prompt("Enter Your name");
alert("Welcome " + user_name);

//task 5
var table_no = prompt("Enter a number");
if (table_no === "") {
    for (var a = 1; a < 11; a++) {
        document.write("5 * " + a + " = " + (5 * a) + "<br>");
    }
}
else {
    for (var a = 1; a < 11; a++) {
        document.write( table_no+ " * " + a + " = " + ( table_no* a) + "<br>");
    }
}

//Task 06
var s1 = prompt("Enter first subject");
var s2 = prompt("Enter second subject"); 
var s3 = +prompt("Enter third subject");
var totalEach = 100;
var o1 = +prompt("Enter obtained marks in first subject");
var o2 = +prompt("Enter obtained marks in second subject"); 
var o3 = +prompt("Enter obtained marks in third subject");
document.write("<br>'<table><tr><th>Subjects</th><th>Total Marks</th><th>Obtain Marks</th><th>Percenatge</th></tr><tr><td>" +s1+ "</td><td> 100 </td><td> " +o1 + "</td><td> "+(o1)+"%</td></tr><tr><td>" +s2+ "</td><td> 100 </td><td> " +o2 + "</td><td> "+(o2)+"%</td></tr><tr><td>" +s3+ "</td><td> 100 </td><td> " +o3 + "</td><td> "+(o3)+"%</td></tr></table>'");



//Chapter 9-11

//task 1
var city=prompt("Enter your city:");
city=city.toLocaleLowerCase();
if(city=="karachi"){
    alert("Welcome to city of lights");
}

//task 2
var gender=prompt("Enter your gender");
gender=gender.toLocaleLowerCase();
if(gender=="male"){
    alert("Good Morning Sir");
}
else if(gender=="female"){
    alert("Good Morning Ma'am");
}

//task 3
var color=prompt("Enter color of road traffic signal");
color=color.toLocaleLowerCase();
if(color=="red"){
    alert("Must Stop");
}
else if(color=="yellow"){
    alert("Ready to Move");
}
else if(color=="green"){
    alert("Move now");
}

//task 4
var fuel=prompt("Enter fuel in liters");
if(fuel<0.25){
    alert("Please refill the fuel in your car");
}

//task 5
var a;
alert("given condition for variable a is true");
//b condition is false
alert("");
//c
alert("Condition 3 is true ");
//d
alert("The cost equals");
//e
    alert("True");
//f
alert("car is smaller than cat");

//task 6
var marks_of_sub=prompt("Enter marks of 3 subjects");
var totalmarks=prompt("Enter Total marks");
var percent=marks_of_sub/totalmarks *100;
document.write("Marks Sheet<br><br>");
document.write("Total marks : "+totalmarks);
document.write("<br>Obtained marks : "+marks_of_sub);
document.write("<br> Percentage : "+percent+"%");
if(percent>=80){
    document.write("<br>Grade : A-one<br>");
    document.write("Excellent<br>");
}
else if(percent>=70){
    document.write("<br>Grade : A<br>");
    document.write("Good<br>");
}
else if(percent>=60){
    document.write("Grade : B<br>");
    document.write("You need to improve<br>");
}
else if(percent<60){
    document.write("Grade : fail<br>");
    document.write("sorry<br>");
}

//task 7
var secret_value=5;
var guess_value=prompt("Enter guess value");
if(guess_value==secret_value){
    alert("Bingo! Correct answer");
}
else if(guess_value==(secret_value-1)){
    alert("Close enough to the correct answer");
}

//task 8
var given_value = prompt("Enter a value");
if (given_value % 3 == 0) {
    alert("the number is divisible by 3");
}

//task 9
if (given_value % 2 == 0) {
    alert("number is even");
}
else if (given_value % 2 != 0) {
    alert("number is odd");
}

//task 10
var temp = prompt("Enter temperature");
if (temp > 40) {
    alert("it's too hot");
}
else if (temp > 30) {
    alert("The Weather today is Normal");
}
else if (temp > 20) {
    alert("Today’s Weather is cool");
}
else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
}

//task 11
var f_value = +(prompt("Enter 1st value"));
var l_value = +(prompt("Enter 2nd value"));
var s = prompt("Enter sign value");
if (s === '+') {
    alert("Result is " + (f_value + l_value));
}
else if (s === '-') {
    alert("Result is " + (f_value - l_value));
}
else if (s === '*') {
    alert("Result is " + (f_value * l_value));
}
else if (s === '/') {
    alert("Result is " + (f_value / l_value));
}
else if (s === '%') {
    alert("Result is " + (f_value % l_value));
}


//Chapter 12-13

//task 1
var ch = prompt("Enter character");
if (ch >= 'A' && ch <= 'Z') {
    alert("Character is a capital letter");
}
else if (ch >= 'a' && ch <= 'z') {
    alert("Character is a small letter");
}
else if (ch >= 1 && ch <= 9) {
    alert("Character is a number");
}

//task 2
if(f_value>l_value){
    alert(f_value);
}
else if(f_value<l_value){
    alert(l_value);
}
else{
    alert("both values are equal");
}

//task 3
var inp1=prompt("enter a number");
if(inp1<0){
    alert("Value is negative");
}
else if(inp1>0){
    alert("Value is Positive");
}
else if(inp1==0){
    alert("Value is Zero");
}

//task 4
var alp = prompt("Enter an alphabet");
    alp=alp.toLocaleLowerCase();
    if (alp=='a' || alp=='e' ||alp =='i' || alp=='o' || alp=='u') {
        alert("True");
    }
    else{
        alert("False");
    }


//task 5
var correct_pass="helloworld";
var pass=prompt("Enter Your Password");
if(pass==""){
    alert(" Please enter your password");
}
else if(pass==correct_pass){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password");
}

//task 6
var greeting = "";
var hour = 13;
if (hour < 18) {
    alert(greeting = "Good day");
}
else {
    alert(greeting = "Good evening");
}

//task 7
var time=prompt("Enter time in 24 format");
if(time>=0000 && time<1200){
    alert("Good Morning");
}
else if(time>=1200 && time<1700){
    alert("Good Afternoon");
}
else if(time>=1700 && time<2100){
    alert("Good evening");
}
else if(time>=2100 && time<=2359){
    alert("Good Night");
}
//Chapter 14-16

//task 1
var student_name=[];

//task 2
var student_names=new Array();

//task 3
var string_A=["cat","dog"];

//task 4
var number_A=[1,2,3,4];

//task 5
var bool=["true"];

//task 6
var mix=["black", 1,"true",18];

//task 7
document.write("Qualification");
var qual=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"];
for(var i=0;i=qual.length-1;i++){
    document.write("1) "+qual[i]+"<br>");
}

//task 8
var student=["Michael","john","tony"];
var student_marks=[320,230,480];
for(var j=0;j<student.length;j++){
    document.write("Score")
}

//Task 9
var colorName = ["black", "white", "blue"];
document.write("<br>Original array : " +colorName);
var color1 = prompt("<Enter the color to be added in the beginning of the array ");
colorName.unshift(color1);
document.write("<br> " +color1+" is added in the beginning. <br>Updated Array : " +colorName);
var color2 = prompt("Enter the color to be added in the last of the array ");
colorName.push(color2);
document.write("<br> " +color2+" is added in last.<br>Updated Array : " +colorName);
document.write("<br>Adding two more colors in the beginning of the array");
colorName.unshift("Maroon", "Pink");
document.write("<br>Updated Array : " +colorName);
document.write("<br>Deleting first element of the array");
colorName.shift();
document.write("<br>Updated Array : " +colorName);
document.write("<br>Deleting last element of the array");
colorName.pop();
document.write("<br>Updated Array : " +colorName);
document.write("<br>Write the color and index of the color you want to add in the array ");
var color3 = prompt("Enter the color to be added ");
var Index = prompt("Enter at which index you want " +color3 + "to be added" );
colorName.splice(Index,0,color3);
document.write("<br>Updated Array : " +colorName);
var Index1 =  prompt("From whixh index you want to delete elments from the array ",1);
var Numbers = prompt("How many elements you want to delete" );
colorName.splice(Index1,Numbers);
document.write("<br>Updated Array : " +colorName);


//Task 10
var arr = [320,230,480,120]
var arr2 = arr.sort();
document.write("<br>Scores of student: " +arr);
document.write("<br>Sorted scores of student: " +arr2);

//Task 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawer"];
var selectedCities = cities.push(cities[0],cities[3],cities[4]);
document.write("<br> Cities list : " +cities +"<br><br> Selected Cities: " +selectedCities);
 //Task 12
 var Arr = ["This", "is", "my", "Cat"];
 var stringFromArray = Arr.join();
 document.write("<br> Array: " +Arr +"<br><br> String " +stringFromArray);

 //Task 13
 var Devices = ["Keybord", "Mouse", "Printer", "Monitor"];
 document.write("<br> Devices: " +Devices);
 for (var l = 0; l<Devices.length; l++){
     document.write("<br> Out: "+Devices[l]);
 }

 //Task 14

 var Devices = ["Keybord", "Mouse", "Printer", "Monitor"];
 document.write("<br> Devices: " +Devices);
 for (var i = Devices.length-1; i>=0; i++){
     document.write("<br> Out: "+Devices[i]);
 }

 //Task 15

 var PhoneManufacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
 document.write("<br>Select one Phone Manufacturer from the background");
 document.write("<select>");
 for (var i =0; i <PhoneManufacturer.length; i++){
 document.write("<option>" +PhoneManufacturer[i]+ "</option>" );
}
document.write("</select>");

//Chapter 17-20

//Task 1
var multiArray = [[]];

//Task 2
multiArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

// Task 3
for(var i = 1; i<=10; i++){
    document.write("<br>"+i);
}

//Task 4

var  TableToPrint = +prompt("Enter a number to show its multiplication table");
var TableLength = +prompt("Enter length of multiplication table");
document.write("<br> Multiplication of " +TableToPrint+ "<br> Length of table " +TableLength);
for(var i = 1; i<=TableLength; i++){
    document.write(TableToPrint + " * " +i+ " = " +(TableToPrint*i)+"<br>");
}

//Task 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i = 0; i<fruits.length; i++){
    document.write("<br>"+fruits[i]);
} 
for(var i = 0; i<fruits.length; i++){
    document.write("<br> Element at index " +i+ " is " +fruits[i]);
} 

//Task 6
document.write("<br> Counting: <br><br>");
for(var i =1; i<=15; i++){
    document.write(i+ ",");
}

document.write("<br> Reverse Counting: <br><br>");
for(var i =10; i>=1; i++){
    document.write(i+ ",");
}

document.write("<br> Even: <br><br>");
for(var i =0; i<=20; i=i+2){
    document.write(i+ ",");
}

document.write("<br> Odd: <br><br>");
for(var i =1; i<=20; i=i+2){
    document.write(i+ ",");
}

document.write("<br> Series: <br><br>");
for(var i =2; i<=20; i=i+2){
    document.write(i+ "K,");
}
 //Task 7
 var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
 var itemToSearch = prompt("Wellcome to Saylani Bakery. What do you want to order sir/ma'am");
 itemToSearch = itemToSearch.toLowerCase();
 for (var i = 0; i<bakery.length ; i++){
    if(itemToSearch === bakery[i]){
        break;
    }
 }
 if(i===bakery.length){
     document.write("<br> We are sorry! "+itemToSearch+ " is not available in our bakery.");
 }
 else{
    document.write("<br>" + itemToSearch+ "is present at index " +i);
 }

 //Task 8
 var X = [24,53,78,91,12];
 var max = X[0];
 document.write("<br> Array Elements: "+X + "<br> The largest number is ");
 for(var i =0; i<X.length; i++){
    if(X[i]>max){
        max = X[i];
    }
 }
 document.write(max);

//Task 9
var Y = [24,53,78,91,12];
var min = Y[0];
document.write("<br> Array Elements: "+ Y + "<br> The Smallest number is ");
for(var i =0; i<Y.length; i++){
   if(Y[i]<min){
       min = Y[i];
   }
}
document.write(min +"<br>");

//Task 10

for (var i =1; i<100; i++){
    if(i%5 === 0){
        document.write(i);
    }
}
