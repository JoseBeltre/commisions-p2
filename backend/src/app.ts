import express from "express";
import cors from "cors";
import commissionRoutes from "./routes/commissionRoutes";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/commission", commissionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
