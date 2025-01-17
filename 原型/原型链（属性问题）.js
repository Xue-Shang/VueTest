/*
1.读取对象的属性值时：会自动到原型链中查找
2.设置对象的属性值时：不会查找原型链，如果当前对象中没有此属性，直接添加此属性并设置其值
3.方法一般定义在原型中，属性一般通过构造函数定义在对象本身上
*/
function Fn(){

}
Fn.prototype.a="xxx"
var fn1=new Fn()
console.log(fn1.a,fn1)      

var fn2=new Fn()
fn2.a="yyy"             //并未设置在原型上
/*
Fn{a:'yyy'}
    a:'yyy'
    __proto__:Object
        a:'xxx'
        constructor:function Fn()
        __proto__:Object
*/
console.log(fn1.a,fn2.a,fn2)        //xxx   yyy 



function Person(name,age){
    this.name=name
    this.age=age
}
Person.prototype.setName-function(name){
    this.name=name
}
var p1=new Person('Tom',12)
p1.setName('Bob')
console.log(p1)

var p2=new Person('Jack',12)
p2.setName('Cat')
console.log(p2)
console.log(p1.__proto__===p2.__proto__)