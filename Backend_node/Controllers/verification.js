const nodemailer = require("nodemailer");
const email = require("./customer.auth.controller");



// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "<student12@gmail.com>", // user email
    pass: "<App Password>", // take passwrod from app password in two step verfifcation in gmail.
  },
});

const sendemailonlogin = async(userEmail) => {
   
  const mailOptions = {
    from: "saksamgyawali12@gmail.com",
    to: userEmail,
    subject: "Email Verification",
    html: `<p>Click the following link to verify your email: <a href="http://localhost:5173/">http://localhost:5173/</a></p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }
    console.log("Email sent:", info.response);
    return res.status(200).json({ msg: "Email verification link sent" });
  });
};

module.exports= { sendemailonlogin};
