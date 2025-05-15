function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // cm to meters

  if (!weight || !height || weight <= 0 || height <= 0) {
    document.getElementById("bmiResult").textContent = "Please enter valid numbers.";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(1);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  document.getElementById("bmiResult").textContent = `Your BMI is ${bmi} (${category})`;
}
