//手写一个Promise.all

Promise.myAll = function(iter){
    let res, rej
    const p = new Promise((resolve,reject)=>{
        res = resolve
        rej = reject
    })
    let count = 0
    let fulfilled = 0
    const result = []
    for (const item of iter){
        const i = count
        Promise.resolve(item).then(data => {
            result[i] = data
            fulfilled ++
            if(fulfilled === count){
                res(result)
            }
        }, rej)
        count ++
    }
    if(count === 0){res(result)}
    return p
}

Promise.myAll([1,2,3,4]).then(res => console.log(res))