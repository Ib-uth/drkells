// Function to show the cookies popup after a delay
function showCookiesPopup() {
    const cookiesPopup = document.getElementById('cookiesPopup');
    cookiesPopup.style.display = 'block';
  }
  
  // Function to accept cookies
  function acceptCookies() {
    // You can implement your code to handle cookie acceptance here
    // For example, setting a cookie or storing the user's preference
    hideCookiesPopup();
  }
  
  // Function to reject cookies
  function rejectCookies() {
    // You can implement your code to handle cookie rejection here
    // For example, disabling certain functionalities or showing an additional notice
    hideCookiesPopup();
  }
  
  // Function to hide the cookies popup
  function hideCookiesPopup() {
    const cookiesPopup = document.getElementById('cookiesPopup');
    cookiesPopup.style.display = 'none';
  }
  
  // Show the cookies popup after 3 seconds (adjust the delay as needed)
  setTimeout(showCookiesPopup, 5000);
  