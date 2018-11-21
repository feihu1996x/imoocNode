var pet = {
    words: '...',
    speak(){
        console.log(this.words);
        console.log(this === pet);
    },
};

pet.speak();

(function (words){
    this.words = words;
    console.log(this.words);
    console.log(this === global);
})('...');

function Pet(words){
    this.words = words;
    this.speak = function(){
        console.log(this.words);
        console.log(this instanceof Pet);
    };
}

var cat = new Pet('I am just a cat!');

cat.speak();