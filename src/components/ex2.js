import * as Plot from "npm:@observablehq/plot";

export function helloWorld() {
  return Plot.plot({
    marks: [
      Plot.frame(),
      Plot.text(["Hello, world!"], { frameAnchor: "middle" }),
    ],
  });
}

export function random1000() {
  return Plot.rectY(
    { length: 10000 },
    Plot.binX({ y: "count" }, { x: Math.random })
  ).plot();
}
