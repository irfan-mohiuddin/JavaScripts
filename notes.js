// console.log("Hello World");

// // values and variables in javascript

// var Name = 'MD IRFAN MOHIUDDIN';
// var Age = 27;
// var _Name = 'Data is confidential';
// var $name = "Name can be any thing";
// var num% = "special charecters are not allowed accept '_' and '$' ";
//var 1data = 23;
// var num123 = 55;
// console.log(Name, Age, _Name, $name, num123);
// console.log(num%);




// primitive data types are : boolean, biging, string, symbol, number, undefine (B B S S N U)
/* var myAge = "My Age is 26";
myAge = 26;
myAge = true;
var Data;
console.log(typeof(Data));
console.log(typeof(myAge)); */



// challenge 2

// console.log(10 + "20");
// console.log(9 - "5"); //bug
// console.log(9 - "Data");
// console.log("Java" + "Script");
// console.log("Java" - "Script");
// console.log(" " + " ");
// console.log(" " + 0);
// console.log(" " + "data");
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false - true);

// console.log(typeof(9 - "Data"));

// var x = null;
// var y;

// console.log(typeof(x)); //bug
// console.log(typeof(y));
// console.log(typeof(NaN));
// console.log(NaN);


//  var num = 134344645;
// var data = "data is confidential";
// console.log(num, isNaN(num));
// console.log(data, isNaN(data));
// console.log(isNaN(NaN));




// NaN practice..

// console.log(NaN === NaN);
// console.log(NaN == NaN);
// console.log(Number.NaN === NaN);
// console.log(Number.NaN == NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(NaN);



//-------------------------------------------------------------------------------------------------------------------------------


// Expressions and Operaters.

// Assignment operators
    // an assignment operator assigns a value to its left operand.
        // var x = 5; // here 5 is value, x is operand and "=" is assignment operator.
        // var y = 5;
        // console.log("is both x and y are equal  : " + x == y);
        // console.log("is both x and y are equal  : " + (x == y));
        // console.log('is both x and y are equal  :' + ${x == y} );

// Arithmetic operators
    // (+, -, *, /, %) arithmetic operators
//     var A = 10, B = 2;
// console.log("A + B : ",A+B);
// console.log("A - B : ",A-B);
// console.log("A * B : ",A*B);
// console.log("A / B : ",A/B);
// console.log("A % B : ",A%B);

// Incriment and Decriment operator
    // (++ , --)
    // var num = 15;
    // var num2 = num++;
    // console.log("num : ",num, " num2 : ",num2);

    // num = --num2;
    // console.log("num : ",num, " num2 : ",num2);

// comparison operators
    // (==, !=, >, <, >=, <=)
    // A = 30, B = 10;
    // console.log("checking equal : ",A == B);
    // console.log("checking not-equal : ",A != B);
    // console.log("checking greater : ",A > B);
    // console.log("checking lesser : ",A < B);
    // console.log("checking greater/equal : ",A >= B);
    // console.log("checking lesser/equal : ",A <= B);

// Logical operators
    // (&& , ||, !)

    // //(|| -- Logical OR)
    // console.log("true || true : ",true || true);
    // console.log("true || false : ", true || false);
    // console.log("false || true : ", false || true);
    // console.log("false || false : ", false || false);

    // //(&& -- Logical AND)
    // console.log("true && true : ",true && true);
    // console.log("true && false : ", true && false);
    // console.log("false && true : ", false && true);
    // console.log("false && false : ", false && false);

    // (! Logical NOT)
    // console.log("true : ", !true);
    // console.log("false : ", !false);

// string operators
    // (+) concatination operator.
    // console.log("Hello World");
    // console.log("Hello" + "World");
    // var str = "Hello World";
    // console.log(str += " This is");
    // console.log(str += " my Demo ");
    // console.log(str += "javascript");

// Exponentiation operator
    // ( ** ) calculate the base to the exponent power
    // if exponent is -ve then it the formula it applies is ( 1/(x^n) )

    // console.log("9 power 3 : ", 9**3);
    // console.log("9 power 2 : ", 9**2);
    // console.log("9 power -1 : ", 9**(-1));
    // console.log("9 power -2 : ", 9**(-2));
    // console.log("2 power -2 : ", 2**-2);

