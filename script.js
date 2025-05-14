
document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmiResult').textContent = "Your BMI is " + bmi;
});
