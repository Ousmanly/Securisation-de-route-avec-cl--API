import express from 'express'
const app = express()
const port = 3000;
const api_key = '12345678';

const checkApiKey = (req, res, nex) =>{
    const apikey = req.headers['x-api-key'];
    if (apikey && apikey === api_key) {
        nex();
    }else{
        res.status(401).json({ error: 'Unauthorized: Invalid or missing API key' });
    }
}
app.get('/api/private-data',checkApiKey, function (_req, res) {
    res.json({
        message: 'Welcome to the private data!'
    });
})

app.listen(port, ()=>{
    console.log(`The application is running in port ${port}`)
})