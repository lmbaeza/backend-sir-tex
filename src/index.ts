import express from 'express'

// Importing Routes
import UserRoutes from './routes/user.router'
import ContainerRoutes from './routes/container.router'
import CompanyRoutes from './routes/company.router'
import cors from 'cors'

// Initializations
const app = express();
import './database';

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// const allowedOrigins = ['http://localhost:3001'];
const allowedOrigins = ['http://localhost:3001', '*'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));

// Routes
app.use('/user', UserRoutes);
app.use('/container', ContainerRoutes);
app.use('/company', CompanyRoutes);

// Run Server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})