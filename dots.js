const crew = [
  {
    "name": "Douglas Hurley",
    "images": {
      "png": "./assets/crew/image-douglas-hurley.png",
      "webp": "./assets/crew/image-douglas-hurley.webp"
    },
    "role": "Commander",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    "name": "Mark Shuttleworth",
    "images": {
      "png": "./assets/crew/image-mark-shuttleworth.png",
      "webp": "./assets/crew/image-mark-shuttleworth.webp"
    },
    "role": "Mission Specialist",
    "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    "name": "Victor Glover",
    "images": {
      "png": "./assets/crew/image-victor-glover.png",
      "webp": "./assets/crew/image-victor-glover.webp"
    },
    "role": "Pilot",
    "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    "name": "Anousheh Ansari",
    "images": {
      "png": "./assets/crew/image-anousheh-ansari.png",
      "webp": "./assets/crew/image-anousheh-ansari.webp"
    },
    "role": "Flight Engineer",
    "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
];




const dotList = document.querySelector('[role="dotlist"]');
const dots = dotList.querySelectorAll('[role="dot"]');

dots.forEach(dot => {
  dot.addEventListener("click", ChangeContent)
});

dotList.addEventListener('keydown', ChangeTabFocus);

let dotFocus = 0;
function ChangeTabFocus (e) {
  const keydownRight = 39;
  const keydownLeft = 37;

  if(e.keyCode === keydownRight || e.keyCode === keydownLeft) {
    dots[dotFocus].setAttribute("dotindex", -1);
  }

  if (e.keyCode === keydownRight) {
     if(dotFocus >= dots.length - 1) {
       dotFocus = 0;
     } else {
       dotFocus++;
     }
 }

 if (e.keyCode === keydownLeft) {
   if(dotFocus <= 0) {
     dotFocus = dots.length - 1;
   } else {
     dotFocus--;
   }

 }

 dots[dotFocus].setAttribute("dotindex", 0);
 dots[dotFocus].focus();
}

function ChangeContent(e) {
  const dotNumber = e.target.getAttribute("id");
  dots.forEach(dot => {dot.setAttribute("aria-selected", false)});
  dots[dotNumber].setAttribute("aria-selected", "true");
  
  $("#crew-source").attr("srcset", crew[dotNumber].images.webp);
  $("#crew-img").attr("src", crew[dotNumber].images.png);
  $("#crew-name").html(crew[dotNumber].name);
  $("#crew-role").html(crew[dotNumber].role);
  $("#crew-bio").html(crew[dotNumber].bio);
}
