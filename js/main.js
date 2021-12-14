// CIRCULAR TEXT ANIMATION
// SPLIT TEXT INTO LETTERS
const circleText = document.querySelector('.circle__text');
circleText.innerHTML = circleText.textContent.replace(/\S/g, "<span>$&</span>");

const element = document.querySelectorAll('span');
for (let i = 0; i < element.length; i++){
  element[i].style.transform="rotate("+i+"deg)"
}