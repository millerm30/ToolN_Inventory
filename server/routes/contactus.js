const router = require("express").Router();
const authorization = require("../middleware/authorization");
const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.CONTACT_EMAIL,
    pass: process.env.CONTACT_PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/email", authorization, async (req, res) => {
  const { name, email, message } = req.body;
  const mail = {
    from: name,
    to: process.env.CONTACT_EMAIL,
    subject: "Contact Us",
    html: `<p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "fail" });
    } else {
      res.json({ status: "success" });
    }
  });
});

module.exports = router;
