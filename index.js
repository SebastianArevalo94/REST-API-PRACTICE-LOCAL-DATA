import express from "express";
import cors from "cors";
import router from "./routes/routes.js";

// iniciar servidor con express
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/API', router);

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
});
