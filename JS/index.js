// ! Side Bar********
let transDuration = 550;
// sliding side bar
let navWidth = $("#sideBar nav").innerWidth();
let left = true;
$("#sideBar").css("left", -navWidth);
$("#gear").click(function () {
  if (left) {
    $("#sideBar").animate({ left: `-${navWidth}` }, transDuration);
    left = false;
  } else {
    $("#sideBar").animate({ left: 0 }, transDuration);
    left = true;
  }
});

// nav anchors
$("#sideBar nav div a").click(function () {
  let aHref = $(this).attr("href");
  let sectionTopOffset = $(aHref).offset().top;
  $("html,body").animate({ scrollTop: sectionTopOffset }, transDuration);
});

// ! slide down section
$(".singers div").not(".default").slideUp();
$(".singers h3").click(function () {
  $(".singers div").not($(this).next()).slideUp();
  $(this).next().slideToggle(400);
});
// ! count down section
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let hourCountDown = parseInt(Math.random() * 24);
hours.innerText = `${hourCountDown} h`;
let minutesCountDown = parseInt(Math.random() * 60);
minutes.innerText = `${minutesCountDown} m`;
let secondsCountDown = parseInt(Math.random() * 60);
seconds.innerText = `${secondsCountDown} s`;

setInterval(() => {
  secondsCountDown--;
  seconds.innerText = `${secondsCountDown} s`;
  if (secondsCountDown == 0) {
    secondsCountDown = 60;
    minutesCountDown--;
    minutes.innerText = `${minutesCountDown} m`;
    if (minutesCountDown == 0) {
      minutesCountDown = 60;
      hourCountDown--;
      hours.innerText = `${hourCountDown} h`;
      if (hourCountDown == 0) {
        hourCountDown = 24;
      }
    }
  }
}, 1000);
// ! textarea length
let textAreaIn = document.getElementById("textAreaIn");
let textAreaLimitViewer = document.getElementById("textAreaLimitViewer");
let submitBtn = document.getElementById("submitBtn");
let editBtn = document.getElementById("editBtn");
let textAreaLimit = 100;
textAreaIn.addEventListener("keyup", () => {
  textAreaLimit = 100 - textAreaIn.value.length;
  setRemainingLengthToLimitVariable();
  if (textAreaLimit <= 0 || textAreaIn.value.length == 100) {
    submitBtn.disabled = true;
    textAreaLimitViewer.innerText = "your available character finished";
    editBtn.classList.replace("d-none", "d-inline");
    editBtn.addEventListener("click", () => {
      submitBtn.disabled = false;
      textAreaIn.value = textAreaIn.value.substring(0, 99);
      textAreaLimit = 1;
      setRemainingLengthToLimitVariable();
    });
  }
});
function setRemainingLengthToLimitVariable() {
  textAreaLimitViewer.innerText = textAreaLimit;
}
