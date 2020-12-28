import sub1 from "./sub1";

console.log("sub2引入sub1", sub1);
sub1.name = "sub2 modified";
console.log("sub2修改sub1", sub1);

export class Sub2 {
}
