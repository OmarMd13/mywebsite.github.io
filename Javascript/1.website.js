let autoSlide = {
	"clicks": ["radio1", "radio2", "radio3", "radio4"],
	"autoSlideWork": false,
}

function slide(myClick){
	if (myClick.id === "radio1"){
		document.querySelector("#slideFirst").style.marginLeft = "-0%";
		document.querySelector("#slideFirst").style.transition = "1.5s";
	}
	else if (myClick.id === "radio2"){
		document.querySelector("#slideFirst").style.marginLeft = "-100%";
		document.querySelector("#slideFirst").style.transition = "1.5s";
	}
	else if (myClick.id === "radio3"){
		document.querySelector("#slideFirst").style.marginLeft = "-200%";
		document.querySelector("#slideFirst").style.transition = "1.5s";
	}
	else if (myClick.id === "radio4"){
		document.querySelector("#slideFirst").style.marginLeft = "-300%";
		document.querySelector("#slideFirst").style.transition = "1.5s";
	}
}


// auto sliding funciton:

function wait(ms){
	return new Promise(resolve =>setTimeout(resolve, ms));
}

async function sliding(){
	let i = 0;
	while (i < 4){
		document.getElementsByClassName("btn")[i].click();
		document.getElementsByClassName("btn")[i].style.animation = "autoHover 3s ease";
		await wait(3000);
		document.getElementsByClassName("btn")[i].style.animation = "";
		i += 1;
		if (i >= 4){
			i = 0;
		}
		else if (autoSlide["autoSlideWork"] === false){
			break;
		}
	}
}

function manualOn(){
	autoSlide["autoSlideWork"] = false;
}

let clicks = 0;
function slideBtn(){
	clicks += 1;

	if (clicks === 1){
		autoSlide["autoSlideWork"] = true;
		sliding();
		document.querySelector("#autoSlideBtn").style.background = "green";
	}
	else if (clicks === 2){
		manualOn();
		clicks = 0;
		document.querySelector("#autoSlideBtn").style.background = "linear-gradient(red, #a02525)";
	}
}