// conditional (ternary) operators.
    // ((condition)?execute and return if true : execute and return if false)
    // (38>40)?console.log("true condition") : console.log("false condition");
    // (40>38)?console.log("true condition") : console.log("false condition");
    // var age = 18
    // console.log((age >= 18)? "You can vote" : "You can't vote");

// bit wise operators
    // (|, &)

//----------------------------------------------------------------------------------------------------------------------------------

// controle statements and loops

// if..else
// num = 50;
// if (num > 0) {
//     console.log("Given num is Positive");
// }
// else if (num >= 50) {
//     console.log("Given num is less or equal to 50");
// }
// else {
//     console.log("Given num is negetive");
// }

// falsy values in java script (0, "", false, null, undefine, NaN)

// switch statement
    // var area = "";
    // var PI = 3.142, l = 4, b = 4, r = 3;

    // switch(area) {
    //     case 'circle' :
    //         console.log("The area of a circle is : ", PI * r ** 2);
    //         break;
    //     case 'triangle' :
    //         console.log("The area of a triangle is : ", (l * b)/2);
    //         break;
    //     case 'rectangle' :
    //         console.log("The area of a rectangle is : ", l * b);
    //         break;
    //     default:
    //         console.log("Invalid Choice");
    // }

// while loop
    // var num = 10;
    // while(num <= 10 && num >= 1) {
    //     console.log(num);
    //     num--;
    // }

// do-while loop
    // var num = 21;
    // do {
    //     console.log(num);
    //     num --;
    // }
    // while (num <= 20 && num >= 1)

// for loop
    // prime numbers
    // var limit = 100, num;
    // for (var i=1; i<=limit; i++) {
    //     count = 0;
    //     for(var j=1;j<=i;j++) {
    //         if(i%j == 0) {
    //             count++;
    //         }
    //     }
    //     if (count == 2) {
    //         console.log(i, " is a prime number");
    //     }
    // }
//------------------------------------------------------------------
    // let names = ["irfan", "Younus", "Mateen", "Muqeet", "Azeem", "Azher", "Asaad", "Imaad", "Ghouse", "Jawaad"];

    // for(i=0; i < names.length; i++) {
    //     console.log(names[i]);
    // }

// for in loop // prints the numbers for each elements as count.
    // let names = ["irfan", "Younus", "Mateen", "Muqeet", "Azeem", "Azher", "Asaad", "Imaad", "Ghouse", "Jawaad"];
    // for(let elements in names) {
    //     console.log(elements);
    // }

// for of loop  // prints the data in the elements.
    // let names = ["irfan", "Younus", "Mateen", "Muqeet", "Azeem", "Azher", "Asaad", "Imaad", "Ghouse", "Jawaad"];
    // for(let elements of names) {
    // console.log(elements);
    // }

// forEach() // calls a function for each element in an array.
    // let names = ["irfan", "Younus", "Mateen", "Muqeet", "Azeem", "Azher", "Asaad", "Imaad", "Ghouse", "Jawaad"];
    // names.forEach(function (element, index, array) {
    //     console.log(`${element} holding index number : ${index} from ${array}`);
    // })
//-------------------------------------------------------------------------------------------------
    // let names = ["irfan", "Younus", "Mateen", "Muqeet", "Azeem", "Azher", "Asaad", "Imaad", "Ghouse", "Jawaad"];
    // names.forEach( (element, index, array) => {
    //     console.log(`${element} holding index number : ${index} from ${array}`);
    // })
//---------------------------------------------------------------------------------------------------
    // let names = ["irfan", "Younus", "Mateen", "Muqeet", "Azeem", "Azher", "Asaad", "Imaad", "Ghouse", "Jawaad"];
    // names.forEach( (element, index, array) => console.log(`${element} holding index number : ${index} from ${array}`) )

//----------------------------------------------------------------------------------------------------------------------------------

// functions

// function definition
    // function definition is also called as function declaration, or function statement.
    // function consist of a "function" keyword followed by
        // name of a funtion
        //parameters and statements of the funtion enclosed in parentheses superated by commas.
        //  function myfunc-name ( parameters; ) {
        //      statements;
        //}
        //
        //

