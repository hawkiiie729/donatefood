const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
app.use(express.json());
const path = require("path");
// --------------------------deployment------------------------------
app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

// --------------------------deployment------------------------------


const sendMail=async(email,data)=>{
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'laukikpandey@gmail.com', // generated ethereal user
        pass: 'prtxgbllfrcoizwn', // generated ethereal password
      },
    });
  
    let Osubject,Otext,Ohtml;
        Osubject=`Delivery details `;
        Ohtml=`
        <h1>Here is your delivery details</h1>
        Hope you have a good day!<br>
        Here are your details<br>
        Donator-${data.Name} <br>
        Address-https://maps.google.com/?q=${data.AddressLatitude},${data.AddressLongitude}<br>
        Moblile-Number:${data.Mobile}<br>
        Food-${data.Food}<br>
        Serving:${data.Serving}<br>
        Date:${data.Date}
        `
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"DonateFood 👻" <laukikpandey@gmail.com>', // sender address
      to: email, // list of receivers
      subject: Osubject, // Subject line
      //text: "Hello world?", // plain text body
      html: Ohtml // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    
}
app.get('/',async(req,res)=>{
    res.send('api is running')
})
app.post("/sendMail", async(req, res) => {
    console.log('req.body',req.body);
  try{
    await sendMail('siddhant2012pandey@gmail.com',req.body);
    res.send('message sent')
  }catch(err){
    console.log('err',err);
    res.send('error',err)
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));