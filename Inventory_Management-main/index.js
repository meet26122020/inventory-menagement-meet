import express from 'express';
import dotenv from 'dotenv'
import { ConnectDB } from './ConnectDB.js';
import supplierRoute from './router/supplierRoute.js';
import invetoryRoute from './router/inventoryRouter.js';


dotenv.config()

const app = express();

app.use(express.json())
const port = process.env.PORT || 5001;


app.use('/inventory', invetoryRoute);
app.use('/supplier', supplierRoute);

app.get("/", (req, res) => {
    res.send("<center><h1>Inventory Manegement System</h1><br/><h3>Backend Server is running.....</h3><br/><h3>If you have a Any information about of this project <a href=  >Click Here<a/></h3></center>")
})

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
    ConnectDB()
})