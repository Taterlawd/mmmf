"use server";

import { Resend } from "resend";

// Initialize Resend with your hidden environment key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Quick fallback validation
  if (!name || !email || !subject || !message) {
    return { error: "All fields are required." };
  }

  try {
    const { data, error } = await resend.emails.send({
      // Resend requires a verified domain to send "FROM". 
      // While testing, you can use Resend's default onboarding email address:
      from: "Maayi Mary Mbuya Foundation <onboarding@resend.dev>",
      // Change this to the actual inbox where you want to receive inquiries:
      to: ["your-organization-email@gmail.com"], 
      replyTo: email, // This lets you hit "Reply" in your email app to reply directly to the user
      subject: `New Contact Form Inquire: ${subject}`,
      html: `
        <h2>New Inquiry from Maayi Mary Mbuya Foundation Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background-color: #f4f4f5; padding: 15px; border-radius: 8px;">${message}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { error: "Failed to send email. Please try again later." };
    }

    return { success: true };
  } catch (err) {
    console.error("Server Action Catch:", err);
    return { error: "An unexpected network error occurred." };
  }
}