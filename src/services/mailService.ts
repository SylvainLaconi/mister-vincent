import { createTransport } from 'nodemailer';

type MailServiceProps = {
  from: string;
  pass: string;
  subject: string;
  toEmail: string;
  html: string;
}

export async function sendMail(data: MailServiceProps){
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: data.from,
        pass: data.pass,
      }
    });

    const mailOptions = {
    from: data.from,
    to: data.toEmail,
    subject: data.subject,
    html: data.html,
    };

    return await transporter.sendMail(mailOptions);
}