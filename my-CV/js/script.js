const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index2 <= index ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});

const star1 = document.querySelectorAll(".star1");

star1.forEach((star, index) => {
  star.addEventListener("click", () => {
    star1.forEach((star, index2) => {
      index2 <= index ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});

const star2 = document.querySelectorAll(".star2");
let index2;
star2.forEach((star, index) => {
  console.log(index);
  star.addEventListener("click", () => {
    
    star2.forEach((star, index2) => {
      console.log(index2.valueOf);
      index2 <= index ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});


