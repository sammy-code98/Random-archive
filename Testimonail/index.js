const testimonials = [{
    name: 'Sam Uzor',
    position: 'Devops',
    image: 'add_logo_url',
    text: 'testimonial_text'

}];

// create a variable for each DOM element we want to target
const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = testimonialsContainer.querySelector('.testimonial');
const logo = testimonialsContainer.querySelector('.logo');
const username = testimonialsContainer.querySelector('.username');
const role = testimonialsContainer.querySelector('.role');

// counter
let idx = 1;

function updateTestimonial() {
    let { name, position, photo, text } = testimonials[idx];

    // update dom elements
    testimonial.innerHTML = text;
    username.innerHTML = name;
    RadioNodeList.innerHTML = position;
    logo.src = photo;

    // incrememt counter
    idx++;

    // reset counter when it reaches end of array
    if (idx > testimonials.length - 1) {
        idx = 0;
    }
}
// // Call the updateTestimonial functions each 10000ms / 10s
setInterval(updateTestimonial, 10000);