import { Request, Response } from 'express';
import crypto from 'crypto';

import Insentive from '../models/Insentive';
import User from '../models/User'

class UserController {
    public async getAll(request: Request, response: Response) {
        const filter = {};
        const all = await User.find(filter);
        response.status(200).json(all);
    }

    public async getUser(request: Request, response: Response) {
        console.log(request.params.id_user)
        const all = await User.findById(request.params.id_user);
        response.status(200).json(all);
    }

    public async createUser(request: Request, response: Response) {
        var insentive = [];
        for(var value of request.body.insentive) {
            insentive.push(
                new Insentive({
                    point: value.point,
                    weight: value.weight
                })
            )
        }
        console.log(request.body);
        console.log(insentive);

        const user = new User({
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            id_type: request.body.id_type,
            id: request.body.id,
            insentive,
            username: request.body.username,
            password: crypto.createHmac('sha256', request.body.password).digest('hex'),
            update_at: Date.now()
        });

        console.log(user);

        const answer = await user.save();
        console.log(answer);
        
        response.status(200).json({});
    }
}

export const userController = new UserController();