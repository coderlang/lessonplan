export class Class1 {
  public name:Symbol;
  constructor() {
    this.name = Symbol("Class1");
  }
}

console.log("let class1 = new Class1();");
let class1 = new Class1();
export default class1;