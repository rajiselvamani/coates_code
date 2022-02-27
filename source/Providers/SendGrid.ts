import { messagetype } from '../controllers/sendEmail';
const sgMail = require('@sendgrid/mail');
const SendGrid = (message: messagetype) => {
    console.log(process.env.API_KEY);
    sgMail.setApiKey(process.env.API_KEY);
    return sgMail.send(message);
};
export default SendGrid;
