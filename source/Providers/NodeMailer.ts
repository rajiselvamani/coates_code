import { messagetype } from '../controllers/sendEmail';
const nodemailer = require('nodemailer');
const NodeMailer = (message: messagetype) => {
    let transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    return transport.sendMail(message);
};
export default NodeMailer;
