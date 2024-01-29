let slide = document.querySelectorAll(".sli");
var counter = 0;

let imageslider = () => {
  if (counter > 2) {
    counter = 2;
  } else if (counter < -3) {
    counter = -3;
  }
  slide.forEach((slide) => {
    slide.style.transform = `translateX(${counter * 120}%)`;
  });
};

function goback() {
  counter--;
  imageslider();
}
function forward() {
  counter++;
  imageslider();
}
