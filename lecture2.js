/*
 * 1. explain the special meaning of the following special characters
 \0 the null character
 \n new line -  This takes the 
 \r carriage return
 \v vertical tab
 \t horizontal tab
 \backspace
 \f form feed
 */

/*
 * 1. explain the special meaning of the following special characters
 \0 the null character
  The null charactor represents an empty space. Eg " This guy". The individual characors in this string are 'T', 'h', 'i', 's'. 'g', 'u', 'y'. 
  Ths null charactor is the empty space between the two words '\0'
 

\n new line
This is often known as the escape sequence
 New line helps in shorting long line codes for the sake of readablility. 
\n tells the compiler to  Insert a newline in the text at this point.


 \r carriage return
 the carriage return is one of the control characters in ASCII code, Unicode, EBCDIC, and many other codes. 
It commands a printer, or other output system such as the display of a system console, to move the position of the cursor to the first position on the same line
  a carriage return is a special code that moves the cursor (or print head) to the beginning of the current line. 

\v vertical tab
Vertical tabbed content area separates content into different and structured panes, and each content can be viewed one at a time. 
 it’s a nice and clean way to show specific content. For instance structuring form input fields vertically.
Vertical tab: \v = U+000b
"Position the form at the next line tab stop."

 \t
is the horizontal tab character,it moves the cursor a tab width

 \backspace
Backspace: \b = U+0008
"Move the cursor one position leftwards." (ignored on Safari.)
\f form feed
"Form feed" is shorthand for something like "feed a new sheet of paper 
into the printer" (implicitly meaning that the current page is ejected).

Form feed: \f = U+000c
"On printers, load the next page. In some terminal emulators, it clears the screen." (truncates the string on Safari.)


/*
 *  2.Please combine those two array together as one array by using concate:
 *  var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
 *  var arr2 = ['Thursday', 'Friday', 'Saturday']
 */
    var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
    var arr2 = ['Thursday', 'Friday', 'Saturday']
    var arr3 = arr1.concat(arr2)
/*
 *  3.Please combine those three array together as one array by only using concate() function once:
 *  var arr1 = ['Sunday', 'Monday']
 *  var arr2 = ['Tuesday', 'Wednesday']
 *  var arr3 = ['Thursday', 'Friday', 'Saturday']
 */
    var arr1 = ['Sunday', 'Monday']
    var arr2 = ['Tuesday', 'Wednesday']
    var arr3 = ['Thursday', 'Friday', 'Saturday']
    var mix = arr1.concat(arr2, arr3)


/*
 * 4. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.sort());
 *    console.log(arr);
 */
    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
    console.log(arr.sort()); //["Enoch", "Todd", "Yaw", "ashwin", "jerry", "lars", "mike"]
    console.log(arr); // ["Enoch", "Todd", "Yaw", "ashwin", "jerry", "lars", "mike"]
    

/*
 * 5. what is the result(output of following code):
 *    var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
 *    console.log(arr.sort());
 *    console.log(arr);
 */
 var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
 console.log(arr.sort()); // [1, 2, 3, "apple", "black", "orange", "test"]
 console.log(arr); // [1, 2, 3, "apple", "black", "orange", "test"]

            

/*
 * 6. Please remove mike, jerry, and Enoch from the following array by using slice
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 */

/*
 * 7. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-3, -1));
 *    console.log(arr);
 */
 var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 console.log(arr.slice(-3, -1)); //["Yaw", "Enoch"]
 console.log(arr); //["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]

/*
 * 8. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(2));
 *    console.log(arr);
 */
 var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 console.log(arr.slice(2)); //['mike', 'jerry', 'Yaw', 'Enoch', lars]
 console.log(arr); //['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']


/*
 * 9. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-2));
 *    console.log(arr);
 */
 var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 console.log(arr.slice(-2)); // ['Enoch', 'lars']
 console.log(arr); //['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']

/*
 * 10. convert the following function to function expression:
 *   function addTwoNumber (num1, num2) {
 *     return num1 + num2;
 *   }
 *
 *   and invoke the function expression to caluate the result of 256 + 532
 */

    var addTwoNumber = function(num1, num2) {
        return num1 + num2;
    }

    console.log(addTwoNumber(256, 532));

/*
 * 11. create an immediately invoked function expression
 * store the iife within a variable and call it
 */

/*
 * 12. you have following objects:
 *     var person1 = {
 *          name: 'ashwin'
 *     };
 *
 *     var person2 = {
 *          name: 'lars'
 *     };
 *
 *    function namer() {
 *          return this.name;
 *    }
 *
 *    use bind function here to make namer() function to call 'ashwin'
 *    and lars
 */

 var person1 = {
    name: 'ashwin'
};
 
var person2 = {
 name: 'lars'
};
 
function namer() {
    return this.name;
}

namer.bind(person1);
namer.bind(person2);

 


/*
 * 12. you have following object:
 *     var number = {
 *          x: 22,
 *          y: 33
 *     };
 *
 *    var count = function() {
 *          console.log(this.x + this.y);
 *    }
 *  a. what is the result when we invoke count()?
 *  b. use bind on function expression to make this work.
 */

 // a. The output NaN
// b. count.bind(number)();



/*
 * 13. you have following objects:
 *     var person1 = {
 *          firstName: 'ashwin'
 *          lastName: 'Yaw'
 *     };
 *
 *     var person2 = {
 *          firstName: 'lars',
 *          lastName: 'Mike'
 *     };
 *
 *     function hello(greeting) {
 *          console.log(greeting + ' ' + this.firstName + '' + lastName);
 *    }
 *
 *  use call methods on function expression to make this work.
 */

var hello = function(greeting) {
    console.log(greeting + ' ' + this.firstName + ' '+ lastName);
}
hello.bind(person1)('hello');


/*
 * 14. We have a following string:
 *     var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
 *
 *     please write a function to change the first letter of every word to upper case.
 */

function firstCharOfWordToUpper(str) {
    var splitStr = str.toLowerCase().split(' ');

    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);

    }

    return splitStr.join(' ');
}
