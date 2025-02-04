# CJ Workouts

```js
const workoutData = await FileAttachment("data/workouts.json").json();
display(workoutData);
```

```js
display(
  Plot.plot({
    y: {
        grid: true,
        percent: true
    },
    marks: [
      Plot.ruleY([0]),
      Plot.barY(workoutData.exerciseTotals, {
        x: "exercise",
        y: "total",
      })
    ]
  });
)
```
