const konamicode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;

function init(){
document.body.addEventListener('keydown', function(event) {
  event.which;
  kcdetector(event);
  // console.log("This is what edetail produces" + event.detail);
  // console.log("This is what ewhich produces" + event.which);
  // console.log("This is what elocation produces" + event.location);
  }
  );
}

init();

function kcdetector(event) {
  const keypressed = parseInt(event.which);
  if (keypressed === konamicode[index]) {
    index++;
    if (index === konamicode.length) {
     alert("You are a badass queen and the people love you, darling.");
     index = 0;
     }
  } else {
  index = 0;
  }
}