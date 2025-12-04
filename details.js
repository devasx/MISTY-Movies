const movies = [
    [
        0, 
        "Bahubali: The Beginning", 
        "https://m.media-amazon.com/images/M/MV5BM2YxZThhZmEtYzM0Yi00OWYxLWI4NGYtM2Y2ZDNmOGE0ZWQzXkEyXkFqcGc@._V1_.jpg", 
        "3NQRhE772b0", 
        "A child from the Mahishmati kingdom is raised by tribal people and one day learns about his royal heritage, his father's bravery in battle and a mission to overthrow the incumbent ruler.", 
        "S.S. Rajamouli",
        "Prabhas, Rana Daggubati, Anushka Shetty, Tamannaah Bhatia",
        "U/A",
        "Action, Drama",
        "2h 39m"
    ],
    [
        1, 
        "RRR", 
        "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg", 
        "NgBoMJy386M", 
        "A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart an inspirational path of freedom against the despotic rulers.", 
        "S.S. Rajamouli",
        "N.T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt",
        "U/A",
        "Action, Drama",
        "3h 2m"
    ],
    [
        2, 
        "The Dark Knight", 
        "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg", 
        "EXeTwQWrcwY", 
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", 
        "Christopher Nolan",
        "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "PG-13",
        "Action, Crime, Drama",
        "2h 32m"
    ],
    [
        3, 
        "Inception", 
        "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg", 
        "YoHD9XEInc0", 
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", 
        "Christopher Nolan",
        "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "PG-13",
        "Action, Sci-Fi, Thriller",
        "2h 28m"
    ],
    [
        4, 
        "Avengers: Endgame", 
        "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg", 
        "TcMBFSGVi1c", 
        "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.", 
        "Anthony Russo, Joe Russo",
        "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson",
        "PG-13",
        "Action, Adventure, Drama",
        "3h 1m"
    ],
    [
        5, 
        "3 Idiots", 
        "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg", 
        "K0eDlFX9GMc", 
        "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'.", 
        "Rajkumar Hirani",
        "Aamir Khan, Kareena Kapoor, R. Madhavan, Sharman Joshi",
        "U/A",
        "Comedy, Drama",
        "2h 50m"
    ],
    [
        6, 
        "Interstellar", 
        "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg", 
        "zSWdZVtXT7E", 
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth becomes uninhabitable.", 
        "Christopher Nolan",
        "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine",
        "PG-13",
        "Adventure, Drama, Sci-Fi",
        "2h 49m"
    ],
    [
        7, 
        "Parasite", 
        "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png", 
        "5xH0HfJHsaY", 
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.", 
        "Bong Joon Ho",
        "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik",
        "R",
        "Thriller, Drama, Comedy",
        "2h 12m"
    ],
    [
        8, 
        "Spider-Man: Into the Spider-Verse", 
        "https://upload.wikimedia.org/wikipedia/en/f/fa/Spider-Man_Into_the_Spider-Verse_poster.png", 
        "g4Hbz2jLxvQ", 
        "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.", 
        "Bob Persichetti, Peter Ramsey, Rodney Rothman",
        "Shameik Moore, Jake Johnson, Hailee Steinfeld, Mahershala Ali",
        "PG",
        "Animation, Action, Adventure",
        "1h 57m"
    ],
    [
        9, 
        "Dangal", 
        "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg", 
        "x_7YlGv9u1g", 
        "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.", 
        "Nitesh Tiwari",
        "Aamir Khan, Sakshi Tanwar, Fatima Sana Shaikh, Sanya Malhotra",
        "U",
        "Biography, Sports, Drama",
        "2h 41m"
    ]
];


const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id');

let title = document.getElementById("title");
let rating = document.getElementById("rating");
let length = document.getElementById("length");
let desc = document.getElementById("desc");
let director = document.getElementById("director");
let actors = document.getElementById("actors");
let genre = document.getElementById("genre");
let trailer = document.getElementById("trailer");

if (movies[id]){
    title.textContent = movies[id][1];
    rating.textContent = movies[id][7];
    length.textContent = movies[id][9];
    desc.textContent = movies[id][4];
    director.textContent = movies[id][5];
    actors.textContent = movies[id][6];
    genre.textContent = movies[id][8];
    trailer.src = `https://www.youtube.com/embed/${movies[id][3]}?autoplay=1&mute=1`;
}
else{
    title.textContent = "N/A";
    rating.textContent ="N/A";
    length.textContent = "N/A";
    desc.textContent = "N/A";
    director.textContent ="N/A";
    actors.textContent = "N/A";
    genre.textContent = "N/A";
    trailer.src = `https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0`;
}

let pe = document.getElementById("parent")

for (let i = 0; i < movies.length; i++){
    if (id == i){
        continue;
    }
    let dp = document.createElement("div");
    dp.classList.add("flex", "justify-around", "items-start", "ml-12", "mt-10");
    dp.id = movies[i][0].toString();
    pe.appendChild(dp);

    let dc1 = document.createElement("div");
    dc1.classList.add("rounded-2xl", "bg-zinc-700", "h-[410px]", "w-[250px]");
    dp.appendChild(dc1);

    let dc1c = document.createElement("div");
    dc1c.classList.add("h-[300px]");
    dc1.appendChild(dc1c);

    let img1 = document.createElement("img");
    img1.src = movies[i][2];
    img1.classList.add("p-2", "h-full", "w-full", "rounded-2xl");
    dc1c.appendChild(img1);

    let p1 = document.createElement("p");
    p1.classList.add("text-center", "text-[20px]");
    p1.textContent = movies[i][1];
    dc1.appendChild(p1);

    let bu = document.createElement("button");
    bu.classList.add("rounded-2xl", "mt-1", "text-[18px]", "bg-gray-600", "w-[230px]", "py-1", "mx-3", "hover:bg-gray-500");
    bu.textContent = "Learn More";
    dc1.appendChild(bu);

    bu.onclick = function(){
        let newWind = window.open(`details.html?id=${i}`);

        newWind.onload = function(){
            let title = newWind.document.getElementById("title");
            let rating = newWind.document.getElementById("rating");
            let length = newWind.document.getElementById("length");
            let desc = newWind.document.getElementById("desc");
            let director = newWind.document.getElementById("director");
            let actors = newWind.document.getElementById("actors");
            let genre = newWind.document.getElementById("genre");
            let trailer = newWind.document.getElementById("trailer");

            
            title.textContent = movies[i][1];
            rating.textContent = movies[i][7];
            length.textContent = movies[i][9];
            desc.textContent = movies[i][4];
            director.textContent = movies[i][5];
            actors.textContent = movies[i][6];
            genre.textContent = movies[i][8];
            trailer.src = `https://www.youtube.com/embed/${movies[i][3]}?autoplay=1&mute=1`;
            
        }
    }

}

