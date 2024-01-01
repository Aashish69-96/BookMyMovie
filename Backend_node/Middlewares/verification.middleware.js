const nodemailer = require("nodemailer");
require("dotenv").config();

const emailConfig = {
  service: "gmail",
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PWD,
  },
};

const sendVerificationEmail = async (user) => {
  try {
    const transporter = nodemailer.createTransport({
      service: emailConfig.service,
      auth: emailConfig.auth,
    });

    const verificationLink = `http://localhost:3000/api/customers/verify?token=${user.verificationToken}`;
    const mailOptions = {
      from: emailConfig.auth.user,
      to: user.email,
      subject: "Email Verification - Book My Movie",
      text: `Please click on the following link to verify your email: ${verificationLink}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully!");
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error("Error sending verification email");
  }
};

module.exports = { sendVerificationEmail };
