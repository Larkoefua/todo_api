
import { createTransport } from "nodemailer";

export const mailTransporter = createTransport({
    host: 'smtp.gmail.com',
    port: /*587*/  465,
    secure: /*false*/ true,
    auth: {
        user: 'djabateylarko@gmail.com',
        pass: 'reclfpyodhpoocde'
    },
    from: 'djabateylarko@gmail.com'
});