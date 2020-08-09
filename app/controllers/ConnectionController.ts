import { Request, Response } from 'express';

import knex from '../../database/knex';

class ConnectionController {
    async index(request: Request, response: Response) {
        const totalConnections = await knex('connections').count('* as total');

        const { total } = totalConnections[0];

        return response.json({ total });
    };

    async create(request: Request, response: Response) {
        const { user_id } = request.body;

        await knex('connections').insert({
            user_id,
        });

        return response.status(201).send();
    };
};

export default ConnectionController;
