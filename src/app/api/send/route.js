// api/send/route.js
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_3Fk1ajeG_2jazHguUJH4JDpXJbakKxNgW");
export async function POST(request) {
  try {
    const body = await request.json();
    console.log(body);
    const { product, price, name, email, phone, address, comment } = body;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mehdihimeurarchi1@gmail.com",
      subject: `Commande de  ${name} / ${email}`,
      html: `
      <p><strong>Produut:</strong> ${product} </p>
      <p><strong>Prix:</strong> ${price} </p>
      <p><strong>Name:</strong> ${name} </p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Comment:</strong> ${comment}</p>
      `,
    });
    if (data.status === "success") {
      return NextResponse.json({ message: "Email success" });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.log("error", error);
  }
}
