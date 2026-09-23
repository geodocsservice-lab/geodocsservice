export default async function handler(req, res) {
  // ვუშვებთ მხოლოდ POST მოთხოვნებს
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'დაშვებულია მხოლოდ POST მოთხოვნა' });
  }

  try {
    const { amount, email, description } = req.body;
    
    // ვიღებთ Vercel-ში შენახულ საიდუმლო გასაღებებს
    const merchantId = process.env.FLITT_MERCHANT_ID;
    const secretKey = process.env.FLITT_SECRET_KEY;

    // Flitt-ის API-სთან დაკავშირება (განახლებული სწორი მისამართით)
    const flittResponse = await fetch("https://pay.flitt.com/api/checkout/url", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${secretKey}`,
        'Merchant-Id': merchantId
      },
      body: JSON.stringify({
        amount: amount,
        currency: "GEL",
        // აქ ვეუბნებით Flitt-ს, სად დააბრუნოს მომხმარებელი გადახდის შემდეგ
        callback_url: "https://geodocsservice.ge/?payment_status=success",
        error_url: "https://geodocsservice.ge/?payment_status=failed",
        description: description,
        email: email
      })
    });

    const data = await flittResponse.json();

    if (!flittResponse.ok) {
      throw new Error(data.message || 'გადახდის ინიცირება ვერ მოხერხდა');
    }

    // ვუბრუნებთ React-ს გადახდის ლინკს (checkout_url)
    res.status(200).json({ paymentUrl: data.payment_url || data.checkout_url || data.url });
    
  } catch (error) {
    console.error("Flitt API Error:", error);
    res.status(500).json({ message: "სერვერის შეცდომა გადახდის შექმნისას: " + error.message });
  }
}
