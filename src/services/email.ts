'use server';

import { Resend } from 'resend';
import VercelInviteUserEmail from './vercel-invite-user';
import { FlightDetails } from '../types';

const apiKey = import.meta.env.VITE_RESEND_API_KEY;
const resend = new Resend(apiKey);

export async function send(formData: FlightDetails) {
  const { data, error } = await resend.emails.send({
    from: 'hello@previa.click',
    to: [
      // these emails:
      // 'jrb547@cornell.edu',
      // 'cas572@cornell.edu',
      'td442@cornell.edu',
      // 'dd684@cornell.edu',
      // 'ss3589@cornell.edu'
    ],
    subject: 'Someone wants to travel!',
    react: VercelInviteUserEmail({
      from: formData.from,
      destination: formData.to,
      date: formData.date,
      passengers: formData.passengers,
      classType: formData.class,
      reason: formData.reason,
    }),
  });

  if (error) {
    return { error: error.message };
  }

  console.log(data);

  return { data: 'Email sent!' };
}
