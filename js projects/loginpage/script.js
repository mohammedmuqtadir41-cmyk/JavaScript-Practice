function authenticateUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "Ahmed" && password === "123456789") {
        resolve("Authentication Successful");
      } else {
        reject("Invalid username or password");
      }
    }, 3000);
  });
}

const loginForm = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const messageDiv = document.querySelector("#message");
const loginBtn = document.querySelector("#loginBtn");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  messageDiv.className = "message loading";
  messageDiv.textContent = "Authenticating user...";
  loginBtn.disabled = true;

  try {
    const result = await authenticateUser(
      usernameInput.value,
      passwordInput.value,
    );

    messageDiv.className = "message success";
    messageDiv.textContent = result;

    console.log(result);
    console.log("Redirecting to Dashboard...");
  } catch (error) {
    messageDiv.className = "message error";
    messageDiv.textContent = error;

    console.log(error);
    console.log("Please try again.");
  } finally {
    loginBtn.disabled = false;
  }
});
