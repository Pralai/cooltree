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

function createLightning() {
  const svg = document.querySelector(".lightning-svg");
  svg.innerHTML = "";

  const startX = Math.random() * window.innerWidth;
  let x = startX;
  let y = 0;

  let path = `M ${x} ${y}`;

  // main bolt
  for (let i = 0; i < 20; i++) {
    x += (Math.random() - 0.5) * 40; // zig zag
    y += Math.random() * 40;

    path += ` L ${x} ${y}`;

    // 🌿 create branches randomly
    if (Math.random() > 0.7) {
      createBranch(svg, x, y);
    }
  }

  const bolt = document.createElementNS("http://www.w3.org/2000/svg", "path");
  bolt.setAttribute("d", path);
  bolt.setAttribute("class", "lightning-path");

  svg.appendChild(bolt);

  // trigger animation
  setTimeout(() => bolt.classList.add("active"), 10);
}

function createBranch(svg, startX, startY) {
  let x = startX;
  let y = startY;

  let path = `M ${x} ${y}`;

  for (let i = 0; i < 8; i++) {
    x += (Math.random() - 0.5) * 30;
    y += Math.random() * 25;

    path += ` L ${x} ${y}`;
  }

  const branch = document.createElementNS("http://www.w3.org/2000/svg", "path");
  branch.setAttribute("d", path);
  branch.setAttribute("class", "lightning-path");

  svg.appendChild(branch);

  setTimeout(() => branch.classList.add("active"), 10);
}

function triggerLightning() {
  createLightning();

  const next = Math.random() * 6000 + 3000;
  setTimeout(triggerLightning, next);
}

window.onload = () => {
  triggerLightning();
};

function createLightning() {
  const svg = document.querySelector(".lightning-svg");
  if (!svg) return;

  svg.innerHTML = "";

  let x = Math.random() * window.innerWidth;
  let y = 0;

  let path = `M ${x} ${y}`;

  for (let i = 0; i < 25; i++) {
    x += (Math.random() - 0.5) * 60;
    y += Math.random() * 35;

    path += ` L ${x} ${y}`;

    // branches (makes it look like roots 🌿⚡)
    if (Math.random() > 0.7) {
      let bx = x;
      let by = y;
      let branch = `M ${bx} ${by}`;

      for (let j = 0; j < 5; j++) {
        bx += (Math.random() - 0.5) * 30;
        by += Math.random() * 20;
        branch += ` L ${bx} ${by}`;
      }

      const branchPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      branchPath.setAttribute("d", branch);
      branchPath.setAttribute("class", "lightning-path");

      svg.appendChild(branchPath);

      setTimeout(() => branchPath.classList.add("active"), 10);
    }
  }

  const mainBolt = document.createElementNS("http://www.w3.org/2000/svg", "path");
  mainBolt.setAttribute("d", path);
  mainBolt.setAttribute("class", "lightning-path");

  svg.appendChild(mainBolt);

  setTimeout(() => mainBolt.classList.add("active"), 10);
}

// random thunder timing ⛈️
setInterval(() => {
  createLightning();
}, Math.random() * 4000 + 3000);
