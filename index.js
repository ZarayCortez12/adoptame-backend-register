import app from './app.js';
import { connectDB } from './db.js';

const startServer = async () => {
    await connectDB();
    app.listen(3002, () => {
        console.log('Servidor corriendo en http://localhost:3002');
    });
};

startServer();
