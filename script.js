function handleGetFormData() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  return {
    weight,
    height,
  };
}

function isNumber(string) {
  if (isNaN(string)) {
    return false;
  } else {
    return true;
  }
}

function validateFormData(data) {
  return isNumber(data.weight) && isNumber(data.height);
}

function calculateBMI(weight, height) {
  return weight / (height / 100) ** 2;
}

function formatNumber(number) {
  // Ubah bilangan menjadi string dengan 1 digit desimal
  let formattedNumber = number.toFixed(1);

  // Jika bilangan berakhir dengan koma nol atau titik nol, hapus koma nol atau titik nol
  if (formattedNumber.endsWith(".0")) {
    formattedNumber = formattedNumber.slice(0, -2);
  }

  return formattedNumber;
}

function scoreBMI(score) {
  if (score < 18.5) {
    return "Kurus";
  } else if (score >= 18.5 && score <= 24.9) {
    return "Normal";
  } else if (score >= 25 && score <= 29.9) {
    return "Gemuk";
  } else {
    return "Obesitas";
  }
}

function submit() {
  const error = document.querySelector(".error-message");
  const result = document.querySelector(".bmi-result");
  const bmiScore = document.getElementById("bmi-score");
  const bmiCategory = document.getElementById("bmi-category");

  let formData = handleGetFormData();
  const validateData = validateFormData(formData);

  //jika error
  if (!validateData) {
    error.style.display = "block";
    result.style.display = "none";
  } else {
    // jika tidak error
    result.style.display = "block";
    error.style.display = "none";
    let bmi = calculateBMI(formData.weight, formData.height);
    let score = scoreBMI(bmi);

    bmiScore.innerHTML = formatNumber(bmi);
    bmiCategory.innerHTML = score;
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submit();
});
