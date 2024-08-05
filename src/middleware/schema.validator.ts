import Joi from 'joi';

const validator = (schemaObject: Joi.SchemaMap | undefined) => {

    return (
        req: { params: any; query: any; body: any; },
        res: {
            status: (arg0: number) => {
                (): any; new(): any;
                send: { (arg0: { errors: any[]; }): void; new(): any; };
            };
        }, next: () => void) => {

        const payload = Object.assign({}, req.params || {}, req.query || {}, req.body || {});
        const schema = Joi.object(schemaObject);
        const { error } = schema.validate(payload);

        if (error) {
            return res.status(400).send({ errors: errorHandler(error) });
        } else {
            next();
        }
    };
};

const errorHandler = (err: any) => {
    const error: string[] = [];
    for (const key in err.details) {
        if (err.details.hasOwnProperty(key)) {
            error.push(err.details[key].message.replace(/"/g, ''));
        }
    }
    return error;
};

export default validator;
