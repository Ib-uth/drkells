// Set the time (in milliseconds) after which the pop-up will appear
const popupDelay = 5000; // 5 seconds

// Function to show the cookies pop-up
function showCookiesPopup() {
    const cookiesPopup = document.getElementById('cookiesPopup');
    cookiesPopup.classList.add('show');
}

// Function to hide the cookies pop-up
function hideCookiesPopup() {
    const cookiesPopup = document.getElementById('cookiesPopup');
    cookiesPopup.classList.remove('show');
}

// Function to handle the 'Accept' button click
function acceptCookies() {
    // Set a cookie to store user's acceptance
    // You can implement your cookie setting logic here
    // For this example, I'm just logging the action
    console.log('Cookies accepted');
    hideCookiesPopup();
}

// Function to handle the 'Reject' button click
function rejectCookies() {
    // You can implement your cookie setting logic here for rejecting cookies
    // For this example, I'm just logging the action
    console.log('Cookies rejected');
    hideCookiesPopup();
}

// Show the cookies pop-up after the specified delay
setTimeout(showCookiesPopup, popupDelay);
