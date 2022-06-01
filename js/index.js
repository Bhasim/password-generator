let form = document.querySelector("form");
form.style = "border: 3px solid grey; height: 10rem; width: 60% ";
let output = document.getElementById("output"); //the output text of the random password 
output.style = "background-color: gray; border: 1px solid grey; height: 3rem; width: 50% ";
let submit = document.querySelector("button"); //the button of the random password 
submit.style = "background-color: orange; width: 50%; height: 3rem; color: black";

//we would generate a random password of 10 of numbers and characters
const randomPass = () => {
  let result = [];
  let numAndStr = "01234567890ABCDEF";
  for (let i = 0; i < 10; i++) {
    result.push(numAndStr[Math.floor(Math.random() * numAndStr.length)]);
  }
  output.innerHTML = result.join("");
  return result.join("");
};
