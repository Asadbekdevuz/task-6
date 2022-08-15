let text = "Asadbekdev";
let twotext = "";

for (let i = 0; i < text.length; i++) {
  let result = text.charAt(i);
  twotext+= result+result; 
}

console.log(twotext);