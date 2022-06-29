import mongoose, { ConnectOptions } from 'mongoose';

import {mongodb} from './keys'

console.log(mongodb);

mongoose.connect(mongodb.URI, { useNewUrlParser: true } as ConnectOptions)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));