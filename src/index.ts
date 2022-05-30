import express from 'express'

// Importing Routes
import UserRoutes from './routes/user.router'

// Initializations
const app = express();
import './database';

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/user', UserRoutes);

// Run Server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})