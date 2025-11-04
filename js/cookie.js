export function cookieFnc() {
  const consentBar = document.getElementById("cookieConsentBar");
  const consentBtn = document.getElementById("cookieConsentBtn");
  const consentName = "site_cookie_consent";

  function hasConsented() {
    return localStorage.getItem(consentName) === "true";
  }


  function showConsentBar() {
    if (!hasConsented()) {
      consentBar.classList.add("show");
    }
  }


  consentBtn.addEventListener("click", () => {
    localStorage.setItem(consentName, "true");
    consentBar.classList.remove("show");
  });


  window.addEventListener("load", () => {
    showConsentBar();
  });
};
