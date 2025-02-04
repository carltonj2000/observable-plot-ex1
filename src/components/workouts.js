import * as Plot from "npm:@observablehq/plot";

export function workouts(events, { width, height } = {}) {
  console.log({ events });
  return Plot.plot({
    width,
    height,
    marginTop: 30,
    marks: [
      Plot.ruleX(events, {
        x: "exercise",
        y: "total",
        markerEnd: "dot",
        strokeWidth: 2.5,
      }),
    ],
  });
}
