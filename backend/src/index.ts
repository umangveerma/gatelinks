import express, { Request, Response, Application } from "express";
import cors from "cors";

import connectToMongo from "./helpers/connectToMongo";

import router from "./routes/router";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello World!",
  });
});

app.use("/api", router);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  await connectToMongo();
  console.log(`[🚀] Server is running on port ${port}`);
});
