const images = [
    "#",
    "#",
    "#",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");
image.src = `img/{image}`;

document.body.appendChild(image);