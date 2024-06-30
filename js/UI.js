export class ui {
    constructor(key, api) {
        this.key = key;
        this.api = api;
        this.games = [];
    }

    async getGames() {
        let options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${this.key}`,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let myData = await fetch(`${this.api}`, options);
        let response = await myData.json();
        this.games = response;
        this.displayGames();
    }

    displayGames() {
        let cartuna1 = '';
        for (let i = 0; i < this.games.length; i++) {
            cartuna1 += `
                <div class="col-lg-3">
                    <a href="#" class="card text-decoration-none link5" data-id="${this.games[i].id}">
                        <img src="${this.games[i].thumbnail}" class="card-img-top m-auto mt-2" alt="...">
                        <div class="card-body d-flex justify-content-between">
                            <h5 class="card-title text-white">${this.games[i].title}</h5>
                            <button type="button" class="btn text-white">free</button>
                        </div>    
                        <p class="card-text text-white text-center">${this.games[i].short_description}</p>
                        <div class="card-footer d-flex justify-content-between">
                            <p class="text-white rounded-3 bg-dark p-1">${this.games[i].platform}</p>
                            <p class="text-white rounded-3 bg-dark p-1">${this.games[i].genre}</p>
                        </div>
                    </a>
                </div>`;
        }
        document.getElementById('demo1').innerHTML = cartuna1;

        document.querySelectorAll('.link5').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                let gameId = link.getAttribute('data-id');
                this.getGameDetails(gameId);
            });
        });
    }

    async getGameDetails(id) {
        let options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key':`635c1a3e93msh583dfde5e2e67b5p1e2f53jsn239b2adc18a4`,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let myData = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        let response = await myData.json();
        this.displayDetails(response);
    }

    displayDetails(game) {
        let cartuna2 = `
            <div class="col-lg-6">
                <div class="items2">
                    <h2 class="text-white pb-5">Details Game</h2>
                    <img src="${game.thumbnail}" alt="">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="items2">
                    <h2 class="text-white pb-5">Title: ${game.title}</h2>
                    <p class="text-white">Category: <span class="text-bg-info rounded-2 fw-bolder">${game.genre}</span></p>
                    <p class="text-white">Platform: <span class="text-bg-info rounded-2 fw-bolder">${game.platform}</span></p>
                    <p class="text-white">Status: <span class="text-bg-info rounded-2 fw-bolder">live</span></p>
                    <p class="text-white">${game.description}</p>
                    <button type="button" class="btn text-white bg-transparent border border-warning">Show Game</button>
                </div>
            </div>`;
        document.getElementById('demo2').innerHTML = cartuna2;

        document.querySelector('.nav').classList.add('d-none');
        document.querySelector('.games').classList.add('d-none');
        document.querySelector('.details').classList.remove('d-none');
    }
}
