/****************Object Types****************/
// Object type annotations //
//-- parameters
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "Sankara" });
//--object as variables type
var coordinate = { x: 34, y: 2 };
//--return type annotation
var randomCoordinate = function () {
    return { x: Math.random(), y: Math.random() };
};
/********************Excess Properties**********************/
//printName({ first: "Henry", last: "Amusah", age: 30 });
/*
  in the code above, the third arguement would have
  been ignored in Js but not TS however
  the approach below works...
  it will just check and select the ones
  important
*/
var singer = { first: "Henry", last: "Jagger", age: 30 };
printName(singer);
/*************** Creating Type Aliases ****************/
// making reusable types
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var mySong = {
    title: 'Adagio molto e cantabile',
    artist: 'Beethoven',
    numStreams: 9773323,
    credits: {
        producer: 'Henry Amusah',
        writer: 'Ludwig Van Beethoven'
    }
};
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
console.log();
