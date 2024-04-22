document.addEventListener("DOMContentLoaded", function () {
  let popupShown = false;
  const secondSection = document.querySelector(".next-section");
  const popup = document.getElementById("popup");
  const popDisplay = document.getElementById("popup-display");
  const rangeSlider = document.getElementById("myRange");
  const doneButton = document.getElementById("doneButton");
  const sections = document.querySelectorAll("section");
  const scrollToSection = (index) => {
    sections[index].scrollIntoView({ behavior: "smooth" });
  };
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.anim', {
    x: -1000, 
    scrollTrigger: {
      trigger: '.anim',
      start: '-700',
      end: '410',
      scrub: true
    }
  });
  
  gsap.to('.anim', {
    x: 700, 
    scrollTrigger: {
      trigger: '.anim',
      start: '410',
      end: '-700',
      scrub: true
    }
  });

  gsap.to('.racism', {
    x: -700, 
    scrollTrigger: {
      trigger: '.racism',
      rotate: '180',
      start: '-230',
      end: '410',
      scrub: true
    }
  });
  
  gsap.to('.racism', {
    x: 700, 
    scrollTrigger: {
      trigger: '.racism',
      rotate: '3600',
      start: '410',
      end: '-230',
      scrub: true
    }
  });

  gsap.to('.march', {
    x: -1000, 
    scrollTrigger: {
      trigger: '.march',
      start: '-700',
      end: '510',
      scrub: 0.33
    }
  });
  
  gsap.to('.march', {
    x: 700, 
    scrollTrigger: {
      trigger: '.march',
      start: '510',
      end: '-700',
      scrub: 0.33
    }
  });

  gsap.to('.walk', {
    x: -1000, 
    scrollTrigger: {
      trigger: '.walk',
      start: '-200',
      end: '910',
      scrub: 0.33
    }
  });
  
  gsap.to('.walk', {
    x: 400, 
    scrollTrigger: {
      trigger: '.walk',
      start: '910',
      end: '-200',
      scrub: 0.33
    }
  });

  gsap.to('.bullet', {
    x: -1000, 
    scrollTrigger: {
      trigger: '.bullet',
      start: '-700',
      end: '910',
      scrub: 0.33
    }
  });
  
  gsap.to('.bullet', {
    x: 400, 
    scrollTrigger: {
      trigger: '.bullet',
      start: '910',
      end: '-700',
      scrub: 0.33
    }
  });

  // gsap.to('.anim-1', {
  //   x: -1000, 
  //   scrollTrigger: {
  //     trigger: '.anim-1',
  //     start: '-800',
  //     end: '100',
  //     scrub: true
  //   }
  // });
  
  // gsap.to('.anim-1', {
  //   x: 100, 
  //   scrollTrigger: {
  //     trigger: '.anim-1',
  //     start: '100',
  //     end: '-800',
  //     scrub: true
  //   }
  // });

  anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 7000,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 3000,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  var textWrapper = document.querySelector('.ml12 .letters-2');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter-2'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .line-2',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml12 .line-2',
    translateX: [0, document.querySelector('.ml12 .letters-2').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml12 .letter-2',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 3000,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml12',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  var textWrapper = document.querySelector('.ml13 .letters-3');
  textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter-3'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml13 .line-3',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.ml13 .line-3',
      translateX: [0, document.querySelector('.ml13 .letters-3').getBoundingClientRect().width + 10],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.ml13 .letter-3',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 3000,
      offset: '-=775',
      delay: (el, i) => 34 * (i+1)
    }).add({
      targets: '.ml13',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !popupShown) {
        popup.style.display = "flex";
        popupShown = true;
        observer.unobserve(entry.target);
      }
    });
  }, options);

  const target = document.querySelector('.next-section');
  observer.observe(target);

  const scrollDownButton = document.querySelector('.scroll-down');
  scrollDownButton.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToSection(1);
    setTimeout(() => {

      if (!popupShown) {
        popup.style.display = "flex";
        popupShown = true;
      }
    }, 1000); 
  });

  for (let i = 0; i < 5; i++) {
    let step = document.createElement("span");
    step.className = "slider-step";
    rangeSlider.parentElement.insertBefore(step, rangeSlider);
  }

  window.addEventListener("scroll", function () {
    const sectionPos = secondSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if (sectionPos < screenPos && !popupShown) {
      popup.style.display = "flex";
    }
  });

  doneButton.addEventListener("click", function () {
    popDisplay.innerHTML =
      "<p><b>That's amazing, see this website to learn more in an interactive and fun way.</b></p>";
    popupShown = true;
    setTimeout(function () {
      popup.style.display = "none";
    }, 2000);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const knowledgeRange = document.getElementById("knowledgeRange");
  const doneButton = document.getElementById("doneButton");

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  doneButton.addEventListener("click", function () {
    const knowledgeLevel = parseInt(knowledgeRange.value);

    switch (knowledgeLevel) {
      case 0:
        scrollToSection("next-section");
        break;
      case 1:
        scrollToSection("section-5");
        break;
      case 2:
        scrollToSection("section-12");
        break;
    }

    popup.style.display = "none";
  });
});

