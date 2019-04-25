const express = require("express")
const app = express()
const Time = () => {
  let date = new Date()
  let current_hour = date.getHours()
  let ok
  current_hour >= 8 && current_hour <17 ? (ok = true) : (ok = false)
  return ok
}

app.get("/", (req, res) => {
  Time() ? res.sendFile(__dirname + "/public/home.html") : res.sendFile(__dirname + "/public/notworking.html")
})
app.get("/contact", (req, res) => {
  Time() ? res.sendFile(__dirname + "/public/contact.html") : res.sendFile(__dirname + "/public/notworking.html")
})
app.get("/ourservices", (req, res) => {
  Time() ? res.sendFile(__dirname + "/public/ourservices.html"): res.sendFile(__dirname + "/public/notworking.html")
})




app.listen(3000, (err)=>{
    if(err) console.log('il ya une erreur')
    else console.log('runing')
})