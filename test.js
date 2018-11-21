(function (){
    console.log('A');
    (function(){
        console.log('B');
        (function(){
            console.log('C');
            (function(){
                console.log('D');
            })();
        })();
    })();
})();