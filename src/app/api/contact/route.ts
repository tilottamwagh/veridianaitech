import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    // Log submission server-side regardless
    console.log("📋 New Demo Booking:", { name, email, company, message, at: new Date().toISOString() });

    // If Google Script URL is configured, forward to Sheets
    if (scriptUrl && scriptUrl.trim() !== "") {
      try {
        const response = await fetch(scriptUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            company,
            message,
            submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          }),
        });

        if (!response.ok) {
          console.error("Google Sheets error:", await response.text());
        } else {
          console.log("✅ Saved to Google Sheets");
        }
      } catch (sheetsError) {
        // Don't fail the whole request if Sheets is down — still return success to user
        console.error("Google Sheets unreachable:", sheetsError);
      }
    }

    // Always return success to the user
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Submission failed. Please try again." },
      { status: 500 }
    );
  }
}
