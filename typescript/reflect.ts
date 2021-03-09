import "reflect-metadata";
@Reflect.metadata('name', 'A')
class A {
  @Reflect.metadata('name', 'hello')
  hello() {}
}

const objs = [A, new A, A.prototype]
const res = objs.map(obj => [
  Reflect.getMetadata('name', obj),
  Reflect.getMetadata('name', obj, 'hello'),
  Reflect.getOwnMetadata('name', obj),
  Reflect.getOwnMetadata('name', obj ,'hello')
])
console.log(objs);