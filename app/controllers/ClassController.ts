import { Request, Response } from 'express';

import knex from '../../database/knex';
import convertHourToMinutes from '../../app/utils/convertHourToMinutes';

interface Schedule {
    week_day: number;
    from: string;
    to: string;
};

class ClassController {
    async index(request: Request, response: Response) {
        const filters = request.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if (!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({
                error: 'Missing filters to search classes'
            });
        }

        const timeInMinutes = convertHourToMinutes(time);

        const classes = await knex('classes')
            .whereExists(function () {
                this.select('class_schedules.*')
                    .from('class_schedules')
                    .whereRaw('`class_schedules`.`class_id` = `classes`.`id`')
                    .whereRaw('`class_schedules`.`week_day` = ??', [Number(week_day)])
                    .whereRaw('`class_schedules`.`from` <= ??', [timeInMinutes])
                    .whereRaw('`class_schedules`.`to` > ??', [timeInMinutes]);
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);

        return response.json(classes);
    };

    async create(request: Request, response: Response) {
        const { name, avatar, whatsapp, bio, subject, cost, schedules } = request.body;

        const transaction = await knex.transaction();

        try {
            const insertedUsersIds = await transaction('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });

            const user_id = insertedUsersIds[0];

            const insertedClassesId = await transaction('classes').insert({
                subject,
                cost,
                user_id
            });

            const class_id = insertedClassesId[0];

            const classSchedules = schedules.map((schedule: Schedule) => ({
                week_day: schedule.week_day,
                from: convertHourToMinutes(schedule.from),
                to: convertHourToMinutes(schedule.to),
                class_id,
            }));

            await transaction('class_schedules').insert(classSchedules);

            await transaction.commit();

            return response.status(201).send();
        } catch (error) {
            await transaction.rollback();

            return response.status(400).json({
                error: 'Unexpected error while creating new class.'
            });
        }
    };
};

export default ClassController;
