function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if (u === "bcps" && p === "12345") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "❌ Wrong Username or Password";
  }
}
