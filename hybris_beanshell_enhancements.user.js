// ==UserScript==
// @name           hybris beanshell enhancements.
// @namespace      www.johanhammar.se
// @include        http://localhost:9001/eval
// ==/UserScript==

var shells = document.getElementsByName("bsh.script");

for (var i = 0; i < shells.length; i++) {
	shells[i].setAttribute("cols", "160");
	shells[i].setAttribute("rows", "30");
	shells[i].value = "";
}

var items = document.getElementsByName("bsh.servlet.captureOutErr");

for (var i = 0; i < items.length; i++) {
	items[i].checked = true;
}
