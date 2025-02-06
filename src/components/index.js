import * as Plot from "npm:@observablehq/plot";

export const iWorkout = (exercises) => {
  console.log(exercises);
  return Plot.marks(
    Plot.ruleY([0]),
    Plot.barY(exercises, {
      x: "exercise",
      y: "total",
    })
  ).plot();
};
