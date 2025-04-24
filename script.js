// Event Handling 🎈
document.getElementById('clickButton').addEventListener('click', function() {
    alert('Button clicked!');
});

document.getElementById('hoverEffect').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightcoral';
});

document.getElementById('hoverEffect').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'lightblue';
});

// Interactive Elements 🎮
document.getElementById('changeTextButton').addEventListener('click', function() {
    this.innerHTML = "You clicked me!";
});

let imageIndex = 0;
let images = ["img1.jpeg", "img2.jpeg", "img3.jpeg"];
setInterval(function() {
    document.getElementById('slideshow').src = images[imageIndex];
    imageIndex = (imageIndex + 1) % images.length;
}, 2000);

// Form Validation 📋✅
document.getElementById('validationForm').addEventListener('submit', function(event) {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        event.preventDefault();
    } else {
        alert('Form submitted successfully!');
    }
});
