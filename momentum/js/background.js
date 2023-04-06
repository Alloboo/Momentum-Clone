const images = [
    "img/1.jpg",
    "img/2.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
//const bgImage = `url("${chosenImage}")`;
//document.body.style.backgroundImage = bgImage;

const bgImage = document.createElement("img")
bgImage.className = "bgImage"
bgImage.src = `${chosenImage}`;

document.body.appendChild(bgImage);

