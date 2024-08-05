import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './../constant';
import btoa from 'btoa';
import atob from 'atob';
import httpStatus from '../helpers/httpStatus.helper';

/**
 * @encode- Here Generate Jwt Token
 */
const encode = (req: any, res: any) => {
    try {

        res.user.id = btoa(btoa(btoa(res.user.id)));
        res.user.email = btoa(btoa(btoa(res.user.email)));

        const token = jwt.sign({ user: res.user.email, id: res.user.id }, JWT_SECRET);
        return res.status(200).send({ status: 'Ok', token, data: res.user });

    } catch (error) {

        httpStatus.sendError400(error, res);
    }
};

/**
 * @decode- Here Jwt Token Decode
 */
const decode = (req: any, res: any, next: any) => {
    try {

        if (req.headers.authorization === void 0) {
            
            httpStatus.sendError401({ message: 'Authorization header missing!' }, res);
            return false;

        } else {

            const accessToken = req.headers.authorization.split(' ');
            if (accessToken[0] !== 'Bearer') {
                httpStatus.sendError401({ message: 'Unauthorized' }, res);
                return false;
            }

            jwt.verify(accessToken[1], JWT_SECRET, (err: any, decoded: any) => {
    
                if (err) {
                    httpStatus.sendError401({ message: 'Unauthorized' }, res);
                } else {
                    res.userEmail = atob(atob(atob(decoded.user)));
                    res.userId = atob(atob(atob(decoded.id)));
                    next();
                }
            });
        }
        
    } catch (error) {
        httpStatus.sendError400(error, res);
    }
};

export default {
    encode,
    decode,
};