// calling a function
    // function sum(){
    //     var a = 20, b = 30;
    //     var total = a + b;
    //     console.log(total);
    // }
    // sum();
    // console.log( sum() );

// function parameters
    // function sum (a, b) { // sum (parameters)
    //     var total = a + b;
    //     console.log(total);
    // }

// function arguments
    // sum(20,25);   //sum(Arguments)
    // sum(10, 18);  //sum(Arguments)
    // sum(13,27);  //sum(Arguments)

// function expressions
    // function swap(x, y) {
    //     var t;  // 
    //     x = t;  //
    //     x = y;  // statements
    //     y = t;  //
    // }
// return keyword
    // function sum(a, b) {
    //     return (a + b) ;
    // }
    // console.log( sum(13, 20) );

// Anonymous function
    // var data = function multi(a, b) { // the function which is defined without any name, it is called anonimous function.
    //     return a*b;  // if the function is assigned to any variable then it is called as function expression.
    // }
    // var mul = data(2, 5);
    // console.log(mul);

//====================================================================================================================================

//**************************************** ES6 **********************************************:
//                                        =====

// The chahnges and the updates which were made in the javascript in standadization of ECMA SCRIPT 2015-th edition is called as ES6.
// The fallowing are the ES6 additions in javascript.

// LET and CONST
    // LET vs CONST vs VAR
    // var name = "irfan"
    // console.log(name);

    // name = "mohiuddin"
    // console.log(name);
//-----------------------------------
    // let name = "irfan"
    // console.log(name);
    
    // name = "mohiuddin"
    // console.log(name);
//-----------------------------------
    // const name = "irfan"
    // console.log(name);

    // name = "mohiuddin"
    // console.log(name);
//-----------------------------------
    // var --> Global scope
    // let and const --> local scope
    // function biodata() {
    //     let firstname = "irfan"
    //     let lastname = "MD"
    //     console.log("outer firstname : " + firstname);
    //     // console.log("inner lastname : " + lastname);

    //     if(true) {
    //         let lastname = "mohiuddin"
    //         console.log("inner firstname : " + firstname);
    //         console.log("inner lastname : " + lastname);

    //     }

    //     console.log("outer lastname : " + lastname);
    // }


    // biodata();

// TEMPLATE STRINGS (Template litrals)
    // JavaScript to print the table of the given number
    // for (let i = 1; i <= 10; i++) {
    //     let num = 12;
    //     console.log(num + " * " + i + " = " + num*i); // concatination method for printing the logs

    //     console.log(`${num} * ${i} = ${num * i}`); // Template litrals method for printing the logs.
    // }

// DEFAULT ARGUMENTS
    // if the function is called and the Arguments are mismatching the parameters of the function then the paameters of the funtions
    // can be initialized with some deffault values this is introdused in ES6.
    // function mul(a = 5 , b = 3) { // default parameters.
    //     return a*b;
    // }

    // console.log(mul());

// REST OPERATORS
// DESTRUCTURING
// OBJECT PROPERTIES
// ARROW FUNTION

    // const sum = () => {
    //     let a = 10;
    //     let b = 20;
    //     console.log(`the sum of the two numbers is ${a + b}`);
    // }
// ----------------------------------------------------------------------
    // let sum = (a = 5, b = 20) => `the sum of the two numbers is ${a + b}`;
    // console.log (sum(3));
// SPREAD OPERATORS

//=================================================================================================================================

// **************************** ARRAYS in JavaScript **************************************

// to store multiple values in a single variable we will use arrays
// In JavaScript we can store any type of data in a single array variable.
    // let names;
    // names = ["irfan", "younus", "Mateen", "muqeet"];
    // let irfan = ["irfan", 27, true];
    // let younus = new Array;
    // younus = ["younus", "25", true];
    // names[10] = "azeez";
    // console.log(names);
    // console.log(irfan);
    // console.log(younus);
    // console.log("younus age is : ", younus[1]);

    // // if you want to check the number of elements in an array then we can use "length" property.
    // // or if we want to chech the number of charecters of an any element of an array.
    //     console.log("number of elements in an array : ",names.length);

    //     console.log("number of elements in an array : ",names[2].length);
