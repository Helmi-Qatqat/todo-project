let userName = prompt("Enter your name");
if (isNaN(userName) == false || userName === null || userName.trim() === "") {
  do {
    alert("Please enter a correct name");
    userName = prompt("Enter your name please");
  } while (
    isNaN(userName) == false ||
    userName === null ||
    userName.trim() === ""
  );
}
let gender = prompt("Enter your gender (Male/Female)");

let age = prompt("Enter your age");
do {
  if (isNaN(age) || age <= 0) {
    alert("Please enter a valid age [1-100]");
    age = prompt("Enter your age please");
  }
} while (age <= 0 || isNaN(age));

let agree = confirm("Do you want to show a welcoming message?");
if (agree) {
  alert(
    `Hello ${
      gender.toLowerCase() == "male"
        ? "Mr."
        : gender.toLowerCase() == "female"
        ? "Ms."
        : ""
    }${userName}`
  );
}

let answers = function (input) {
  if (input == "") {
    return "invalid";
  }
  return input;
};

let questionOne = prompt("Do you like coffe? (Yes/No)");

let questionTwo = prompt("Do you live in Jordan? (Yes/No)");

let questionThree = prompt("Do you love shawermah? (Yes/No)");

let answerArr = [
  "Username: " + userName,
  "Gender: " + gender,
  "Age: " + age,
  "Likes Coffe: " + answers(questionOne),
  "Lives in Jordan: " + answers(questionTwo),
  "Loves Shawermah: " + answers(questionThree),
];

let consolingAnswer = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
consolingAnswer(answerArr);
