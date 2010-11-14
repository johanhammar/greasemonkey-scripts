// ==UserScript==
// @name           Icabanken - Simple login as default
// @namespace      http://www.johanhammar.se
// @description    Use the simple login form as default on Icabanken
// @include        https://www.icabanken.se/Secure/Login/LoginPw.aspx
// @author         Johan Hammar
// ==/UserScript==

(function () {
	document.getElementById('sel-simple').checked = true;
	document.getElementsByClassName('login-normal')[0].style.display = 'none';
	document.getElementsByClassName('login-simple')[0].style.display = 'block';
	document.getElementById('PasswordSimple').value = '';
	document.getElementById('PasswordSimple').focus();
})();
 