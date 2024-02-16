// api/send/route.js
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_iK5sYtJD_4wGpmMn9RHaEPpxJqXYcTyGp");
export async function POST(request) {
  try {
    const body = await request.json();
    const { product, price, name, email, phone, address, comment } = body;

    const data = await resend.emails.send({
      from: "Atelier Dzeko <onboarding@resend.dev>",
      to: "mehdihimeurarchi1@gmail.com",
      subject: `Commande de  ${name} / ${email}`,
      html: `
      <p><strong>Produit:</strong> ${product} </p>
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
