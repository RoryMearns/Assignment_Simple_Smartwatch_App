/* Application for 345 Assignment: Rory Mearns (ID.3928873) */


/* ------ User Settings Options ------ */
var skill = ["beginner", "experienced"],	// Skill options available to users
days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
weather = ["sunny", "overcast", "rain"],
currentDay, 
currentScreen,
warningMsg = "Storm Warning",
warningToday = true;

/* ------ User Settings ------ */
var user = {
	riderWeight: 85,
	riderSailingDays: ["wednesday", "friday", "saturday", "sunday"],
	riderSkill: "experienced",
	riderLocation: "St Clair"
}

/* ------ Weather Data ------ */
/* 
Note that this weather data format is very similar to the JSON 
data delivered by the many weather API's avialable. Refer to the 
magicseaweed weather api as an example:
http://magicseaweed.com/developer/forecast-api

For simplicity this app runs on the premise that the weather data
is delivered daily at midnight. It contains the forecast for up to
4 full days in advace with 6 hour intervals.
*/

var weatherData = {
	localTimestamp: 1366902000,
	issueTimestamp: 1366848000,
	// The weather at the time of delivery
	current: {
		weatherDescription: "",
		temp: 18,
		tempUnit: "c",
		wind: {
			speed: 10,
			gusts: 13,
			direction: 85,
			compassDirection: "W",
			unit: "knt"
		}
	},
	// The weather forecast for the following 90 hours (at 6 hour intervals)
	forecast: {
		timePlus0600: {
			weatherDescription: "",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				direction: 85,
				compassDirection: "W",
				unit: "knt"
			}
		},
		timePlus1200: {
			weatherDescription: "",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				direction: 85,
				compassDirection: "W",
				unit: "knt"
			}
		},
		timePlus1800: {
			weatherDescription: "",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				direction: 85,
				compassDirection: "W",
				unit: "knt"
			}
		},
		// Midnight / start of Day 2
		timePlus2400: {
			weatherDescription: "",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				direction: 85,
				compassDirection: "W",
				unit: "knt"
			}
		},
		timePlus3000: {
			weatherDescription: "",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				direction: 85,
				compassDirection: "W",
				unit: "knt"
			}
		},
		timePlus3600: {
			weatherDescription: "",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				direction: 85,
				compassDirection: "W",
				unit: "knt"
			}
		},
		timePlus4200: {
			weatherDescription: "",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				direction: 85,
				compassDirection: "W",
				unit: "knt"
			}
		},
		// Midnight / start of Day 3
		timePlus4800: {
			weatherDescription: "",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				direction: 85,
				compassDirection: "W",
				unit: "knt"
			}
		},
		timePlus5400: {
			weatherDescription: "",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				direction: 85,
				compassDirection: "W",
				unit: "knt"
			}
		},
		timePlus6000: {
			weatherDescription: "",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				direction: 85,
				compassDirection: "W",
				unit: "knt"
			}
		},
		timePlus6600: {
			weatherDescription: "",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				direction: 85,
				compassDirection: "W",
				unit: "knt"
			}
		},
		// Midnight / start of Day 3
		timePlus7200: {
			weatherDescription: "",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				direction: 85,
				compassDirection: "W",
				unit: "knt"
			}
		},
		timePlus7800: {
			weatherDescription: "",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				direction: 85,
				compassDirection: "W",
				unit: "knt"
			}
		},
		timePlus8400: {
			weatherDescription: "",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				direction: 85,
				compassDirection: "W",
				unit: "knt"
			}
		},
		timePlus9000: {
			weatherDescription: "",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				direction: 85,
				compassDirection: "W",
				unit: "knt"
			}
		}
	}
}



/* ------ Build Alert Screen ------ */
function buildAlertScreen (sailSize, day, location, windLower, windUpper, temp, image) {
	// Paint the background
	clearScreen();
	setBackgroundColor("#000");
	// Draw the sail recommendation
	drawCircle(235, 75, 52, "white");
	drawText(235, 95, "bold 60px helvetica", "black", sailSize, "center");
	// Draw the current weather icon
	drawImage(55, 35, 94, 80, "../prototype_javascript/app_images/"+image);
	// Write the day
	drawText(170, 173, "bold 42px helvetica", "#939597", day, "center");
	// Write the location
	drawText(170, 210, "100 30px helvetica ", "#939597", location, "center");
	// Draw the seperator line
	drawLine(20, 225, 320, 225, "white", 1);
	// Write the wind speed
	drawText(30, 268, "100 30px helvetica ", "#00ADEF", ("Wind: "+windLower+"-"+windUpper+" kn"));
	// write the temperature 
	drawText(30, 308, "100 30px helvetica ", "#00ADEF", ("Temp: "+temp+"°C"));

};

