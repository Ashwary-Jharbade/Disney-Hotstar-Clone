let scrollPerClick;
let scrollAmount1 = 0;
let scrollAmount2 = 0;
let scrollAmount3 = 0;
let scrollAmount4 = 0;
let scrollAmount5 = 0;
let scrollAmount6 = 0;
let scrollAmount7 = 0;


scrollPerClick = document.querySelector(".card-container").clientWidth * 8;

function slideLeft (para,num) {
  let cls = "slider-"+num
  let scrollAmount = para
  let sliders = document.querySelector(`.${cls}`);

  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }

  return scrollAmount;
  console.log("Scroll Amount: ", scrollAmount);
}

function slideRight(para,num) {
  let cls = "slider-"+num;
  let scrollAmount = para
  let sliders = document.querySelector(`.${cls}`);

  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }

  return scrollAmount
}

function prev(para) {

  switch(para){
    case 1:
      scrollAmount1 =  slideLeft(scrollAmount1,para);
      break;
    case 2:
      scrollAmount2 = slideLeft(scrollAmount2,para);
      break;
    case 3:
      scrollAmount3 = slideLeft(scrollAmount3,para);
      break;
    case 4:
      scrollAmount4 = slideLeft(scrollAmount4,para);
      break;
    case 5:
      scrollAmount5 = slideLeft(scrollAmount5,para);
      break;
    case 6:
      scrollAmount6 = slideLeft(scrollAmount6,para);
      break;
    case 7:
      scrollAmount7 = slideLeft(scrollAmount7,para);
      break;
  }
}

function next(para) {
  switch(para){
    case 1:
      scrollAmount1 =  slideRight(scrollAmount1,para);
      break;
    case 2:
      scrollAmount2 = slideRight(scrollAmount2,para);
      break;
    case 3:
      scrollAmount3 = slideRight(scrollAmount3,para);
      break;
    case 4:
      scrollAmount4 = slideRight(scrollAmount4,para);
      break;
    case 5:
      scrollAmount5 = slideRight(scrollAmount5,para);
      break;
    case 6:
      scrollAmount6 = slideRight(scrollAmount6,para);
      break;
    case 7:
      scrollAmount7 = slideRight(scrollAmount7,para);
      break;
  }
}
