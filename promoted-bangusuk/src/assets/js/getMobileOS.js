const getMobileOS = (shareEndUrl) => {
  const varUA = navigator.userAgent.toLowerCase();
  const smsLink = document.getElementById("sms-link-btn");
  if (varUA.indexOf("android") > -1) {
    smsLink.href = `sms:?body=https://bangguseokmuseum2.com/results/${shareEndUrl}`;
  } else if (
    varUA.indexOf("iphone") > -1 ||
    varUA.indexOf("ipad") > -1 ||
    varUA.indexOf("ipod") > -1
  ) {
    smsLink.href = `sms:&body=https://bangguseokmuseum2.com/results/${shareEndUrl}`;
  } else {
    return;
  }
};

export default getMobileOS;
