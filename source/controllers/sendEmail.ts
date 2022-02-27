import { NextFunction, Request, Response } from 'express';
import FormMessage from '../helper/FormMessage';
import TriggerEmail from '../helper/TriggerEmail';
import log from '../logger';

export interface messagetype {
    from: string;
    to: [string];
    cc?: [string];
    bcc?: [string];
    text?: string;
    subject?: string;
    html?: string;
}

const sendEmail = (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!validateRequest(req)) {
            log.error(`To address and provider are mandatory`);
            return res.status(400).json({
                message: 'To address and provider are mandatory'
            });
        } else {
            let message: messagetype = {
                from: process.env.FROM_EMAIL as string,
                to: req.body.to,
                text: '',
                subject: ''
            };
            message = FormMessage(req.body, message);
            TriggerEmail(req.body.provider as string, message)
                .then(() => {
                    log.info(`Email sent successfully`);
                    return res.status(200).json({
                        message: 'Email sent successfully!'
                    });
                })
                .catch((error: { message: any }) => {
                    log.error(error.message);
                    return res.status(400).json({
                        message: error.message
                    });
                });
        }
    } catch (err: any) {
        res.status(400).send(err.message);
        return;
    }
};

const validateRequest = (req: Request) => {
    if (req.body.to.length === 0 || !req.body.provider) return false;
    else return true;
};

export default sendEmail;
