import express from 'express';
import 'dotenv/config';
import log from './logger';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.SERVER_PORT, () => {
    log.info(`Server is running on port: ${process.env.SERVER_PORT}`);
    routes(app);
});
