import { Request, Response } from 'express';

import CodeModel from '../models/Code'

class CodeController {
    public async getAll(request: Request, response: Response) {
        const filter = {};
        const all = await CodeModel.find(filter);
        response.status(200).json(all);
    }

    public async getCode(request: Request, response: Response) {
        const container = await CodeModel.findOne({ code: request.params.code });
        response.status(200).json(container);
    }

    public async createCode(request: Request, response: Response) {
      
        const code = new CodeModel({
            code: request.body.code
        });

        var answer = undefined;

        try {
            answer = await code.save();
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
            description: "code was created successfully",
            codeObj: answer
        });
    }

    public async deleteCode(request: Request, response: Response) {
        var codeObj = undefined;
        try {
            codeObj = await CodeModel.findById({ _id: request.params.id_code });
            await CodeModel.deleteOne({ _id: codeObj?._id });
        } catch(error) {
            
            console.log(error);

            return response.status(400).json({
                status: "Bad Request",
                code: 400,
                description: `code ${request.params.id_user} could not be deleted`
            });
        }
        response.status(201).json({
            status: "OK",
            code: 200,
            description: "code was deleted successfully",
            codeObj
        });
    }

    public async updateCode(request: Request, response: Response) {

        var codeObj: any = {
            code: request.body.code,
            used: request.body.used
        };

        Object.keys(codeObj).forEach(key => {
            if (codeObj[key] === undefined) {
                delete codeObj[key];
            }
        });

        var code = undefined;
        try {
            code = await CodeModel.findById({ _id: request.params.id_code });
            await CodeModel.updateOne({ _id: request.params.id_code }, codeObj);
            code = await CodeModel.findById({ _id: request.params.id_code });
        } catch(error) {
            console.log(error);
            return response.status(400).json({
                status: "Bad Request",
                code: 400,
                description: `code ${request.params.id_code} could not be updated`
            });
        }
        response.status(200).json({
            status: "OK",
            code: 200,
            description: "code was updated successfully",
            codeObj: code
        });
    }
}

export const codeController = new CodeController();