function toggleChatDialog() {
  var chatDialog = document.querySelector(".chat-dialog");
  var chatContent = document.querySelector(".chat-content");

  if (chatDialog.classList.contains("expanded")) {
    chatDialog.style.height = "";
    chatDialog.classList.remove("expanded");
  } else {
    var randomFact = "I was deeply aware of my weaknesses as a human being in spite of everyone calling me a Mahatma and strove all my life to improve myself. I was absolutely honest with myself and wrote extensively about it. I even chose the title 'My Experiments with Truth' for my autobiography.";
    chatContent.innerHTML = "<p>" + randomFact + "</p>";

    chatDialog.style.height = "auto";

    var chatDialogHeight = chatDialog.offsetHeight;

    var maxHeight = window.innerHeight - 200;

    if (chatDialogHeight > maxHeight) {
      chatDialog.style.height = maxHeight + "px";
      chatDialog.style.overflowY = "auto";
    }

    chatDialog.classList.add("expanded");
  }
}

range.oninput = () => {
  document.body.style.setProperty("--pos", range.value + "%");
  
  const leftText = document.querySelector('.left-text');
  const rightText = document.querySelector('.right-text');
  
  if (range.value < 50) {
    leftText.style.opacity = 0;
    rightText.style.opacity = 1;
  } else {
    leftText.style.opacity = 1;
    rightText.style.opacity = 0;
  }
};

function toggleChatDialogSection6() {
  var chatDialog = document.querySelector(".chat-dialog-section-6");
  var chatContent = document.querySelector(".chat-content-section-6");

  if (chatDialog.classList.contains("expanded")) {
    chatDialog.style.height = "";
    chatDialog.classList.remove("expanded");
  } else {
    var randomFact = "During my time in South Africa, I faced numerous instances of racial discrimination and prejudice. This included me going to jail several times, getting abused and even beaten up at a point. These experiences deeply shaped my philosophy of nonviolent resistance and my commitment to fighting for the rights of the oppressed.";
    chatContent.innerHTML = "<p>" + randomFact + "</p>";

    chatDialog.style.height = "auto";

    var chatDialogHeight = chatDialog.offsetHeight;

    var maxHeight = window.innerHeight - 200;

    if (chatDialogHeight > maxHeight) {
      chatDialog.style.height = maxHeight + "px";
      chatDialog.style.overflowY = "auto";
    }

    chatDialog.classList.add("expanded");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const columns = document.querySelectorAll(".column");

  columns.forEach(function(column) {
    const knowMoreBtn = column.querySelector(".know-more-btn");
    const backBtn = column.querySelector(".back-btn");
    const overlayColor = column.getAttribute("data-color");

    column.style.setProperty("--overlay-color", overlayColor);

    knowMoreBtn.addEventListener("click", function() {
      column.classList.add("active");
    });

    backBtn.addEventListener("click", function() {
      column.classList.remove("active");
    });
  });
});