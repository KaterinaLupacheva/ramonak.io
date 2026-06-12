import { Resend } from "resend";

export async function POST(request: Request) {
  const { name, email, description } = await request.json();
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await resend.emails.send({
      from: "site@ramonak.io",
      to: ["contact@ramonak.io"],
      subject: "New Contact Form Submission!",
      text: `Name: ${name}\nEmail: ${email}\nDescription: ${description}`,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
