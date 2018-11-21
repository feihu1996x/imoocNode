var globalVariable = 'This is global variable';

function globalFunction(){
    var localVariable = 'This is local variable';
    
    console.log('can visit global variable:', globalVariable);
    console.log('can visit local variable:', localVariable);

    globalVariable = "This is changed global variable";
    console.log('can change global variable', globalVariable);

    (function (){
        var innerLocalVariable = 'This is inner local variable';
        console.log('can visit global variable:', globalVariable);
        console.log('can visit local variable:', localVariable);
        console.log('can visit local variable:',innerLocalVariable);
    })();
}

globalFunction();