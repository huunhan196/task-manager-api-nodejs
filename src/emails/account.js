const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "pfiev.nhan@gmail.com",
    subject: "Thanks for joining us!",
    text: `Welcome to the app, ${name}. Let us know how you get along with the app.`,
  });
};

const sendFarewellEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "pfiev.nhan@gmail.com",
    subject: "Farewell Email",
    text: `Goodbye, ${name}. We are really sad to see you go.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendFarewellEmail,
};
