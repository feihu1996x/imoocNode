function Pet(words){
    this.words = words;
    this.speak = function(){
        console.log(this.words);
    };
}

function Dog(words){
    Pet.call(this, words);
}

var dog = new Dog('汪汪汪~');

dog.speak();