"use server";

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  bikeMake: string;
  bikeModel: string;
  bikeYear: string;
  bikeValue: string;
  ridingStyle: string;
  coverageType: string;
  internationalRiding: string;
  additionalNotes: string;
}

export async function submitQuoteForm(data: QuoteFormData) {
  if (!data.name || !data.email || !data.phone) {
    return { success: false, error: "Please fill in your name, email, and phone number." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    const webhookUrl =
      "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=adventurebikeinsurance";

    const payload = {
      form_name: "adventure-bike-quote",
      submitted_at: new Date().toISOString(),
      ...data,
    };

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error("Webhook error:", res.status, await res.text());
      return { success: false, error: "Something went wrong. Please try calling 844-967-5247." };
    }

    return { success: true };
  } catch (error) {
    console.error("Quote form error:", error);
    return { success: false, error: "Something went wrong. Please try calling 844-967-5247." };
  }
}
