import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  org?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const org = (data.org || "").trim();
  const message = (data.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 422 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 422 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "contact@onealaeris.com";
  const from = process.env.CONTACT_FROM || "ONeal Aeris <no-reply@onealaeris.com>";

  // If Resend isn't configured yet, accept gracefully so the UI works in preview.
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY not set — logging submission instead.", {
      name,
      email,
      org,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New inquiry — ${name}${org ? ` · ${org}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        org ? `Organization: ${org}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ error: "Could not send message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "Could not send message." }, { status: 500 });
  }
}
