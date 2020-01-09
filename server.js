const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const authorRoutes = require("./controllers/api/author-routes");
app.use("/api/author", authorRoutes);

const postRoutes = require("./controllers/api/post-routes");
app.use("/api/post", postRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening: http://localhost:${PORT}`);
  });
});
