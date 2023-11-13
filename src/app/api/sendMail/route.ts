import { sendMail } from "@/services/mailService";
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await sendMail({
      from: process.env.NEXT_NODEMAILER_EMAIL as string,
      pass: process.env.NEXT_NODEMAILER_PASSWORD as string,
      subject: 'mister-vincent.fr | Nouvelle demande de contact',
      toEmail: process.env.NEXT_NODEMAILER_RECIPIENT as string,
      html: `<p>${body.name}</p><p>${body.phone}</p><p>${body.email}</p><p>${body.message}</p>`,
    });

    if (!result || result.rejected.length) {
      return NextResponse.json({ message: 'Error' }, { status: 400 })
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (error: unknown) {
    console.error(error);

    return NextResponse.json({ message: 'Error' }, { status: 400 })
  }
}