import SendGrid from '../Providers/SendGrid';
import NoodeMailer from '../Providers/NodeMailer';
import { messagetype } from '../controllers/sendEmail';

const TriggerEmail = (provider: string, message: messagetype) => {
    if (provider === 'sendgrid') {
        return SendGrid(message);
    } else if (provider === 'nodemailer') {
        return NoodeMailer(message);
    }
};
export default TriggerEmail;
