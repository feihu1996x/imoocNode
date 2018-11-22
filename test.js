let ajax=function(){
    console.log('执行2');
    // resolve参数表示要执行下一步操作
    // reject参数表示要中断当前操作
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            resolve()
        }, 1000);
    })
};

let res = ajax().then(function(){
    console.log('promise','timeout2');
})

console.log(res);