/* ------ Build Home Screen ------ */
function buildHomeScreen (sailSize, day, location, windLower, windUpper, temp, image, forecastDesc) {
	// Paint the background
	clearScreen();
	setBackgroundColor("#000");
	// Draw the sail recommendation
	drawCircle(170, 81, 52, "white");
	drawText(170, 101, "bold 60px helvetica", "black", sailSize, "center");
	// Draw the current weather icon
	drawImage(28, 53, 77, 65, "../prototype_javascript/app_images/"+image);
	// Write the day
	var dayShort = shortenDay(day);
	drawText(230, 97, "400 38px helvetica", "#939597", dayShort);
	// Write forecast:
	drawText(170, 175, "100 30px helvetica ", "#BBBDC0", forecastDesc, "center");
	// Write the wind & temp:
	drawText(170, 212, "100 30px helvetica ", "#00ADEF", (+windLower+"-"+windUpper+" kn, "+temp+"°C"), "center");
	// Write any warnings:
	if (warningToday) {
		drawText(170, 263, "100 30px helvetica ", "#ED1C24", warningMsg, "center");
		drawImage(25, 241, 27, 25, "../prototype_javascript/app_images/warning_27x25.svg");
		drawImage(285, 241, 27, 25, "../prototype_javascript/app_images/warning_27x25.svg");
	}
	// Write the location
	drawText(170, 315, "100 30px helvetica ", "#939597", location, "center");
	// Draw the calender & settings buttons
	drawImage(25, 280, 49, 44, "../prototype_javascript/app_images/cal_49x44.svg");
	drawImage(270, 280, 44, 44, "../prototype_javascript/app_images/settings_44x44.svg");
};

/* ------ Build Forecast Screen ------ */
function buildForecastScreen (day1, day2, day3, day4) {
	// Day item should be an array consisting of: [sailSize, day, windLower, windUpper, temp, image]

	// Paint the background
	clearScreen();
	setBackgroundColor("#000");
	// Draw the dividers & arrows (Baselines: 105, 270, 235, 300) 
	drawLine(20, 40, 320, 40, "white", 1);
	drawLine(20, 105, 320, 105, "white", 1);
	drawLine(20, 170, 320, 170, "white", 1);
	drawLine(20, 235, 320, 235, "white", 1);
	drawLine(20, 300, 320, 300, "white", 1);
	drawImage(155, 10, 30, 16, "../prototype_javascript/app_images/up_30x16.svg");
	drawImage(155, 314, 30, 16, "../prototype_javascript/app_images/down_30x16.svg");

	// All thats needed to build each line & then building all four forecasts:
	function drawDay (day, offset) {
		drawText(170, 92+offset, "bold 55px helvetica", "white", day[0].toFixed(1), "center");
		drawText(62, 81+offset, "100 22px helvetica", "white", shortenDay(day[1]));
		drawText(320, 65+offset, "100 22px helvetica", "#939597", (day[2]+"-"+day1[2]+" kn"), "right");
		drawText(320, 94+offset, "100 22px helvetica", "#00ADEF", (day[4]+"°C"), "right");
		drawImage(20, 56+offset, 33, 33, "../prototype_javascript/app_images/"+day[5]);
	}
	drawDay(day1, 0);
	drawDay(day2, 65);
	drawDay(day3, 130);
	drawDay(day4, 195);
};


/* ------ Some Helper Functions ------ */
// Shorten day name:
function shortenDay (day) {
	switch (day.toLowerCase()){
		case "monday": 
		return "Mon";
		break;
		case "tuesday": 
		return "Tues";
		break;
		case "wednesday": 
		return "Wed";
		break;
		case "thursday": 
		return "Thurs";
		break;
		case "friday": 
		return "Fri";
		break;
		case "saturday": 
		return "Sat";
		break;
		case "sunday": 
		return "Sun";
		break;	
	}
};

/* ------ Main Function ------ */
function main () {
	
	/* -- FOLLOWING USED FOR TESTING -- */
	// drawRect(10, 10, 70, 30, "yellow");
	// drawRect(10, 10, 70, 30, "yellow", 15 );
	// drawLine(40, 40, 100, 200, "green", 5);
	// setBackgroundColor("#ccc");
	// drawText(0, 48, "48px serif", "blue", "I Love Lamp");
	// drawText(0, 48, "48px serif", "blue", "I Love Lamp", true);
	// drawCircle(150, 150, 50, "blue");
	// drawCircle(150, 150, 50, "blue", 15);
	// drawImage(100, 100, 100, 100, "../prototype_javascript/app_images/test_image.png");

	var xday1 = [5.3, "Thursday", 12, 20, 13, "small_wind_cloud_33x33.svg"];
	var xday2 = [6.7, "friday", 10, 12, 17, "small_sun_cloud_33x33.svg"];
	var xday3 = [8.5, "Saturday", 5, 12, 24, "small_sun_33x33.svg"];
	var xday4 = [5.0, "Sunday", 15, 22, 16, "small_wind_sun_33x33.svg"];
	buildForecastScreen(xday1, xday2, xday3, xday4);
	
	//buildHomeScreen(3.5, "Thursday", "St Clair", 24, 30, 10, "overcast_wind_94x80.svg", "Rain, high seas, gale");
	//buildAlertScreen(5.3, "Wednesday", "St Clair", 24, 30, 10, "overcast_wind_94x80.svg");
};