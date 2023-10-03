const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navi-links");
  const navLinks = document.querySelectorAll(".navi-links li");

  burger.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");

    //animation links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    //burguer animation
    burger.classList.toggle("toggle");
  });
};

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("fixed", window.scrollY > 0);
});

navSlide();

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.5");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 0.5 });
tl.fromTo(".landing", { opacity: 0 }, { opacity: 1, duration: 2 });


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();