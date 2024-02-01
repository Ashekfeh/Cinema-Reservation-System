class Details {
    constructor(director, genre, editor, boxOffice, cinematography, synopsis) {
        this.director = director;
        this.genre = genre;
        this.editor = editor;
        this.boxOffice = boxOffice;
        this.cinematography = cinematography;
        this.synopsis = synopsis;
    }
}

class Movie {
    constructor(id, title, releaseYear, details, imageUrl, inTheater) {
        this.id = id;
        this.title = title;
        this.releaseYear = releaseYear;
        this.details = details;
        this.imageUrl = imageUrl;
        this.inTheater = inTheater;
    }

    getMovieInfo() {
        return `${this.title} (${this.releaseYear}) - ${this.details.director}, ${this.details.genre}`;
    }
}

class TheaterClass {
    constructor(name, availableShows) {
        this.name = name;
        this.availableShows = availableShows;
    }

    getShows() {
        return this.availableShows;
    }
}

class Theater {
    constructor(id, name, TheaterClasses) {
        this.id = id;
        this.name = name;
        this.TheaterClasses = TheaterClasses;
    }

    getTheaterClasses() {
        return this.TheaterClasses;
    }

}





const theaters = [
    new Theater(
        1,
        "Aqua Florya AVM",
        [
            new TheaterClass('Gold Class', ['22:00', '00:00', '15:00', '19:00']),
            new TheaterClass('Regular', ['17:00', '20:00', '13:00', '23:30'])
        ],
    ),
    new Theater(
        2,
        "Zorlu Center AVM",
        [
            new TheaterClass('IMAX', ['21:30', '23:00', '02:00']),
            new TheaterClass('Gold Class', ['22:00', '00:00', '15:00', '19:00']),
            new TheaterClass('Regular', ['17:00', '20:00', '13:00', '23:30'])
        ],
    ),
    new Theater(
        3,
        "Marmara Park AVM",
        [
            new TheaterClass('IMAX', ['21:30', '23:00', '02:00']),
            new TheaterClass('Gold Class', ['22:00', '00:00', '15:00', '19:00']),
            new TheaterClass('Regular', ['17:00', '20:00', '13:00', '23:30'])
        ],
    )
]









const seats = [];

const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
const columns = [1, 2, 3, 4, 5, 6, 7];

// Generate seat objects for each row and column
for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < columns.length; j++) {
        const seat = {
            id: (i * columns.length) + (j + 1),
            row: rows[i],
            column: columns[j],
            pricing: 10.99 + (i*10), // Set the pricing as needed
            isReserved: false // Set the initial reserved status as needed
        };
        seats.push(seat);
    }
}






