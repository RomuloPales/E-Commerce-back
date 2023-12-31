import express from "express";
import cors from "cors";
import router from "./routes/index";

const app = express();
app.use(cors());
app.use(express.json());

app.use(router)

const port = process.env.port || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});     
