process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import express from "express";
import cors from "cors";
import generateTestsRoute from "./routes/generateTests.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/generate-tests", generateTestsRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
