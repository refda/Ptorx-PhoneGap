function onDeviceReady() {
    
  if((navigator.connection.type).toUpperCase() != "NONE" &&
       (navigator.network.connection.type).toUpperCase() != "UNKNOWN") {
    window.location.href = 'https://www.traveluce.com/ios?app=1';
    } else {
    window.location.href="offline.html";
    }         
  
}

document.addEventListener('deviceready', onDeviceReady, false);
document.addEventListener("offline", function() {window.location.href="offline.html";}, false);
