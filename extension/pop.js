document.getElementById("scan").addEventListener("click", () => {
  chrome.tabs.create({ url: "http://localhost:8501" });  // or your deployed Streamlit URL
});
