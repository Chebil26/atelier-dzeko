// api/send/route.js
import { Resend } from "resend";

export const POST = async (req, res) => {
  const { product, name, email, phone } = req.body;
  console.log(req);

  const resend = new Resend("re_3Fk1ajeG_2jazHguUJH4JDpXJbakKxNgW");
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "aminechebil33@gmail.com",
      subject: "Order Confirmation",
      html: `<p>Thank you for your order of </p>`,
    });
  } catch (error) {
    console.error("Error sending email:", error);

    // Send an error response
    res.status(500).json({ error: "Internal Server Error" });
  }
};
