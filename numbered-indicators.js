const technologys = [
  {
    "name": "Launch vehicle",
    "images": {
      "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
      "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
    },
    "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  },
  {
    "name": "Spaceport",
    "images": {
      "portrait": "./assets/technology/image-spaceport-portrait.jpg",
      "landscape": "./assets/technology/image-spaceport-landscape.jpg"
    },
    "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  },
  {
    "name": "Space capsule",
    "images": {
      "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
      "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
    },
    "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
];


const numberList = document.querySelector('[role="numberedlist"]');
const numbers = numberList.querySelectorAll('[role="number"]');

numbers.forEach(number => {
  number.addEventListener("click", ChangeContent)
});

numberList.addEventListener('keydown', ChangeTabFocus);

let tabFocus = 0;
function ChangeTabFocus (e) {
  const keydownRight = 39;
  const keydownLeft = 37;

  if(e.keyCode === keydownRight || e.keyCode === keydownLeft) {
    numbers[tabFocus].setAttribute("tabindex", -1);
  }

  if (e.keyCode === keydownRight) {
     if(tabFocus >= numbers.length - 1) {
       tabFocus = 0;
     } else {
       tabFocus++;
     }
 }

 if (e.keyCode === keydownLeft) {
   if(tabFocus <= 0) {
     tabFocus = numbers.length - 1;
   } else {
     tabFocus--;
   }

 }

 numbers[tabFocus].setAttribute("tabindex", 0);
 numbers[tabFocus].focus();
}

function ChangeContent(e) {
  const tabNumber = e.target.getAttribute("id");
  numbers.forEach(tab => {tab.setAttribute("aria-selected", false)});
  numbers[tabNumber].setAttribute("aria-selected", true);

// if (window.matchMedia("(max-width: 45em)").matches) {
//   $("#technology-img").attr("src", technologys[tabNumber].images.landscape);
// } else {
  $("#technology-img").attr("src", technologys[tabNumber].images.portrait);
// }

  $("#technology-name").html(technologys[tabNumber].name);
  $("#technology-description").html(technologys[tabNumber].description);
}
