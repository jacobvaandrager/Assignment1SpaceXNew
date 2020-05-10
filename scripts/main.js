
var blowup = false;

var noFuel = false;

var keepGoing = true;

var ship = {
				parameters: {
					fuel: 290000000,
					throttle: 560,
					speed: 3600,
					acceleration: 20,
					movement: 120,

				},

				environment: {
					gravity: 2.4,
					distanceTraveled: 0,
					atmosphere: 96,
				},

				supplies: {
					food: 500,
					water: 300,
				},

				metrics: {
					gravityConverter: 5.2,
					marsMilesToEarthMilesConverter: 96,
				},
};

moveNow();

function accelerate(){

ship.parameters.movement += 30;
ship.environment.distanceTraveled += 10;
ship.parameters.fuel -= 150;

document.getElementById("movement").innerHTML = ship.parameters.movement;
document.getElementById("distanceTraveled").innerHTML = ship.environment.distanceTraveled;

}


function moveNow(){

	setInterval(function(){

		if (keepGoing == true){

	ship.environment.distanceTraveled += 100;
	ship.parameters.fuel -= 6;
	ship.parameters.movement += 1;
	

	// using variables in CSS - watched a video for this
	let root = document.documentElement;
	root.style.setProperty("--movementSide", ship.parameters.movement + "px");

	document.getElementById("movement").innerHTML = ship.parameters.movement;
	document.getElementById("fuel").innerHTML = ship.parameters.fuel;
	document.getElementById("distanceTraveled").innerHTML = ship.environment.distanceTraveled;
	
	if (ship.parameters.movement >= 400 && blowup == false)

		{
	
			blowUp();

		}

		if (ship.parameters.fuel <= 0 && noFuel == false)
	{

		noFuel1();

	}
}

	}, 150);

	setInterval(function(){

	ship.supplies.food -= 2;
	ship.supplies.water -= 1;

	document.getElementById("food").innerHTML = ship.supplies.food;
	document.getElementById("water").innerHTML = ship.supplies.water;


	}, 1000);
}




function blowUp(){

	blowup = true;
	console.log("blowup");
	ship.parameters.fuel = ship.parameters.fuel- 289998400;
	document.getElementById("fuel").innerHTML = ship.parameters.fuel;
	alert('Error 329bc: Fuel Hatch Destroyed');

}



function noFuel1(){

	document.getElementById("spaceship").style.visibility = "hidden";

	nofuel = true;
	keepGoing = false;
	console.log("nofuel");
	
	ship.parameters.fuel = "ERROR";
	ship.parameters.throttle = "ERROR";
	ship.parameters.speed = "ERROR";
	ship.parameters.acceleration = "ERROR";
	ship.parameters.movement = "ERROR";

	ship.environment.gravity = "ERROR";
	ship.environment.distanceTraveled = "ERROR";
	ship.environment.atmosphere = "ERROR";

	ship.supplies.food = "ERROR";
	ship.supplies.water = "ERROR";

	ship.metrics.gravityConverter = "ERROR";
	ship.metrics.marsMilesToEarthMilesConverter = "ERROR";

document.getElementById("fuel").innerHTML = ship.parameters.fuel;
document.getElementById("throttle").innerHTML = ship.parameters.throttle;
document.getElementById("speed").innerHTML = ship.parameters.speed;
document.getElementById("acceleration").innerHTML = ship.parameters.acceleration;
document.getElementById("movement").innerHTML = ship.parameters.movement;

document.getElementById("gravity").innerHTML = ship.environment.gravity;
document.getElementById("distanceTraveled").innerHTML = ship.environment.distanceTraveled;
document.getElementById("atmosphere").innerHTML = ship.environment.atmosphere;

document.getElementById("food").innerHTML = ship.supplies.food;
document.getElementById("water").innerHTML = ship.supplies.water;

document.getElementById("gravityConverter").innerHTML = ship.metrics.gravityConverter;
document.getElementById("marsMilesToEarthMilesConverter").innerHTML = ship.metrics.marsMilesToEarthMilesConverter;

}

function showImage() {
    var img = document.getElementById('spaceship.png');
    img.style.visibility = 'visible';
}


document.getElementById("fuel").innerHTML = ship.parameters.fuel;
document.getElementById("throttle").innerHTML = ship.parameters.throttle;
document.getElementById("speed").innerHTML = ship.parameters.speed;
document.getElementById("acceleration").innerHTML = ship.parameters.acceleration;
document.getElementById("movement").innerHTML = ship.parameters.movement;

document.getElementById("gravity").innerHTML = ship.environment.gravity;
document.getElementById("distanceTraveled").innerHTML = ship.environment.distanceTraveled;
document.getElementById("atmosphere").innerHTML = ship.environment.atmosphere;

document.getElementById("food").innerHTML = ship.supplies.food;
document.getElementById("water").innerHTML = ship.supplies.water;

document.getElementById("gravityConverter").innerHTML = ship.metrics.gravityConverter;
document.getElementById("marsMilesToEarthMilesConverter").innerHTML = ship.metrics.marsMilesToEarthMilesConverter;
