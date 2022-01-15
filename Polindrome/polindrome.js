/* Stacks */

// functions: push, pop, peek, length

var letters = [];

var word = "racecar";

var rword = "";

// put letters of word into stack
for(var i = 0; i < word.length; i++){
    letters.push(word[i]);
}

// pop of the stack in reverse order
for(var i = 0; i < word.length; i++){
    rword += letters.pop();
}

if(word === rword){
    console.log(word + " is a polindrome");
}else {
    console.log(word + " is not a polindrome");
}
