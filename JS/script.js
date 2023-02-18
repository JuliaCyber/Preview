"use strict"
let numderOfFilms 

function start () {
    numderOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

    while (numderOfFilms == '' || numderOfFilms == null || isNaN(numderOfFilms)) {
        numderOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
    }
}
start()


const personalMovieDB = {
    count: numderOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt ( "Один из послeдниx просмотренных фильмов?", ""),
             b = prompt ("На сколько оцените его", "");
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else { 
            console.log ('Error');
            i--;
        }  
}
}

rememberMyFilms (); 

if (personalMovieDB.count < 10) { 
    console.log('Просмотрено довoльно мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) { 
    console.log('Вы классический зритель')
} else if (personalMovieDB.count >= 30) { 
    console.log('Вы киноман')
} else { 
    console.log('Произошла ошибка')
}


function detectPersonalLevel () {
    if (personalMovieDB.count < 10) { 
        console.log('Просмотрено довoльно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) { 
        console.log('Вы классический зритель')
    } else if (personalMovieDB.count >= 30) { 
        console.log('Вы киноман')
    } else { 
        console.log('Произошла ошибка')
    } 
}
detectPersonalLevel()

function showMyDB (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);    
}
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
for (let i = 1; i <=3; i++ ) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`)
     personalMovieDB.genres [i - 1] = genre;
}
}

writeYourGenres();

console.log(personalMovieDB);



