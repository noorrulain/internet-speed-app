import express from "express";
import { exec } from "node:child_process";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());
const port = process.env.PORT;

app.get("/", async (req, res) => {
  await exec("fast --download --json", (err, stdout, stderr) => {
    if (err || stderr) {
      console.log("err");
      res.send("err");
    } else {
      const result = JSON.parse(stdout);
      console.log(result);
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})