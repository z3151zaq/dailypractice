// 手写call方法，并且不能使用bind、apply

Function.prototype.myCall = function(ctx, ...arg){
    // 如果没有制定对象，默认绑定在全局对象，如果是字符串或者数字，则转化为变量对象
    ctx = (ctx === null || ctx === undefined) ? globalThis : Object(ctx)
    // 将原函数挂载至上下文对象，并使用Symbol对象作为键，防止重复
    var key = Symbol('temp')
    // 把原函数挂载在上下文对象上，并使其隐藏不可遍历
    Object.defineProperty(ctx, key, {enumerable:false,value:this})
    // 实现原函数的行为
    var result = ctx[key](...arg)
    // 删掉挂载的原函数
    delete ctx[key]
    // 返回原函数的结果
    return result
}

function method(a,b){
    console.log(this,a,b)
    return a + b
}

method.myCall({},1,2)
method(1,2)
