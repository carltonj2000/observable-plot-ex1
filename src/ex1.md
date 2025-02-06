# Ex1

Simple Javascript examples in a markdown file.

```js
display(
  Plot.plot({
    marks: [
      Plot.frame(),
      Plot.text(["Hello, world!"], { frameAnchor: "middle" }),
    ],
  })
);
```

```js
display(
  Plot.rectY(
    { length: 10000 },
    Plot.binX({ y: "count" }, { x: Math.random })
  ).plot()
);
```
