const destinations = [
  {
    "name": "Moon",
    "images": {
      "png": "./assets/destination/image-moon.png",
      "webp": "./assets/destination/image-moon.webp"
    },
    "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    "distance": "384,400 km",
    "travel": "3 days"
  },
  {
    "name": "Mars",
    "images": {
      "png": "./assets/destination/image-mars.png",
      "webp": "./assets/destination/image-mars.webp"
    },
    "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    "distance": "225 mil. km",
    "travel": "9 months"
  },
  {
    "name": "Europa",
    "images": {
      "png": "./assets/destination/image-europa.png",
      "webp": "./assets/destination/image-europa.webp"
    },
    "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    "distance": "628 mil. km",
    "travel": "3 years"
  },
  {
    "name": "Titan",
    "images": {
      "png": "./assets/destination/image-titan.png",
      "webp": "./assets/destination/image-titan.webp"
    },
    "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    "distance": "1.6 bil. km",
    "travel": "7 years"
  }
];





const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabs.forEach(tab => {
  tab.addEventListener("click", ChangeContent)
});

tabList.addEventListener('keydown', ChangeTabFocus);

let tabFocus = 0;
function ChangeTabFocus (e) {
  const keydownRight = 39;
  const keydownLeft = 37;

  if(e.keyCode === keydownRight || e.keyCode === keydownLeft) {
    tabs[tabFocus].setAttribute("tabindex", -1);
  }

  if (e.keyCode === keydownRight) {
     if(tabFocus >= tabs.length - 1) {
       tabFocus = 0;
     } else {
       tabFocus++;
     }
 }

 if (e.keyCode === keydownLeft) {
   if(tabFocus <= 0) {
     tabFocus = tabs.length - 1;
   } else {
     tabFocus--;
   }

 }

 tabs[tabFocus].setAttribute("tabindex", 0);
 tabs[tabFocus].focus();
}

function ChangeContent(e) {
  const tabNumber = e.target.getAttribute("id");
  tabs.forEach(tab => {tab.setAttribute("aria-selected", false)});
  tabs[tabNumber].setAttribute("aria-selected", true);

  $("#destination-source").attr("srcset", destinations[tabNumber].images.webp);
  $("#destination-img").attr("src", destinations[tabNumber].images.png);
  $("#destination-name").html(destinations[tabNumber].name);
  $("#destination-description").html(destinations[tabNumber].description);
  $("#destination-distance").html(destinations[tabNumber].distance);
  $("#destination-travel").html(destinations[tabNumber].travel);
}
