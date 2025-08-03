document.addEventListener("DOMContentLoaded", async () => {
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const userInfo = document.getElementById("user-info");
  const loginSection = document.getElementById("login-section");
  const userName = document.getElementById("user-name");
  const userEmail = document.getElementById("user-email");

  // Load user from local storage
  const storedUser = await chrome.storage.local.get("user");
  if (storedUser.user) {
    showUser(storedUser.user);
  }

  loginBtn.addEventListener("click", async () => {
    const user = await loginWithPopup();
    if (user) {
      await chrome.storage.local.set({ user });
      showUser(user);
    }
  });

  logoutBtn.addEventListener("click", async () => {
    await chrome.storage.local.remove("user");
    loginSection.style.display = "block";
    userInfo.style.display = "none";
  });

  function showUser(user) {
    userName.textContent = user.name || "Unknown";
    userEmail.textContent = user.email || "Unknown";
    loginSection.style.display = "none";
    userInfo.style.display = "block";
  }
});