const movies = [
    new Movie(
        1,
        "The Shawshank Redemption",
        1994,
        new Details(
            "Frank Darabont",
            "Drama",
            "Richard Francis-Bruce",
            "$58.3 million",
            "Roger Deakins",
            "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency."
        ),
        "https://www.themoviedb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        true
    ),
    new Movie(
        2,
        "The Godfather",
        1972,
        new Details(
            "Francis Ford Coppola",
            "Crime, Drama",
            "William Reynolds",
            "$245.1 million",
            "Gordon Willis",
            "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
        ),
        "https://www.themoviedb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        true
    ),

    new Movie(
        3,
        "Pulp Fiction",
        1994,
        new Details(
            "Quentin Tarantino",
            "Crime, Drama",
            "Sally Menke",
            "$214 million",
            "Andrzej Sekuła",
            "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
        ),
        "https://www.themoviedb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        true
    ),
    new Movie(
        4,
        "The Dark Knight",
        2008,
        new Details(
            "Christopher Nolan",
            "Action, Crime, Drama",
            "Lee Smith",
            "$1.005 billion",
            "Wally Pfister",
            "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice."
        ),
        "https://www.themoviedb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        false
    ),
    new Movie(
        5,
        "Fight Club",
        1999,
        new Details(
            "David Fincher",
            "Drama",
            "James Haygood",
            "$100.9 million",
            "Jeff Cronenweth",
            "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
        ),
        "https://www.themoviedb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        true
    ),
    new Movie(
        6,
        "Inception",
        2010,
        new Details(
            "Christopher Nolan",
            "Action, Adventure, Sci-Fi",
            "Lee Smith",
            "$829.9 million",
            "Wally Pfister",
            "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
        ),
        "https://www.themoviedb.org/t/p/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
        false
    ),
    new Movie(
        7,
        "The Matrix",
        1999,
        new Details(
            "The Wachowski Brothers",
            "Action, Sci-Fi",
            "Zach Staenberg",
            "$465.3 million",
            "Bill Pope",
            "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
        ),
        "https://www.themoviedb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        true
    ),
    new Movie(
        8,
        "Forrest Gump",
        1994,
        new Details(
            "Robert Zemeckis",
            "Drama, Romance",
            "Arthur Schmidt",
            "$677.9 million",
            "Don Burgess",
            "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold through the perspective of an Alabama man with an IQ of 75."
        ),
        "https://www.themoviedb.org/t/p/original/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        false
    ),
    new Movie(
        9,
        "American Psycho",
        2000,
        new Details(
            "Mary Harron",
            "Drama, Horror, Thriller",
            "Andrew Marcus",
            "$34.3 million",
            "Andrzej Sekuła",
            "A wealthy New York investment banking executive hides his alternate psychopathic ego from his co-workers and friends as he escalates deeper into his violent, hedonistic fantasies."
        ),
        "https://www.themoviedb.org/t/p/original/9uGHEgsiUXjCNq8wdq4r49YL8A1.jpg",
        false
    ),
    new Movie(
        10,
        "The Social Network",
        2010,
        new Details(
            "David Fincher",
            "Biography, Drama",
            "Kirk Baxter",
            "$224.9 million",
            "Jeff Cronenweth",
            "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business."
        ),
        "https://www.themoviedb.org/t/p/original/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
        false
    ),
    new Movie(
        11,
        "Interstellar",
        2014,
        new Details(
            "Christopher Nolan",
            "Adventure, Drama, Sci-Fi",
            "Lee Smith",
            "$677.5 million",
            "Hoyte van Hoytema",
            "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
        ),
        "https://www.themoviedb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        false
    ),
    new Movie(
        12,
        "Eternal Sunshine of the Spotless Mind",
        2004,
        new Details(
            "Michel Gondry",
            "Drama, Romance, Sci-Fi",
            "Valdís Óskarsdóttir",
            "$72.3 million",
            "Ellen Kuras",
            "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories."
        ),
        "https://www.themoviedb.org/t/p/original/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
        false
    ),
    new Movie(
        13,
        "The Grand Budapest Hotel",
        2014,
        new Details(
            "Wes Anderson",
            "Adventure, Comedy, Drama",
            "Barney Pilling",
            "$174.6 million",
            "Robert Yeoman",
            "The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka, and Zero Moustafa, the lobby boy who becomes his most trusted friend."
        ),
        "https://www.themoviedb.org/t/p/original/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
        true
    )
];


const Poster = document.getElementById("poster");
const testTitle = document.getElementById("movie-title");
const testSyn = document.getElementById("synopsis");
const testDir = document.getElementById("director");
const testGenre = document.getElementById("genre");
const testEditor = document.getElementById("editor");
const testBox = document.getElementById("box-office");
const testCin = document.getElementById("cinematography");



const urlParams = new URLSearchParams(window.location.search);
const movieId = parseInt(urlParams.get("id"));

const movie = movies.find(movie => movie.id === movieId);


if (movie) {
    Poster.src = movie.imageUrl;
    testTitle.textContent = movie.title;
    testSyn.textContent = movie.details.synopsis;



    testDir.innerHTML = `<span>director:</span> ${movie.details.director}`;
    testGenre.innerHTML = `<span>genre:</span> ${movie.details.genre}`;
    testEditor.innerHTML = `<span>editor:</span> ${movie.details.editor}`;
    testBox.innerHTML = `<span>box office:</span> ${movie.details.boxOffice}`;
    testCin.innerHTML = `<span>cinematography:</span> ${movie.details.cinematography}`;

}








