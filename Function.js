function setCookie() {
    var cookieName = "exampleCookie";
    var cookieValue = "Hello, this is a cookie!";
    document.cookie = cookieName + "=" + cookieValue + ";path=/";
    document.getElementById("cookieValue").innerText = "Cookie set! Refresh the page to see its value.";
  }
  
  function getCookie() {
    var name = "exampleCookie=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }
  
  window.onload = function() {
    var cookieValue = getCookie();
    if (cookieValue !== "") {
      document.getElementById("cookieValue").innerText = "Cookie value: " + cookieValue;
    }
  }
  