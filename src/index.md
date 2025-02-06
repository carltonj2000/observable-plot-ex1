# Workspace For Present Visualization

The main files in the original template have been move to the `old`
directory from the `src` directory.
Refer to the `old` directory for usefully code snippets.

## Previous Visualizations

- [Plot JS code in a markdown file](ex1)
- [Plot JS code imported into a markdown file](ex2)

## Carlton's Workouts

```js
const workouts = await FileAttachment("data/workouts.json").json();
display(workouts);
```

```js
import { iWorkout } from "./components/index.js";
display(iWorkout(workouts.exerciseTotals));
```
