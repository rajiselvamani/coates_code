import { Express, Request, Response } from 'express';
import serverHealthCheck from './controllers/healthCheck';
import sendEmail from './controllers/sendEmail';
export default function (app: Express) {
    app.get('/api/healthcheck', serverHealthCheck);
    app.post('/api/send', sendEmail);
}
