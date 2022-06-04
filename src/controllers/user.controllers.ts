import { Request, Response } from 'express';
import crypto from 'crypto';

import InsentiveModel from '../models/Insentive';
import UserModel from '../models/User'

class UserController {
    public async getAll(request: Request, response: Response) {
        const filter = {};
        const all = await UserModel.find(filter);
        response.status(200).json(all);
    }

    public async getUser(request: Request, response: Response) {
        var all: any = null;
        try {
            all = await UserModel.findById(request.params.id_user);
        } catch(err) {}

        if(all === null) {
            all = await UserModel.findOne({username: request.params.id_user});
        }
        response.status(200).json(all);
    }

    public async createUser(request: Request, response: Response) {
        var insentive = request.body.insentive.map((value: any) => {
            return new InsentiveModel({
                point: value.point,
                weight: value.weight
            });
        });

        InsentiveModel.insertMany(insentive);

        const user = new UserModel({
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            id_type: request.body.id_type,
            id: request.body.id,
            role: request.body.role,
            insentive,
            username: request.body.username,
            password: crypto.createHash('sha256').update(request.body.password).digest('hex'),
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

    public async deleteUser(request: Request, response: Response) {
        var user = undefined;
        try {
            user = await UserModel.findById({ _id: request.params.id_user });
            var arr = user?.insentive;
            if(arr !== undefined) {
                for(var value of arr) {
                    await InsentiveModel.deleteOne({ _id: value?._id });
                }
            }
            await UserModel.deleteOne({ _id: user?._id });
        } catch(error) {
            
            console.log(error);

            return response.status(400).json({
                status: "Bad Request",
                code: 400,
                description: `User ${request.params.id_user} could not be deleted`
            });
        }
        response.status(201).json({
            status: "OK",
            code: 200,
            description: "user was deleted successfully",
            user
        });
    }

    public async updateUser(request: Request, response: Response) {

        var user_obj: any = {
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            id_type: request.body.id_type,
            id: request.body.id,
            insentive: request.body.insentive,
            username: request.body.username,
            role: request.body.role,
            password: request.body.password?crypto.createHash('sha256').update(request.body.password).digest('hex') : undefined,
            update_at: Date.now()
        };

        Object.keys(user_obj).forEach(key => {
            if (user_obj[key] === undefined) {
                delete user_obj[key];
            }
        });

        var user = undefined;
        try {
            user = await UserModel.findById({ _id: request.params.id_user });

            var arr = user?.insentive;
            if(arr !== undefined) {
                for(var value of arr) {
                    await InsentiveModel.deleteOne({ _id: value?._id });
                }
            }

            if(user_obj['insentive'] !== undefined) {
                user_obj.insentive = user_obj.insentive.map((value: any) => {
                    return new InsentiveModel({
                        point: value.point,
                        weight: value.weight
                    });
                })

                user_obj.insentive.forEach(async (value: any) => {
                    await value.save();
                })
            }

            await UserModel.updateOne({ _id: request.params.id_user }, user_obj);
            user = await UserModel.findById({ _id: request.params.id_user });
        } catch(error) {
            console.log(error);
            return response.status(400).json({
                status: "Bad Request",
                code: 400,
                description: `User ${request.params.id_user} could not be updated`
            });
        }
        response.status(200).json({
            status: "OK",
            code: 200,
            description: "user was updated successfully",
            user
        });
    }
}

export const userController = new UserController();