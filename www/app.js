function onDeviceReady() {
  window.location.href =
    'https://www.traveluce.com/ios?app=1';
}

document.addEventListener('deviceready', onDeviceReady, false);
document.addEventListener("offline", function() {window.location.href="offline.html";}, false);
