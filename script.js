(function () {
	var F_SANS_SERIF = "sans-serif";
	var F_SERIF = "serif";
	var F_MONOSPACE = "monospace";
	Array.prototype.forEach.call(document.getElementsByTagName("*"), (ele) => {
		var elef = window.getComputedStyle(ele).fontFamily;
		if (elef.length > 0) {
			if (elef.indexOf(F_SANS_SERIF) > 0) {
				ele.style.fontFamily = F_SANS_SERIF;
			}
			else if (elef.indexOf(F_SERIF) > 0) {
				ele.style.fontFamily = F_SERIF;
			}
			else if (elef.indexOf(F_MONOSPACE) > 0) {
				ele.style.fontFamily = F_MONOSPACE;
			}
		}
	})
})();
