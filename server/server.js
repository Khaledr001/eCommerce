const app = require('./app');
const connectDb = require('./config/db');
const { serverPort } = require('./secret');


app.listen(serverPort, async (req, res) => {
    console.log(`server is running at ${serverPort}`);
    await connectDb();
});
  