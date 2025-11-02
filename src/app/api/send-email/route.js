import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message, formsubject, phone } = await req.json();
    console.log("here 1")
    console.log("USER:", process.env.GMAIL_USER);
    console.log("PASS:", process.env.GMAIL_PASS);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for 587
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
    });
    console.log("here 111");
    console.log(process.env.GMAIL_USER)
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: "New Form Submission",
      replyTo: email,  
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Email:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${ formsubject}</p>
        <p><strong>Subject:</strong><br>${message}</p>
      `,
    };
    console.log("here 1111111")
    await transporter.sendMail(mailOptions);
    console.log("here 11111111111")
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.log("here 222")
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Error sending email", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
