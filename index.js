let name1 = prompt ("What is your name?");
let name2 = prompt ("What is your name?");
let name3 = prompt ("What is your name?");

// let name1 = "Brendan";
let name1length = name1.length; 
// let name2 = "Charles";
let name2length = name2.length;
// let name3 = "Dorothy"; 
let name3length = name3.length;

if (name1length > name2length && name1length > name3length)
{console.log (name1 + " has the longest name.")
}
else if (name2length > name1length && name2length > name3length) 
  {console.log (name2 + " has the longest name.")
}
else if (name3length > name2length && name3length > name1length) {
  console.log (name3 + " has the longest name.")
}
else if (name1length == name2length && name1length > name3length) {
  console.log (name1 + " and " + name2 + " tie for the longest name.")
}
else if (name2length == name3length && name2length > name1length){
  console.log (name2 + " and " + name3 + " tie for the longest name.")
}
else if (name3length == name1length && name3length > name2length){
  console.log (name3 + " and " + name1 + " tie for the longest name.")
}
else  {
  console.log ("All three names " + name1 + ", " + name2 + ", " + name3 + ", " + "are the same length.")
}