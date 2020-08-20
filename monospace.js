(function () {
	const F_MONOSPACE = "monospace";
	document.querySelectorAll("*").forEach(ele => {
		const elef = window.getComputedStyle(ele).fontFamily;
		if (elef.includes(F_MONOSPACE)) {
			ele.style.fontFamily = F_MONOSPACE;
		}
	})
})();
