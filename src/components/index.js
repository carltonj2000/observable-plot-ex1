import * as Plot from "npm:@observablehq/plot";

export const iWorkout = (exercises) => {
  return Plot.marks(
    Plot.ruleY([0]),
    Plot.barY(exercises, {
      x: "exercise",
      y: "total",
    })
  ).plot();
};

export const iWorkoutDays = (days) => {
  return Plot.marks(
    Plot.ruleY([0]),
    Plot.dot(days, {
      x: "date",
      y: "value",
      stroke: "exercise",
    })
  ).plot({ x: { domain: [new Date("2023-12-31"), new Date("2024-12-31")] } });
};
