//check which browser is used
export function getBrowser() {
  var ua = navigator.userAgent;
  var isOpera = ua.indexOf("Opera") > -1;
  var isIE = ua.indexOf("compatible") > -1 && ua.indexOf("MSIE") > -1 && !isOpera;
  var isEdge = ua.indexOf("Edge") > -1;
  var isFF = ua.indexOf("Firefox") > -1;
  var isSafari = ua.indexOf("Safari") > -1 && ua.indexOf("Chrome") == -1;
  var isChrome = ua.indexOf("Chrome") > -1 && ua.indexOf("Safari") > -1;
  var isBlink = (isChrome || isOpera) && !!window.CSS;
  if (isIE) {
    return "IE";
  } else if (isEdge) {
    return "Edge";
  } else if (isFF) {
    return "Firefox";
  } else if (isSafari) {
    return "Safari";
  } else if (isChrome) {
    return "Chrome";
  } else if (isOpera) {
    return "Opera";
  } else if (isBlink) {
    return "Blink";
  } else {
    return "unknown";
  }
}

//check if browser is safari
function isSafari() {
  var browser = getBrowser();
  if (browser == "Safari") {
    return true;
  } else {
    return false;
  }
}

//check if browser is chrome
function isChrome() {
  var browser = getBrowser();
  if (browser == "Chrome") {
    return true;
  } else {
    return false;
  }
}

//check if browser is firefox
function isFirefox() {
  var browser = getBrowser();
  if (browser == "Firefox") {
    return true;
  } else {
    return false;
  }
}

//check if browser is IE
function isIE() {
  var browser = getBrowser();
  if (browser == "IE") {
    return true;
  } else {
    return false;
  }
}

//check if browser is Edge
function isEdge() {
  var browser = getBrowser();
  if (browser == "Edge") {
    return true;
  } else {
    return false;
  }
}
