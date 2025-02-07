import * as Plot from "npm:@observablehq/plot";

export const startYear = 0;
export const gWeight = (weights) => {
  return Plot.marks(
    Plot.ruleY([0]),
    Plot.line(weights, {
      x: "date",
      y: "weight",
    })
  ).plot({
    x: { domain: [new Date(`202${startYear}-1-1`), new Date("2025-2-31")] },
    y: { domain: [135, 180] },
    grid: true,
  });
};

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
  ).plot({
    x: { domain: [new Date("2023-1-1"), new Date("2024-12-31")] },
    y: { domain: [0, 1.5] },
    grid: true,
  });
};
