
var weatherjson;

//vul eigen API key in tussen de "" (check de readme op https://github.com/CocoDeijmann/mondriaan/)
var api_key = "";
var id = "2759794";
// Amsterdam = 2759794
// Reykjavik = 3413829
// Sao Paulo = 3448439
// Delhi     = 1273294
// Fairbanks = 5861897
// Dakar     = 2253354
// Houston   = 4699066
// Pai       = 1151601
// Milan     = 6542283
// Melbourne = 2158177

var name;
var windDirection;
var windSpeed;
var temp;
var humidity;

var x;
var y;
var s;
var t;

function preload(){
  weatherjson = loadJSON("https://api.openweathermap.org/data/2.5/weather?id=" + id + "&units=metric&APPID=" + api_key);
}

function setup() {
  createCanvas(250, 250);
  getWeather();
}

function draw() {
  background(240);
  display();
}

function getWeather() {
  
  name = weatherjson.name;
  try {
    windDirection = weatherjson.wind.deg;
  } 
  catch (e) {
    windDirection = 0;
  }
  windSpeed = weatherjson.wind.speed;
  temp = weatherjson.main.temp;
  humidity = weatherjson.main.humidity;

  console.log("name:" + name);
  console.log("wind direction:" + windDirection);
  console.log("wind speed:" + windSpeed);
  console.log("temp:" + temp);
  console.log("humidity:" + humidity);
}

function display() {
  x = humidity;
  y = windDirection;
  s = windSpeed;
  t = temp;

  strokeWeight(7);

  //blok 1
  beginShape();
  if (s <= 5) {
    if (t <= 14) {
      fill(255, 200, 0);
    } else if (t > 14 && t < 28 ) {
      fill(255, 0, 0);
    } else {
      fill(0, 20, 160);
    }
  } else {
    fill(255);
  }
  vertex(2, 2);
  vertex(2, y);
  vertex(x, y);
  vertex(x, 2);
  endShape(CLOSE);

  //blok 2
  beginShape();
  if (s > 10) {
    if (t <= 14) {
      fill(255, 0, 0);
    } else if (t > 14 && t < 28 ) {
      fill(255, 200, 0);
    } else {
      fill(0, 20, 160);
    }
  } else {
    fill(255);
  }
  vertex(x, 2);
  vertex(x, y);
  vertex(248, y);
  vertex(248, 2);
  endShape(CLOSE);

  //blok 5
  beginShape();
  if (s <= 5) {
    if (t <= 14) {
      fill(255, 0, 0);
    } else if (t > 14 && t < 28 ) {
      fill(0, 20, 160);
    } else {
      fill(255, 200, 0);
    }
  } else {
    fill(255);
  }
  vertex(2, 160);
  vertex(2, 248);
  vertex(25, 248);
  vertex(25, 160);
  endShape(CLOSE);

  //blok 6
  beginShape();
  if (s > 10) {
    if (t <= 14) {
      fill(0, 20, 160);
    } else if (t > 14 && t < 28 ) {
      fill(255, 200, 0);
    } else {
      fill(255, 0, 0);
    }
  } else {
    fill(255);
  }
  vertex(25, 160);
  vertex(25, 248);
  vertex(x, 248);
  vertex(x, 160);
  endShape(CLOSE);

  //blok 7
  beginShape();
  if (s > 10) {
    if (t <= 14) {
      fill(255, 200, 0);
    } else if (t > 14 && t < 28 ) {
      fill(255, 0, 0);
    } else {
      fill(0, 20, 160);
    }
  } else {
    fill(255);
  }
  vertex(x, 160);
  vertex(x, 230);
  vertex(190, 230);
  vertex(190, 160);
  endShape(CLOSE);

  //blok 9
  beginShape();
  if (s <= 5) {
    if (t <= 14) {
      fill(0, 20, 160);
    } else if (t > 14 && t < 28 ) {
      fill(255, 200, 0);
    } else {
      fill(255, 0, 0);
    }
  } else {
    fill(255);
  }
  vertex(x, 230);
  vertex(x, 248);
  vertex(190, 248);
  vertex(190, 230);
  endShape(CLOSE);

  //blok 8
  beginShape();
  if (s > 5 && s <= 10) {
    if (t <= 14) {
      fill(255, 0, 0);
    } else if (t > 14 && t < 28 ) {
      fill(0, 20, 160);
    } else {
      fill(255, 200, 0);
    }
  } else {
    fill(255);
  }
  vertex(190, 160);
  vertex(190, 248);
  vertex(248, 248);
  vertex(248, 160);
  endShape(CLOSE);

  //blok 3
  beginShape();
  if (s > 5 && s <= 10) {
    if (t <= 14) {
      fill(0, 20, 160);
    } else if (t > 14 && t < 28 ) {
      fill(255, 200, 0);
    } else {
      fill(255, 0, 0);
    }
  } else {
    fill(255);
  }
  vertex(2, y);
  vertex(2, 160);
  vertex(x, 160);
  vertex(x, y);
  endShape(CLOSE);

  //blok 4
  beginShape();
  if (s > 5 && s <= 10) {
    if (t <= 14) {
      fill(255, 0, 0);
    } else if (t > 14 && t < 28 ) {
      fill(255, 0, 0);
    } else {
      fill(0, 20, 160);
    }
  } else {
    fill(255);
  }
  vertex(x, y);
  vertex(x, 160);
  vertex(248, 160);
  vertex(248, y);
  endShape(CLOSE);
}
