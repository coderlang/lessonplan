import("./Class1").then((module) => {
  console.log("dynamic then", module);
});

(async () => {
  let module = await import("./Class1");
  console.log("dynamic await", module);
})();