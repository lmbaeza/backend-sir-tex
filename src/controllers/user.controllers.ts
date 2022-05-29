import { Request, Response } from 'express';

class UserController {
    public index(request: Request, response: Response) {
        response.status(200).json({
            status: 'OK',
            code: 200
        });
    }
}

export const userController = new UserController();