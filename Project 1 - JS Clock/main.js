const secondHand = document.querySelector(".sec");
const minHand = document.querySelector(".min");
const hrHand = document.querySelector(".hr");

const dHr = document.querySelector(".d-hr");
const dMin = document.querySelector(".d-min");
const dSec = document.querySelector(".d-sec");

const setTime = () => {
  const currentDate = new Date();

  // seconds
  const seconds = currentDate.getSeconds();
  const secondDegs = (seconds / 60) * 360;
  secondHand.style.transform = `translate(-50%) rotate(${secondDegs}deg)`;
  // mins
  const mins = currentDate.getMinutes();
  const minDegs = (mins / 60) * 360;
  minHand.style.transform = `translate(-50%) rotate(${minDegs}deg)`;

  // hours
  const hour = currentDate.getHours();
  const hourDegs = (hour / 24) * 360;
  hrHand.style.transform = `translate(-50%) rotate(${hourDegs}deg)`;

  //   digital
  dHr.innerHTML = hour;
  dMin.innerHTML = mins;
  dSec.innerHTML = seconds;
};

setInterval(setTime, 1000);

setTime();
