document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("apicall");
  
    button.addEventListener("click", function () {

      chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
        const activeTab = tabs[0];
        const domain = new URL(activeTab.url).hostname;
  
    
        const apiUrl = `http://localhost:5000/api?domain=${domain}`;
  

try {
    const resp = await fetch(apiUrl);
    const data = await  resp.json();

    console.log(data);
} catch (error) {
    console.log(error);
}






      });
    });
  });
  