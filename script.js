function calculateBMI() {
    var weightInput = document.getElementById('weight');
    var heightInput = document.getElementById('height');
    var weightUnit = document.getElementById('weightUnit').value;
    var heightUnit = document.getElementById('heightUnit').value;
    var resultDiv = document.getElementById('result');
  
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);
  
    // Convert weight to kg if the selected unit is lb
    if (weightUnit === 'lb') {
      weight = weight * 0.45359237;
    }
  
    // Convert height to cm if the selected unit is in
    if (heightUnit === 'in') {
      height = height * 2.54;
    }
  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      resultDiv.textContent = 'Please enter valid weight and height values.';
      return;
    }
  
    var bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(2);
  
    var category;
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 25) {
      category = 'Normal Weight';
    } else if (bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
  
    resultDiv.textContent = 'BMI: ' + bmi + ' (' + category + ')';
  }