jQuery.ajax("config.json").then(config => {
		if (config.CTOAI_API_URL === "https://api.cto.ai") {
			document.getElementsByClassName("broken")[0].style.visibility = "hidden";
		} else {
			document.getElementsByClassName("working")[0].style.visibility = "hidden";
		}
	}
);