//--------------------------------------------------------------------------------------------------

    // searching and filter in an Array.

    // ArrayName.indexof(string, fromIndex?: number)
    // It returns the  first occarence of the string's index number or -1 if it is not present.
            // string — The value to locate or search in an array.
            // fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
    // let names = ["Irfan", "Younus", "Mateen", "Muqeet", "Azeem", "Azher", "Asaad", "Imaad", "Ghouse", "Jawaad", "IrfanMohiuddin", "Irfan"];
    // console.log(names.indexOf("Irfan", 1));
    //----------------------------------------------------------------------------------------------------

    // ArrayName.lastIndexof(string, fromIndex?: number)
    // It returns the  last occarence of the string's index number or -1 if it is not present.
            // string — The value to locate or search in an array.
            // fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at last index.
    // let names = ["Irfan", "Younus", "Mateen", "Muqeet", "Azeem", "Azher", "Asaad", "Imaad", "Ghouse", "Jawaad", "IrfanMohiuddin", "Irfan"];
    // console.log(names.lastIndexOf("Irfan"));
    //---------------------------------------------------------------------------------------------------

    // ArrayName.includes(string, fromIndex?: number)
        // Determines whether an array includes a certain element, returning true or false as appropriate.
    // let names = ["Irfan", "Younus", "Mateen", "Muqeet", "Azeem", "Azher", "Asaad", "Imaad", "Ghouse", "Jawaad", "IrfanMohiuddin"];
    // console.log(names.includes("Irfan", 1));
    //---------------------------------------------------------------------------------------------------

    // ArrayName.find()
        // Returns the value of the first element in the array where predicate is true, and undefined otherwise.

    // const prices = [200, 300, 350, 400, 450, 500, 550, 600, 100];
    // const findelm = prices.find( currval => {
    //     return currval < 400;
    // });
    // console.log(findelm);
    //----------------------------------------------------------------------------------------------------

    // ArrayName.findIndex()
    // const prices = [200, 300, 350, 400, 450, 500, 550, 600, 100];
    // const findelm = prices.findIndex( currval => {
    //     return currval < 200;
    // });
    // console.log(findelm);
    

    //-----------------------------------------------------------------------------------------------------

    // ArrayName.filter()
        // Returns all the posible elements for which the condition is satisfied then it provides all the functions.
        // and when the condition is not satisfied then it returns an empty array

    // const prices = [200, 300, 350, 400, 450, 500, 550, 600, 100];

    // const newPrice = prices.filter((elem, index) => {
    //     console.log(elem);
    //     return elem > 1400;

    // })

    // console.log(newPrice);

    //-------------------------------------------------------------------------------------------------------

    // ArrayName.sort()
        // The sort method sorts the elements of an array in place and returns the sorted array.
        // the default sorting order is ascending, building upon converting the elements into strings.
        // usefull for soriting the strings not for numbers.

    // let months =  ["Jan", "March", "April", "Oct", "Nov", "Dec"];

    // console.log(months.sort());

    // months = months.sort();

    // console.log(months);
    //----------------------------------------------------------------------------------------------------------

    //ArrayName.push()
        // the push() method adds one or more elements to the end of the array and returns the new length of the array.

    // let animals = ["goat", 'sheep', "hen", 'camel'];

    // count = animals.push("horse");

    // console.log(animals);
    // console.log(count);
    //-----------------------------------------------------------------------------------------------------------

    // Array.unshift()
    // the unshift() method adds one or more elements to the bigining of the array and returns the new length of the array.
    // let animals = ["goat", 'sheep', "hen", 'camel'];

    // count = animals.unshift("horse");

    // console.log(animals);
    // console.log(count);
    //--------------------------------------------------------------------------------------------------------------

    // Array.pop()
        // The pop() method removes the last element from an array and returns that element.
        // This method changes the length of the array.

    // let animals = ["goat", 'sheep', "hen", 'camel'];

    // console.log(animals);
    // console.log(animals.pop());
    // console.log(animals);
    //--------------------------------------------------------------------------------------------------------------

    // ArrayName.shift()
        // Removes the first element from an array and returns it. If the array is empty,
        // undefined is returned and the array is not modified.
        // This method changes the length of the array.

    // let animals = ["goat", 'sheep', "hen", 'camel'];
    // console.log(animals);
    // console.log(animals.shift());
    // console.log(animals);
    //--------------------------------------------------------------------------------------------------------------

    // chalange
    // ArrayName.splice(indexposition, how maney to delete, string to add)
        // Add / Remove / Append the data from an array.

    // const months = ['Jan', 'march', 'April', 'June', 'July'];

    // let deleted = months.splice(months.unshift(), 0, "Dec");

    // console.log(deleted);
    // console.log(months);

    // const pos = months.indexOf("march")

    // console.log(pos);

    // if(pos != -1) {
    //     deleted = months.splice(pos, 1, "March");
    // }
    // console.log(deleted);
    // console.log(months);
    //--------------------------------------------------------------------------------------------------------------

    // ArrayName.map()

    // const array = [1, 4, 8, 16, 32, 64, 128, 512, 1024];

    // let newarr = array.map((currElm, index, arr) => {
    //     let str;
    //     if (currElm > 32) {
    //         return `Index no. ${index} containing value ${currElm} is satisfaining from array : ${arr}`
    //     }
    //     else {
    //         return `Index no. ${index} containing value ${currElm} is not satisfaining from array : ${arr}`
    //     }
        
    // })

    //forEach
    // let newarr = array.forEach((currElm, index, arr) => {
    //     let str;
    //     if (currElm < 32) {
    //         return `Index no. ${index} containing value ${currElm} is satisfaining from array : ${arr}`
    //     }
    //     else {
    //         return `Index no. ${index} containing value ${currElm} is not satisfaining from array : ${arr}`
    //     }
        
    // })

    // console.log(array);
    // console.log(newarr);
    //----------------------------------------------------------------------------------------------------

    // challenge

    // 1. Find the square root of an each element in an Array
                // let arr = [9,25, 36, 49, 64, 81];

                // let sqrt = arr.map((elem) => {
                //     return Math.sqrt(elem);
                // })

                // console.log(sqrt);


    // 2. Multiply each element by 2 and return on those elements which are greater than 10

                // let abv_10_sqrt = sqrt.map((elem) => {
                //     elem *= 2;
                //     if (elem > 10) {
                //         return elem;
                //     }
                // }).filter((elem) => {
                //     return elem > 10;
                // })

                // console.log(abv_10_sqrt);

    //--------------------------------------------------------------------------------------------------------

    // ArrayName.reduce()
        // It is used to flattern an array meaning to convert the 2D or 3D array into a single dimentional array.

        // The reduce() method executes a reducer function on each element on an array, resulting in a single output value.

        //The reducer function takes four arguments:
        //  Accumulater
        //  Current Value
        //  Current Index
        //  Source Array

        // let arr = [5, 6, 2];
        // let sum = arr.reduce((accu, elem, index, arr) => {
        //     return accu *= elem;
        // })

        // console.log(sum);

        // let arr = [["Azeem", 31], ["Irfan", 27], ["Younus", 26], ["Gouse", 33]];

        // console.log(arr);
        // let concat_arr = arr.reduce((accu, elem) => {
        //     return accu.concat(elem);
        // })

        // console.log(concat_arr);

    //-----------------------------------------------------------------------------------------------------

    //===================================================================================================================

    //**************************************** Strings in JavaScripts **********************************************:
    //                                        =========================
