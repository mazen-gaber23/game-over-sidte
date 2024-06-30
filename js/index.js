import { ui } from './UI.js';
import { details } from './details.js';
let gameLink;
let allLinks=document.querySelectorAll('.nav a');
allLinks.forEach(link=>{
    link.addEventListener('click',(e)=>{
        allLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
        e.preventDefault();
        gameLink=e.target.innerText;
let display = new ui('761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712', `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${gameLink}`);
display.getGames();
let close=new details();
close.close();
    })
})
let display = new ui('761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712', `https://free-to-play-games-database.p.rapidapi.com/api/games?category=MMORPG`);
display.getGames();
let close=new details();
close.close();





