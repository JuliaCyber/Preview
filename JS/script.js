"use strict"
const numderOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

const personalMovieDB = {
    count: numderOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const a = prompt ( "Один из послeдниx просмотренных фильмов?", "");
const b = prompt ("На сколько оцените его", "");
const c = prompt ( "Один из послeдниx просмотренных фильмов?", "");
const d = prompt ("На сколько оцените его", "");
    

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