//--------------------------------------------------------------------------------
    // let Name = "Irfan Mohiuddin";
    // let FullName = 'Md Irfan Mohiuddin';

    // let brothers = new String('Younus Mateen Muqeen');

    // console.log(Name);
    // console.log(FullName);
    // console.log(brothers);

    // console.log(`length of brothers string is : ${brothers.length}`);

//--------------------------------------------------------------------------------

    // Escape charecter
        // "\" back slash is a escape charecter to put any qouts on the strings.

        // let sent1 = "We are called by a \"king-1\" from a north part of the state\n";
        // let sent2 = "We are called by a 'king-2' from a north part of the state\n";
        // let sent3 = 'We are called by a \'king-3\' from a north part of the state\n';
        // let sent4 = 'We are called by a "king-4" from a north part of the state\n';
        // console.log( sent1,sent2,sent3,sent4);

//--------------------------------------------------------------------------------
    
    // Finding a string in a string

        // let sent1 = "We are called by a \"king-1\" from a north part of the indian state\n";
        // console.log( sent1.indexOf("indian"));

        // console.log(sent1.lastIndexOf("a", 18));
        // console.log(sent1.indexOf(" a ", 17));

//--------------------------------------------------------------------------------

    // Searching a string in a string

    // The search() method searches for a specified value in a string and returns a  first position of the match.
    // we cannot specify the positin to start the search after any index.
    
        // let sent1 = "We are called by a \"king-1\" from a north part of the state\n";
        // console.log( sent1.search(" a  "));

