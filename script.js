const menuToggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
};

const container = document.getElementById("js-container");
const highlight = document.getElementById("js-highlight");
var containerHeight;
window.onscroll = function () {
  containerHeight = container.offsetHeight - window.innerHeight;
  containerPos = container.getBoundingClientRect();
  diff = containerHeight + containerPos.top;
  progressPercentage = (diff / containerHeight) * 100;
  cssWidth = Math.floor(100 - progressPercentage);
  highlight.style.width = cssWidth +  "%";
};

let preLoader = document.getElementById('loading');
function myFunction(){
  preLoader.style.display='none';
}