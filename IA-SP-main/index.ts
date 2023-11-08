const express = require("express")
import routes from './src/network';

const app = express();
const port = 9000;

const initialize = () => {
                  console.log(`server is running on port ${port}`);
}
routes(app);
app.listen(port, initialize);