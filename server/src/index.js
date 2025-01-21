const express = require("express");
const userRoutes = require("./routes/users.routes");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/", userRoutes);

app.listen(port, () => {
  console.log("Server is running on port" + port);
});
