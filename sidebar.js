if (window.location.href.includes("mtf")) {
	document.getElementsByTagName("body")[0].classList.add("mtf");
}
else if (window.location.href.includes("ftm")) {
	document.getElementsByTagName("body")[0].classList.add("ftm");
}

fetch("sidebar.html")
	.then(r => r.text())
	.then(data => {
		document.body.insertAdjacentHTML("afterbegin", data);
		var category_list = document.getElementsByClassName("sidebar-category");
		for (i = 0; i < category_list.length; i++) {
			category_list[i].addEventListener("click", function() {
				this.classList.toggle("active");
				this.nextElementSibling.classList.toggle("active");
			});
		}
		var article_list = document.getElementById("sidebar").getElementsByTagName("a");
		for (i = 0; i < article_list.length; i++) {
			if (article_list[i].href == window.location.href) {
				article_list[i].classList.add("current");
				var parent = article_list[i].parentElement.parentElement;
				if (parent == null || parent.tagName == "BODY") { return }
				while (parent.id != "sidebar") {
					if (parent.className == "sidebar-category-content") {
						parent.previousElementSibling.click();
					}
					parent = parent.parentElement;
				}
			}
		}
	});

const container = document.getElementById("text-container");
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