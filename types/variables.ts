// Type Annotations

let movieTitle: string = "Amadeus";
movieTitle = "Arrial";
// movieTitle = 9;

// ************Type Inference ************** // --- where typscript assigns variable types automatically
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
tvShow = false;

let isFunny = false;
isFunny = true;
isFunny = "asd";


//*****ANY TYPE******// -- and escape for type checking / turns off type checking
let thing: any = 'hello';
thing = 1;
thing = false;
