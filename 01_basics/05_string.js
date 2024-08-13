const name = "sameer"
const repoCount = 23

console.log(name + repoCount + "val")

// Another way to create string

const myName = new String("sameer")

console.log(myName.length);
console.log(myName[0]);
console.log(myName.charAt(1));
console.log(myName.indexOf("e"));



/*

String length ,String charAt() ,String charCodeAt() ,String at() ,String [ ] ,String slice() ,String substring() ,String substr()
See Also:
String Search Methods, String Templates , String toUpperCase(), String toLowerCase()
String concat(), String trim() ,String trimStart() ,String trimEnd() ,String padStart(), String padEnd(), String repeat() ,String replace(), String replaceAll() ,String split()
*/

console.log(myName.charCodeAt(2));

// padding in string  add zero starting point and ening point
// padstart(how much add , " val")

console.log(myName.padStart(4, "0"));

/*
String Search Methods
String indexOf()
String lastIndexOf()
String search()
See Also:

Basic String Methods
String Templates
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()
*/
