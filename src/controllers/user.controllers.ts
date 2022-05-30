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
        const all = await User.findById(request.params.id_user);
        response.status(200).json(all);
    }

    public async createUser(request: Request, response: Response) {
        var insentive = request.body.insentive.map((value: any) => {
            return new Insentive({
                point: value.point,
                weight: value.weight
            });
        });

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

        var answer = undefined;

        try {
            answer = await user.save();
        } catch (error) {
            console.log(error);

            return response.status(400).json({
                status: "Bad Request",
                code: 400,
                description: "id or username was already registered in the database"
            });
        }
        
        response.status(201).json({
            status: "Created",
            code: 201,
            description: "user was created successfully",
            user: answer
        });
    }
}

export const userController = new UserController();