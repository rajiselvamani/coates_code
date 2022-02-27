import { NextFunction, Request, Response } from 'express';
import log from '../logger';

const serverHealthCheck = (req: Request, res: Response) => {
    log.info(`server is listening`);
    return res.status(200).json({
        message: 'server is listening'
    });
};

export default serverHealthCheck;