//--------------------------------------------------------------------------------

    // Extracting string part
        // there are three methods for extracting a part of a string.
            // sclice(start, end)
                // The slice() method selects and returns the data from a given string pointing fron the specified 
                // starting position to ending posision of the index.
                // let str = "Apple, Banana, Kiwi, Oreange";
                // console.log(str.slice(0,4));
                // console.log(str.slice(7,14));   // prints 7th char to 13- charecter.
                // console.log(str.slice(7, -3)) // eliminates the last 3 charecters from the string
                // console.log(str.slice(100)); // returns nothing

            // Display only 280 charecters of a string like the one used in twitter

            // let str = "knd;lenfdiue iudhgehfei iudiyegfyewgif uehfiywegfyewhfi uefyiewgfuyewgfyew euhfiewfiyewgf ehfiuwehiyfgewh ehfiyewgfiyew uehfiyewg uewhfiuewh uewhfiuwehfinsdklfjrgiuhtreoiuk iehfiergfiwehfijewn fiuewhrfiyrehfiuewhfnewjibfibefiyergfiywbfiweby uihfieufhier eufhiewufhiewuhfiuewh uhfiuewfhiuewrhf ehfiuewhfiuewhfiuewh ehfiuehfuiewhf";

            // let text = str.slice(0,280);

            // console.log(text);

            // substring(start, end)
                // the substring method() is similler to slice() method., the only deffrence is it cannot take negetive indexes.

                // var str = "Apple, Banana, Kiwi, Oreange";
                // console.log(str.substring(0, 4));
                // console.log(str.substring(5,-6));


            // substr(start, length)
                //The substr() is similler to slice the only diffrence is the second paarameter specifies the length of the extraction string part.

                // var str = "Apple, Banana, Kiwi, Oreange";
                // console.log(str.substr(0, 4));
                // console.log(str.substr(4));
                // console.log(str.substr(-7));

                //Note: If we provide any negitive values then it starts printing from back side.

//------------------------------------------------------------------------------------------------------

    // Replacing a string content
        // The replace() method is used for replacing the first match of any spesified value in the string.

            // let str = 'my name is irfan mohiuddin irfan'

            // console.log(str);

            // str = str.replace('irfan', 'Irfan Mohiuddin');

            // console.log(str);

//----------------------------------------------------------------------------------------------------------

    // Extracting a string charecters
        //There are three methods for extracting string charecters:
        // charAt(position) // returns the charecter at a given position
            // let str = "HELLO WORLD";

            // console.log(str.charAt(0));

        // charCodeAt(position) //Returns the Unicode value of the character at the specified location.
            // let str = "HELLO WORLD";
            // console.log(str.charCodeAt(str.length-1 ));

        // property access [] //ECMAScript 5 allowd property access [ ] on strings
            // let str = "HELLO WORLD";
            // console.log(str[1]);

    // Other useful methods

        // case convertion
            // let str = 'my name is irfan MOhiuddIN IRFAN';

            // console.log(str.toLowerCase());
            // console.log(str.toUpperCase());

        // concatination of strings

            // let str1 = 'I love Java';
            // let str2 = 'Scripting';

            // console.log(str1.concat(str1,str2));
            // console.log(str1.concat(str2));
            // console.log(str1.concat(" ",str2));
            // console.log(str2.concat(str1));

        // The trim method removes all the white scaces before and after the string

            // let str = "           ckdncjdsncud  cjdncd     cndlncdusnu dnjdvniun dinvodivndof      kvdlnvl                   "
            // console.log(str);

            // console.log(str.trim());

        // string to an array
            // let str = '1,|2, 3,|4, 5,|6, 7,|8, 9';
            // console.log(str);
            // console.log(str.split(","));
            // console.log(str.split(" "));
            // console.log(str.split("|"));




//====================================================================================================================================

