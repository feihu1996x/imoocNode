// 在node.js的单线程模型中，我们可以通过回调函数实现异步编程

var c = 0;
function printIt(){
    console.log(c);
}
function plus(callback){
    setTimeout(() => {
        c++;
        callback();
    }, 1000);
}

plus(printIt);
console.log("game over?");