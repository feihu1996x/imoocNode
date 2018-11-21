var pet = {
    words: '...',
    speak(content){
        console.log(content + ' ' + this.words);
    },
};

var dog = {
    words: '汪汪汪',
};

pet.speak('hello,');
pet.speak.call(dog, 'hello,');

