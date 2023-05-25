const backgrounds = [
  "url(./Assets/CityImg/city1.jpg)",
  "url(./Assets/CityImg/city2.jpg)",
  "url(./Assets/CityImg/city3.jpg)",
  "url(./Assets/CityImg/city4.jpg)",
  "url(./Assets/CityImg/city5.jpg)",
  "url(./Assets/CityImg/city6.jpg)",
  "url(./Assets/CityImg/city7.jpg)",
];
const button = document.getElementById("location");
const backgroundCity = document.getElementById("background-city");
backgroundCity.style.backgroundImage = "url(./Assets/CityImg/city1.jpg)";

let index = 0;
button.onclick = function () {
  index = (index + 1) % backgrounds.length;
  let city = backgrounds[index];
  backgroundCity.style.backgroundImage = city;
};
