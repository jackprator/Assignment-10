// the array of photos
var imgArray = [
    'images/tree1.jpg',
    'images/tree2.jpg',
    'images/tree3.jpg',
    'images/tree4.jpg',
    'images/tree5.jpg',
    'images/tree6.jpg',
    'images/tree7.jpg',
    'images/tree9.jpg'
  ]

// designate the div
const div = document.querySelector('#treeArray img');

// the event listener
div.onclick = () => {
  // get a new random number
    let num = Math.floor(Math.random() * imgArray.length);
    div.setAttribute('src',
    imgArray[num]);
}

// JS 2
// designate elements to be used
const image = document.querySelector('#treeTilt img');

image.onmouseenter = (e) => {
	// change image tilt by changing a CSS class
   e.target.classList.remove('rotate-right');
   e.target.classList.add('rotate-left');
};
image.onmouseleave = (e) => {
// change image tilt back by changing a CSS class
   e.target.classList.add('rotate-right');
   e.target.classList.remove('rotate-left');
};
