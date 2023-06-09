const readMoreBtn = document.querySelector('.read-more-btn1');
const popup = document.querySelector('.popup1');
const closeBtn = document.querySelector('.close-btn');

// Show the popup when the "Read More" button is clicked
readMoreBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

// Hide the popup when the "Close" button is clicked
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Hide the popup when the user clicks outside of it
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
