const nodeMailer = require('nodemailer')


const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
  auth: {
      type: "login",
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
  }
})

const sendMail = async (info) => {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: info.to,
      subject: info.subject,
      html: info.html
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = sendMail
