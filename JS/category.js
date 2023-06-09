let gameList = document.querySelectorAll('.games-list');
let gameCards = document.querySelectorAll('.game-Cards .game-card');

for (let i = 0; i < gameList.length; i++) {
    gameList[i].addEventListener('click', function () {
        // Remove active class from all gameList items
        for (let j = 0; j < gameList.length; j++) {
            gameList[j].classList.remove('active');
        }
        // Add active class to the selected gameList item
        this.classList.add('active');

        let filter = this.getAttribute('data-filter');

        // Show or hide gameCards depending on filter
        for (let k = 0; k < gameCards.length; k++) {
            if (filter === 'all' || gameCards[k].getAttribute('data-item') === filter) {
                gameCards[k].style.display = 'block';
            } else {
                gameCards[k].style.display = 'none';
            }
        }
    })
}
