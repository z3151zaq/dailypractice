// 如何实现 (a==1 && a==2) === true

//先调用valueOf，再调用toString
const a = {
    num:1,
    toString(){
        return this.num++
    }
}
console.log(a==1 && a==2)