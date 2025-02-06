import { tsvParse } from "d3-dsv";
import fs from "fs";

const workFileName =
  "/media/renderws/carltonData/cj2025/data/mine/Workouts2024.tsv";
async function text() {
  try {
    const data = fs.readFileSync(workFileName, "utf8");
    return data.toString();
  } catch (e) {
    console.log(e);
    return "Error:\t seen";
  }
}

const workoutJson = tsvParse(await text());

const date2lineNumber = [];
const exercises = [];
workoutJson.forEach((line, lineNo) => {
  const date = line.Date;
  // regex for 12/31/24
  if (/\d{1,2}\/\d{1,2}\/\d{2}/.test(date)) {
    const exercise = workoutJson[lineNo - 1].Groups;
    if (date.split("/")[2] !== "24") return;
    date2lineNumber.push({ date, lineNo, exercise });
    const exerciseIndex = exercises.findIndex((e) => e.exercise === exercise);
    if (exerciseIndex === -1) exercises.push({ exercise, dates: [date] });
    else exercises[exerciseIndex].dates.push(date);
  }
});

const exerciseTotals = exercises.map((e) => ({ ...e, total: e.dates.length }));

process.stdout.write(
  JSON.stringify({
    workouts: date2lineNumber.length,
    exerciseTotals,
    date2lineNumber,
  })
);

/*
  {
    Date: '82 min',
    Groups: '',
    Exercise: 'arm curls',
    mins: '',
    Reps: '10',
    Lbs: '20',
    Plus: '',
    Notes: 'plus inn front of chest single arm alternate'
  },
  */
