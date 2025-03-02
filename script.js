function firstWord(s) {
 s=s.trim();
 if(s.length===0)return '';
 let wordArray=s.split(" ");
 return wordArray[0];
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