// **************************************************** Date and Time ***************************************************************
//                                                    -----------------

    // JavaScript Date objects represent a single moment in a time, in a platform indipendent format.
    // Date objects contain a number that represent a milliseconds since (1st January 1970 - UTC)

    // There are 4 ways to create a new Date object:
        // Date Method (get and set)
            //  /* 1) */ new Date() //Without Arguments
                    // let currDate = new Date(); // 2023-02-24T05:28:37.073Z
                    // console.log(new Date().toLocaleString()); // 2/24/2023, 11:03:41 AM
                    // console.log(new Date().toString()); // Fri Feb 24 2023 11:04:15 GMT+0530 (India Standard Time)
                    // console.log(currDate); // 2023-02-24T05:28:37.073Z
                    // console.log(Date.now()); // Returns milliseconds (ex : 1677217180156)

            //  /* 2) */ new Date(year, month, day, hours, minutes, seconds, milliseconds) // with 7 Arguments
                    // let date = new Date(2023, 01, 24, 11, 17, 1, 0); 
                    // console.log(date.toLocaleString());

                    // Here when we pass Any Arguments to the Date there must be minimum 2-Arguments year and month
                    // let date = new Date(2021, 11); 
                    // console.log(date.toLocaleString());

            //  /* 3) */ new Date(milliseconds) // with milliseconds Arguments
                    // var d = new Date(1677217180156);
                    // console.log(d.toLocaleString());

            //  /* 4) */ new Date(date string) // with date string
                    // var d = new Date("2021 jan 13 11:10:00");
                    // console.log(d.toLocaleString());

            // /* 5) */ Ways to get individual dates
                    // var date = new Date();
                    // console.log(date.toLocaleString());
                    // console.log(date.toString());
                    // console.log(date.getFullYear());
                    // console.log(date.getMonth());
                    // console.log(date.getDate());
                    // console.log(date.getDay());

            // /* 6) */ Setting the Date
                    // var date = new Date();
                    // console.log(date.setFullYear(2022));
                    // console.log(date.setFullYear(2022, 10, 5));
                    // console.log(date.setMonth(11));
                    // console.log(date.setDate(6));
                    // console.log(date.toLocaleString());
                    // console.log(date.toLocaleDateString());



    // Time Method (get and set)

            // var time = new Date();

            // console.log(time.getTime());
            // console.log(time.getHours());
            // console.log(time.getMinutes());
            // console.log(time.getSeconds());
            // console.log(time.getUTCMilliseconds());

            // console.log(time.setTime());
            // console.log(time.setHours(5));
            // console.log(time.setMinutes(5));
            // console.log(time.setSeconds(5));
            // console.log(time.setUTCMilliseconds(5));


//====================================================================================================================================

// ********************************************** Math Object in JavaScript ***************************************************************
//                                               ---------------------------

//  The JavaScript Math object allows you to perform mathematical tasks on numbers.

    //console.log(Math.PI); //math property to get PI value

// Math.round() // returns the nearest intiger value to the provided number.
    // let num = 10.49999;
    // console.log(Math.round(num));

// Math.pow() // returns the value of x to the power Y
    // console.log(Math.pow(2,4));

// Math.sqrt() // returns the square root value for the provided value.
    // console.log(Math.sqrt(25));
    // console.log(Math.sqrt(30));
    // console.log(Math.sqrt(9));
    // console.log(Math.sqrt(66));

// Math.abs() // returns the absolute positive value of x
    // console.log(Math.abs(-55));
    // console.log(Math.abs(-55.5));
    // console.log(Math.abs(-984));
    // console.log(Math.abs(55));

    // console.log(4-6);
    // console.log(Math.abs(4-6));

// Math.ceil() // returns the value of x rounded upto its nearest integer.
    // console.log(Math.ceil(4.51));
    // console.log(Math.round(4.51));
    // console.log(Math.ceil(99.01));
    // console.log(Math.round(99.01));

// Math.floor() // returns the value of x rounded down to to its nearest intiger.
    // console.log(Math.floor(4.7));
    // console.log(Math.floor(99.1));
    // console.log(Math.floor(99.9));

// Math.min() // returns the lowest value in the provided list of arguments.
    // console.log(Math.min(0, 150, 200, 30, -8, -500, 100, 20));

