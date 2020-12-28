import class1 from "./Class1";

console.log("Class2引入Class1", class1);
class1.name = Symbol("Class2");
console.log("Class2修改Class1", class1);

export class Class2 {
}