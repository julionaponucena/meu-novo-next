import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { nome, email, descricao } = await request.json()

  const transporte = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.PASSMAIL,
    },
  })

  await transporte.sendMail({
    from: email,
    replyTo: email,
    to: process.env.RECEIVERS,
    subject: `Mensagem de ${nome} do Restauramente`,
    text: descricao,
  })

  return NextResponse.json({ success: true })
}
