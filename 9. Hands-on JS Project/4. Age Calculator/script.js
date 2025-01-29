// const dobInput = document.getElementById("dob");
// const calculateBtn = document.getElementById("calculate-btn");
// const resultDiv = document.getElementById("result");

// calculateBtn.addEventListener("click", function(){
//     const dob = new Date(dobInput.value);
//     const ageInMs = Date.now() - dob.getTime();
//     const ageDate = new Date(ageInMs);
//     const age = Math.abs(ageDate.getUTCFullYear()-1970);

//     resultDiv.innerHTML = `You are ${age} year(s) old.`;

// })
const dobInput = document.getElementById("dob");
const calculateBtn = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
  const dob = new Date(dobInput.value);

  // Validate the input date
  if (isNaN(dob)) {
    resultDiv.innerHTML = "Please enter a valid date of birth.";
    return;
  }

  const currentDate = new Date();
  if (dob > currentDate) {
    resultDiv.innerHTML = "Date of birth cannot be in the future.";
    return;
  }
  const ageInMs = currentDate - dob.getTime();
  const ageDate = new Date(ageInMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  resultDiv.innerHTML = `You are ${age} year(s) old.`;
});
