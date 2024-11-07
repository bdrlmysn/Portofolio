const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("div");
  
    burger.addEventListener("click", () => {
      // Toggle nav list and burger class
      navLists.classList.toggle("nav-active");
      burger.classList.toggle("toggle-burger");
    });
  };
  
  navSlide();