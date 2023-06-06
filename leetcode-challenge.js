var obj = {
    a: {
      b: {
        c: 12,
      },
    },
    findPath: function (s) {
      if (s === "a") {
        return this.a;
      } else if (s === "a.b") {
        return this.a.b;
      } else if (s === "a.b.c") {
        return this.a.b.c;
      } else {
        return undefined;
      }
    },
  };
  
  console.log(obj.findPath("a.b.c")); // 12
  console.log(obj.findPath("a.b")); // {c: 12}
  console.log(obj.findPath("a.b.d")); // undefined
  console.log(obj.findPath("a.c")); // undefined
  console.log(obj.findPath("a.b.c.d")); // undefined
  console.log(obj.findPath("a.b.c.d.e")); // undefined
  