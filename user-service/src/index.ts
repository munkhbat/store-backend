import dotenv from "dotenv";
import express from "express";
import i18n from "i18n";
import path from "path";
import http from "http";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes";
import { connectionDb } from "./database";
dotenv.config();
const { PORT, SERVICE_NAME } = process.env;
const app = express();
connectionDb();

i18n.configure({
  locales: ["mn", "en"],
  defaultLocale: "mn",
  directory: path.join(__dirname, "/locales"),
  updateFiles: false,
  objectNotation: true,
});

app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: true, // эсвэл '*'
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Accept", "Authorization"],
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(i18n.init);

app.use(router);

const server: http.Server = http.createServer(app);

server.listen(PORT, async () => {
  console.log(`listening on port for ${SERVICE_NAME}: ${PORT}`);
});
