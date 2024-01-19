const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "darknoahxxx@gmail.com",
    pass: "!!",
  },
});

// async function to send email
const sendEmail = async () => {
  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: "darknoahxxx@gmail.com",
      to: "artista.berzek@gmail.com",
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// call the sendEmail function();
module.exports = { sendEmail };
