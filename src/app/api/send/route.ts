import { NextRequest} from 'next/server';
import { Resend } from 'resend';
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const {from, to, subject, html, text} = await req.json()
  if (!from || !to || !subject || !html || !text){
    return new Response(null, {
        status: 404,
        statusText: 'Not found',
    })
   }
  try {
    const data = await resend.emails.send({
     from,
     to,
     subject,
     html,
     text
    });

    if(data.data){
      return new Response (
          JSON.stringify({
              message: data.data,
          }),
          {
              status:200,
              statusText:'OK',
          }
      )
  } else {
      return new Response (
          JSON.stringify({
              message: data.data,
          }),
          {
              status:500,
              statusText:'Internal server error',
          }
      )
  }
  } catch (error) {
    return Response.json({ error });
  }
}