// 手写apply方法，并且不能使用bind、call，比较简单，掌握了call的写法就不难

Function.prototype.myApply = function(ctx, args){
    ctx = (ctx === null || ctx === undefined) ? globalThis : Object(ctx)
    const key = Symbol('temp')
    Object.defineProperty(ctx, key, {enumerable:false,value:this})
    const result = ctx[key](...args)
    delete ctx[key]
    return result
}

function method(a,b){
    console.log(this,a,b)
    return a+b
}

console.log("myapply",method.myApply({},[1,2]))
console.log("apply",method.apply({},[1,2]))


