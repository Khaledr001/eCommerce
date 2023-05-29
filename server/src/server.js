const app = require("./app");
const connectDb = require("./config/db.js");
const { serverPort } = require("./secret.js");


app.listen(serverPort, async () => {
  console.log(`Serving at ${serverPort}`);

  await connectDb();
});
