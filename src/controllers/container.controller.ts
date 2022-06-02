import { Request, Response } from 'express';

import ContainerModel from '../models/Container'

class ContainerController {
    public async getAll(request: Request, response: Response) {
        const filter = {};
        const all = await ContainerModel.find(filter);
        response.status(200).json(all);
    }

    public async getContainer(request: Request, response: Response) {
        const container = await ContainerModel.findById(request.params.id_container);
        response.status(200).json(container);
    }

    public async createContainer(request: Request, response: Response) {
      
        const container = new ContainerModel({
            capacity: request.body.capacity,
            location: request.body.location,
        });

        var answer = undefined;

        try {
            answer = await container.save();
        } catch (error) {
            console.log(error);
            return response.status(400).json({
                status: "Bad Request",
                code: 400,
                description: "capacity and location are required"
            });
        }
        
        response.status(201).json({
            status: "Created",
            code: 201,
            description: "container was created successfully",
            user: answer
        });
    }

    public async deleteContainer(request: Request, response: Response) {
        var container = undefined;
        try {
            container = await ContainerModel.findById({ _id: request.params.id_container });
            await ContainerModel.deleteOne({ _id: container?._id });
        } catch(error) {
            
            console.log(error);

            return response.status(400).json({
                status: "Bad Request",
                code: 400,
                description: `container ${request.params.id_user} could not be deleted`
            });
        }
        response.status(201).json({
            status: "OK",
            code: 200,
            description: "container was deleted successfully",
            container
        });
    }

    public async updateContainer(request: Request, response: Response) {

        var container_obj: any = {
            capacity: request.body.capacity,
            location: request.body.location,
        };

        Object.keys(container_obj).forEach(key => {
            if (container_obj[key] === undefined) {
                delete container_obj[key];
            }
        });

        var container = undefined;
        try {
            container = await ContainerModel.findById({ _id: request.params.id_container });
            await ContainerModel.updateOne({ _id: request.params.id_container }, container_obj);
            container = await ContainerModel.findById({ _id: request.params.id_container });
        } catch(error) {
            console.log(error);
            return response.status(400).json({
                status: "Bad Request",
                code: 400,
                description: `container ${request.params.id_container} could not be updated`
            });
        }
        response.status(200).json({
            status: "OK",
            code: 200,
            description: "container was updated successfully",
            container
        });
    }
}

export const containerController = new ContainerController();