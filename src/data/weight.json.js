import fs from "fs/promises";
import path from "path";

const weightFilesDir =
  "/media/renderws/carltonData/cj2025/data/mine/Fitbit/Global Export Data";

const getYear = async () => {
  const files = [...(await fs.readdir(weightFilesDir))];
  const years24n25 = files.filter((f) =>
    /weight-\d{2}2[0-5]-\d{2}-\d{2}.json/.test(f)
  );

  let combined = [];
  await years24n25.reduce(async (promise, file) => {
    await promise;
    const data = await text(path.join(weightFilesDir, file));
    const json = JSON.parse(data);
    combined = combined.concat(json);
  });
  const sorted = combined.sort((a, b) =>
    new Date(a.date).getTime() > new Date(b.date).getTime() ? 1 : -1
  );
  const dated = sorted.map((w) => ({ ...w, date: new Date(w.date) }));
  return dated;
};

async function text(fileName) {
  try {
    const data = await fs.readFile(fileName, "utf8");
    return data.toString();
  } catch (e) {
    console.log(e);
    return JSON.stringify({ Error: "seen" });
  }
}

const years = await getYear();

process.stdout.write(JSON.stringify(years));
