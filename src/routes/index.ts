import clientRoute from './api';

const initRoutes = (app: any) => {

    clientRoute(app);

    // app.use((req: any, res: any) => {
    //     res.status(404).send({
    //         url: req.originalUrl + ' not found',
    //     });
    // });
};
export default initRoutes;
