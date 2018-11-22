var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

// life.setMaxListeners(11);

// 同一个事件的监听器默认最多只能有10个

// if(life.emit('求安慰', '汉子')){
//     console.log('求安慰事件正在被监听');
// };

function water(who){
    console.log('给' + who + '倒水');
}

life.on('求安慰', water);

life.on('求安慰', function(who){
    console.log('给 ' + who + ' 倒水1');
});

life.on('求安慰', function(who){
    console.log('给 ' + who + ' 倒水2');
});

life.on('求安慰', function(who){
    console.log('给 ' + who + ' 倒水3');
});

life.on('求安慰', function(who){
    console.log('给 ' + who + ' 倒水4');
});

life.on('求安慰', function(who){
    console.log('给 ' + who + ' 倒水5');
});

life.on('求安慰', function(who){
    console.log('给 ' + who + ' 倒水6');
});

life.on('求安慰', function(who){
    console.log('给 ' + who + ' 倒水7');
});

life.on('求安慰', function(who){
    console.log('给 ' + who + ' 倒水8');
});

life.on('求安慰', function(who){
    console.log('给 ' + who + ' 倒水9');
});

life.on('求安慰', function(who){
    console.log('给 ' + who + ' 倒水10');
});

life.on('求溺爱', function(who){
    console.log('给 ' + who + ' 交工资');
});

life.on('求安慰', function(who){
    console.log('给 ' + who + ' 倒水11');
});

life.removeListener('求安慰', water);

console.log(life.listeners('求安慰').length);
console.log(EventEmitter.listenerCount(life, '求溺爱'));
console.log(EventEmitter.listenerCount(life, '求安慰'));
// console.log(life.listeners().length);

// life.removeAllListeners();
life.removeAllListeners('求安慰');

console.log(EventEmitter.listenerCount(life, '求安慰'));
console.log(EventEmitter.listenerCount(life, '求溺爱'));

if(life.emit('求安慰', '汉子')){
    console.log('求安慰事件正在被监听');
};

if(life.emit('求溺爱', '妹子')){
    console.log('求溺爱事件正在被监听');
};

if(life.emit('求玩坏', '汉子')){
    console.log('求玩坏事件正在被监听');
};