import * as express from "express"
import "./database/dataSource"
import { routes } from "./routes";
import * as cors from 'cors';
// create express app
const app = express()
app.use(cors())
app.use(express.json())

app.use(routes)

// start express server
app.listen(3030)

console.log("Express server has started on port 3030")
