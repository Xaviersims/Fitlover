function validateForm() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const plan = document.getElementById("plan").value;
  const goals = document.getElementById("goals").value;

  if (!fullName || !email || !phone || !age || !gender || !plan || !goals) {
    alert("Please fill out all fields before submitting.");
    return false;
  }

  if (age < 16) {
    alert("You must be at least 16 years old to join.");
    return false;
  }

  return true;
}
