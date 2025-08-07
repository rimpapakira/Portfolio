const navs = document.querySelectorAll(".nav-list li");
const cube = document.querySelector(".box");
const sections = document.querySelectorAll(".section");

const resumeLists = document.querySelectorAll(".resume-list");
const resumeBoxs = document.querySelectorAll(".resume-box");

const portfolioLists = document.querySelectorAll(".portfolio-list");
const portfolioBoxs = document.querySelectorAll(".portfolio-box");

// navbar actions and all section actions along with cube rotation when navbar is clicked
navs.forEach((nav, idx) => {
  nav.addEventListener("click", () => {
    document.querySelector(".nav-list li.active").classList.remove("active");
    nav.classList.add("active");

    cube.style.transform = `rotateY(${idx * -90}deg)`;

    document.querySelector(".section.active").classList.remove("active");
    sections[idx].classList.add("active");

    const array = Array.from(sections);
    const arrSecs = array.slice(1, -1);   // only requires indexes 1, 2, 3 or does not require start and indexes
    arrSecs.forEach(arrSecs =>{
      if(arrSecs.classList.contains("active")) {
        sections[4].classList.add('action-contact');
      }
    })
    if (sections[0].classList.contains('active')){
        sections[4].classList.remove('action-contact');
    }
  });
});

// resume section when clicked tab-list
resumeLists.forEach((list, idx) => {
  list.addEventListener("click", () => {
    document.querySelector(".resume-list.active").classList.remove("active");
    list.classList.add("active");

    document.querySelector(".resume-box.active").classList.remove("active");
    resumeBoxs[idx].classList.add("active");
  });
});

// portfolio section when clicking tab-list
portfolioLists.forEach((list, idx) => {
  list.addEventListener("click", () => {
    document.querySelector(".portfolio-list.active").classList.remove("active");
    list.classList.add("active");

    document.querySelector(".portfolio-box.active").classList.remove("active");
    portfolioBoxs[idx].classList.add("active");
  });
});

// visibility for contact section when reloading (cube reloading animation)
setTimeout(() =>{
  sections[4].classList.remove('active');
}, 1500);

// typing text
const textElement = document.getElementById("typing-text");
const word = "FRONTEND DEVELOPER";
let index = 0;
let isDeleting = false;
function type() {
  if (!isDeleting) {
    textElement.textContent = word.substring(0, index + 1);
    index++;
    if (index === word.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 1500); // Pause before deleting
      return;
    }
  } else {
    textElement.textContent = word.substring(0, index - 1);
    index--;
    if (index === 0) {
      isDeleting = false;
      setTimeout(type, 2000); // 2s delay before typing again
      return;
    }
  }
  setTimeout(type, 100); // Typing/deleting speed
}
type();