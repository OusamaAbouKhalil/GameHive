const afterTheFallBtn = document.getElementById("after-the-fall-read-more");
const crystalQuestBtn = document.getElementById("Crystal-Quest-read-more");
// Get the popup element
const popup = document.getElementById("popup-1");
const popup1 = document.getElementById("popup-2");

const closeBtn = document.querySelector('.close-btn');

// Show the popup when the "Read More" button is clicked
afterTheFallBtn.addEventListener("click", () => {
    // Show the popup
    popup.style.display = "block";
});
crystalQuestBtn.addEventListener("click", () => {
    // Show the popup1
    popup1.style.display = "block";
});

// Hide the popup when the "Close" button is clicked
closeBtn.addEventListener('click',()=> {
    popup.style.display = 'none';
});
// Hide the popup when the user clicks outside of it
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
