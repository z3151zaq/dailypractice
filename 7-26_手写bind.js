// 手写bind方法，可以使用call, apply

Function.prototype.myBind = function(ctx){
    const fn = this
    // 返回新的函数
    return function(){
        return fn.apply(ctx, arguments)
    }
}

function method(a,b){
    console.log(this,a,b)
    return a + b
}

const newMethod1 = method.bind({})
console.log(newMethod1(1,2))
const newMethod2 = method.myBind({})
console.log(newMethod2(1,2))