// Math.max() // returns the highest value in the provided list of arguments.
    // console.log(Math.max(0, 150, 200, 30, -8, -500, 100, 20));

// Math.random() // returns the random number between 0 and 1
    // console.log(Math.random());
    // console.log(Math.floor(Math.random()*30));

// Math.trunc() // returns the intiger part for the given Argument
    // console.log(Math.trunc(4.6));
    // console.log(Math.trunc(-4.6));
    // console.log(Math.trunc(555));
    // console.log(Math.trunc(-99));
    // console.log(Math.trunc(-97.543));



//====================================================================================================================================

// ********************************************** DOM and BOM in JavaScript *********************************************************
//                                               ---------------------------
/*
    Window vs Document
        Window
            1. Window is the main Container or we can say the Global Object and any operations related to entire browser window can be a part of window object.
            2. All the members like objects, methods or properties if they are the part of widows object then we do not refer the windows object.
            3. Windows has methods, properties, objects. ex settime() or setinterval() are the methods where as Document is the object of the window and it also has a screen object with properties describing the physical display.

        Document
            1. The DOM (Document Object Model) is a child of Window Object.
            2. Were in the DOM we need to refer the Document if we want to use the document object, methods or properties.
            3. Document is just a object of the global object that is window, which deals with the document and the HTML elements.

    DOM vs BOM
        DOM : The Dom is the Document Object Model, which deals with the document, the HTML eliments themselves.
            Ex : change the backgrount color to red we use
                document.body.style.background = "red";
                    it applies the red background color to the whole body of HTML page.

        BOM : It is a Brouser Object Model, which deals with the browser components aside from the document,
            Like history, location, navigation, settings etc..,

    DOM Navigation
        1. document.documentElement --> returns the element that is the root element of the document.
        2. document.head --> Returns the head element of HTML document
        3. document.body --> Specifies the beginning to end of the document body
        4. document.body.childNodes --> Returns the children of the body element in HTML (it includes as a child if it finds a single space, tab, Enter etc.,)
        5. document.children --> Returns all the child elements of HTML page.
        6. document.childNodes.length --> Returns the children count.
        7. document.hasChildNodes() --> Returns boolean value whether node has children.
        8. document.body.firstChild --> Returns the first child. (it includes text as a child if it finds a single space, tab, Enter etc.,)
        9. document.body.firstElementChild --> Returns the first child that is an element, and null otherwise.
        10. document.lastChild --> Returns the last child. (it includes text as a child if it finds a single space, tab, Enter etc.,)
        11. document.body.lastElementChild --> Returns the last child that is an element, and null otherwise.
        12. document.body.firstElementChild.lastElementChild.style.color = "Yellow"
                basically it changes the color of (body -> firstchild -> lastchild) elements to yellow.
        13. const childTwo = document.querySelector('.<query name ex: class name, id, .child-two>')
                it assigns the related query to childTwo variable
                childTwo.style.color = "red".
        14. document.body.parentNode --> Returns the parent
        15. document.body.parentElement --> Returns the parent element.
        16. document.body.previousElementSibling --> Returns the first preceding sibling that is an element, and null otherwise.
        17. document.body.nextElementSibling --> eturns the first following sibling that is an element, and null otherwise.
        18. document.getElementById(elementId: string) --> Returns a reference to the first object with the specified value of the ID attribute.
        19. document.getElementsByClassName(classNames: string)
                Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.
        20. document.getElementsByTagName("tag")
                Retrieves a collection of objects based on the specified element name.
        

    Searching and getting Elements Reference
        1. document.querySelector("#id-name or .class-name or tag")
                Returns the first element that is a descendant of node that matches selectors.
        2. document.querySelectorAll()
                Returns all element descendants of node that match selectors.


*/

    // windows.history.back() // used to open the previous page of the window or tab
    console.log(`number of childs under first div : ${document.body.firstElementChild.childElementCount}`);
    document.querySelectorAll()
//====================================================================================================================================

// ********************************************** Events in JavaScript *************************************************************
//                                             ---------------------------

/*  HTML Events are things that happen to HTML elements.
    When JavaScript in HTML pages, JavaScript can react on these events.
   
    HTML Events : An HTML Event is some thing the browser dose. or something a user does

*/
