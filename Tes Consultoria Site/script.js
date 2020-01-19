
	var checkLoadBody;

	var onLoadBody = () => {	
		if(!checkLoadBody) { 
			document.querySelectorAll(".boxSlider")[0].setAttribute("style", "--s-height: "+ window.innerHeight);
			checkLoadBody = true;
		}
	};

	onLoadBody();
	
