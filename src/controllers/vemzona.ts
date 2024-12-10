import { Request, Response } from "express";

class vemzonaController {
    constructor() {

    }

    async create(req: Request, res: Response) {
        try {
            res.status(201).json({ status: 'create-ok' });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async update(req: Request, res: Response) {
        try {
            res.status(201).json({ status: 'update-ok' });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            res.status(201).json({ status: 'delete-ok' });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            res.status(201).json({ status: 'getAll-ok' });
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            res.status(201).json({ status: 'getOne-ok' });
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new vemzonaController();