

// about aiim start
const cards = document.querySelectorAll(".about-card");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

cards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = `0.6s ease ${index * 0.2}s`;
});

// about aiim end
// testimonials code
const cards = document.querySelectorAll(".testimonial-card");

cards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";

  setTimeout(() => {
    card.style.transition = "0.6s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, index * 300);
});
// testimonials code end

// students placed start

const cards = document.querySelectorAll(".company-card");

cards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";

  setTimeout(() => {
    card.style.transition = "0.6s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, index * 200);
});
// students placed end

// teachers start
const teacherCards = document.querySelectorAll(".teacher-card");

teacherCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";

  setTimeout(() => {
    card.style.transition = "0.6s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, index * 200);
});
// teachers end

// Meet ceo start
const ceoImage = document.querySelector(".ceo-image");
const ceoContent = document.querySelector(".ceo-content");

window.addEventListener("load", () => {
  ceoImage.style.opacity = "0";
  ceoImage.style.transform = "translateX(-50px)";

  ceoContent.style.opacity = "0";
  ceoContent.style.transform = "translateX(50px)";

  setTimeout(() => {
    ceoImage.style.transition = "0.8s ease";
    ceoImage.style.opacity = "1";
    ceoImage.style.transform = "translateX(0)";
  }, 200);

  setTimeout(() => {
    ceoContent.style.transition = "0.8s ease";
    ceoContent.style.opacity = "1";
    ceoContent.style.transform = "translateX(0)";
  }, 400);
});
// meet ceo end


// FAQ START HERE 

document.addEventListener("DOMContentLoaded", () => {

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {

    item.addEventListener("toggle", () => {

      if(item.open){

        faqItems.forEach((faq) => {

          if(faq !== item){

            faq.removeAttribute("open");

          }

        });

      }

    });

  });

});
// FAQ END HERE 

