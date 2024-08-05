require('dotenv').config();

export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET!;
export const JWT_SECRET_ADMIN = process.env.JWT_SECRET_ADMIN!;
export const WEB_BASE_URL = process.env.WEB_BASE_URL;
export const SERVER_URL = process.env.SERVER_URL;

export const SWAGGER_APP_NAME = 'HRB Computers';
export const SWAGGER_VERSION = '1.0.0';
export const SWAGGER_DESC = 'RESTful API';
export const SWAGGER_CONTACT_MAIL = 'admin@hrbcomputers.in';

export const SMTP_MAIL_HOST = process.env.SMTP_MAIL_HOST;
export const SMTP_MAIL_USERNAME = process.env.SMTP_MAIL_USERNAME;
export const SMTP_MAIL_PASSWORD = process.env.SMTP_MAIL_PASSWORD;
export const SMTP_MAIL_PORT = process.env.SMTP_MAIL_PORT;
