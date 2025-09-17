document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop the form from submitting

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirm-password").value.trim();

  if (name === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
    alert("⚠️ Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("❌ Passwords do not match.");
    return;
  }

  alert("✅ Registration successful!");
});
