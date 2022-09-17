import express from 'express'
import fetch from "node-fetch";



const namerouter=express.Router()


//FETCH api start..........................................................................................
namerouter.get("/fetch",async (req, res) => {

    const url= "https://careers.atherenergy.com/api/job?api=allJob"

    const res1= await fetch(url)

    .then(res=> res.json())

    .catch(e=>{

        console.error({
            "message":"noo",
            error: e,
        })
    })
    res.send(res1)
});
//FETCH api end..........................................................................................

export default namerouter
