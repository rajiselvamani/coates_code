import { messagetype } from '../controllers/sendEmail';

const FormMessage = (requestBody: any, message: messagetype) => {
    if (requestBody.cc.length > 0) message = { ...message, cc: requestBody.cc };
    if (requestBody.bcc.length > 0) message = { ...message, bcc: requestBody.bcc };
    if (requestBody.subject) message = { ...message, subject: requestBody.subject };
    if (requestBody.body) message = { ...message, text: requestBody.body, html: requestBody.body };
    return message;
};
export default FormMessage;
