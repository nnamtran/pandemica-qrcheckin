const PORT = 3003
const express = require('express')
const {MongoClient} = require('mongodb')
const cors = require('cors')
const uri = "mongodb+srv://nnamtran:87422491243Nam@cluster0.w7tfk6i.mongodb.net/?retryWrites=true&w=majority";

const app = express()
app.use(cors())
app.use(express.json())
// account: nnamtran - 87422491243Nam
app.get('/test', (req, res, next) => {
    res.json('Hello to my app')
}) 

app.post('/location', async(req, res) => {
    const client = new MongoClient(uri)
    const formData = req.body.formData
    

    try {
        await client.connect()
        const database = client.db('app-data')
        const checkin = database.collection('qrcode')

        const data = {
            user_id: formData.user_id,
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            time: formData.time,
            location: formData.location
        }

        const insertedCheckin = await checkin.insertOne(data)
        res.status(200).send('Success')

    } catch(error) {
        console.log(error)
    }
})



app.listen(PORT, () => console.log('Server running on PORT' + PORT))