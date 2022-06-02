import { Request, Response } from 'express';

import CompanyModel from '../models/Company'

class CompanyController {
    public async getAll(request: Request, response: Response) {
        const filter = {};
        const all = await CompanyModel.find(filter);
        response.status(200).json(all);
    }

    public async getCompany(request: Request, response: Response) {
        const container = await CompanyModel.findById(request.params.id_company);
        response.status(200).json(container);
    }

    public async createCompany(request: Request, response: Response) {
      
        const container = new CompanyModel({
            name: request.body.name,
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
                description: "name and location are required"
            });
        }
        
        response.status(201).json({
            status: "Created",
            code: 201,
            description: "campany was created successfully",
            user: answer
        });
    }

    public async deleteCompany(request: Request, response: Response) {
        var company = undefined;
        try {
            company = await CompanyModel.findById({ _id: request.params.id_company });
            await CompanyModel.deleteOne({ _id: company?._id });
        } catch(error) {
            
            console.log(error);

            return response.status(400).json({
                status: "Bad Request",
                code: 400,
                description: `company ${request.params.id_company} could not be deleted`
            });
        }
        response.status(201).json({
            status: "OK",
            code: 200,
            description: "company was deleted successfully",
            company
        });
    }

    public async updateCompany(request: Request, response: Response) {

        var company_obj: any = {
            capacity: request.body.capacity,
            location: request.body.location,
        };

        Object.keys(company_obj).forEach(key => {
            if (company_obj[key] === undefined) {
                delete company_obj[key];
            }
        });

        var company = undefined;
        try {
            company = await CompanyModel.findById({ _id: request.params.id_company });
            await CompanyModel.updateOne({ _id: request.params.id_company }, company_obj);
            company = await CompanyModel.findById({ _id: request.params.id_company });
        } catch(error) {
            console.log(error);
            return response.status(400).json({
                status: "Bad Request",
                code: 400,
                description: `company ${request.params.id_company} could not be updated`
            });
        }
        response.status(200).json({
            status: "OK",
            code: 200,
            description: "company was updated successfully",
            company
        });
    }
}

export const companyController = new CompanyController();