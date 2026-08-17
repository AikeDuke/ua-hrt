const container = document.getElementById("text-container")
var lastScroll = 0;

container.addEventListener("scroll", function() {
	if (container.scrollTop > lastScroll+2) {
		document.getElementById("menu-btn").style.top = "-64px";
	}
	else if (container.scrollTop < lastScroll-2) {
		document.getElementById("menu-btn").style.top = "0";
	}
	lastScroll = container.scrollTop
});