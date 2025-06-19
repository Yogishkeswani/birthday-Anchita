function startSurprise() {
    const balloonColors = ["#ff69b4", "#ffb6c1", "#f0e68c", "#add8e6", "#98fb98"];
    const container = document.getElementById("balloons");
  
    for (let i = 0; i < 30; i++) {
      const balloon = document.createElement("div");
      balloon.classList.add("balloon");
      balloon.style.left = Math.random() * 100 + "vw";
      balloon.style.animationDuration = (4 + Math.random() * 4) + "s";
      balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
      container.appendChild(balloon);
  
      setTimeout(() => balloon.remove(), 8000);
    }
  
    alert("Happy Birthday, Anchita! You’re always in my thoughts 🎈");
  }
  