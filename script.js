function buyCourse(course) {
  document.body.style.opacity = "0.5";

  setTimeout(() => {
    window.location.href = "payment.html?course=" + course;
  }, 400);
}

/* 🛣️ Parallax Scroll Effect */
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  document.querySelector(".back").style.transform =
    "translateY(" + scroll * 0.2 + "px)";

  document.querySelector(".mid").style.transform =
    "translateY(" + scroll * 0.5 + "px)";

  document.querySelector(".front").style.transform =
    "translateY(" + scroll * 0.8 + "px)";
});