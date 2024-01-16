import { Resend } from "resend";

export async function POST() {
  const resend = new Resend("re_3Fk1ajeG_2jazHguUJH4JDpXJbakKxNgW");
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "aminechebil33@gmail.com",
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  });
}
