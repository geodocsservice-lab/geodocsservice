export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'დაშვებულია მხოლოდ POST მოთხოვნა' });
  }

  try {
    const { amount, email, description } = req.body;
    
    const merchantId = process.env.FLITT_MERCHANT_ID;
    const secretKey = process.env.FLITT_SECRET_KEY;

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
        callback_url: "https://geodocsservice.ge/?payment_status=success",
        error_url: "https://geodocsservice.ge/?payment_status=failed",
        description: description,
        email: email
      })
    });

    const data = await flittResponse.json();
    console.log("Flitt Full Response:", data); // ვნახავთ ზუსტად რას აბრუნებს ბანკი

    if (!flittResponse.ok) {
      throw new Error(data.message || 'გადახდის ინიცირება ვერ მოხერხდა');
    }

    // ვამოწმებთ ყველა შესაძლო ვარიანტს
    const paymentUrl = data.payment_url || data.checkout_url || data.url || data.redirect_url || data.link || (data.data && data.data.url);

    if (!paymentUrl) {
      throw new Error('ბანკმა არ დააბრუნა გადახდის ლინკი');
    }

    res.status(200).json({ paymentUrl: paymentUrl });
    
  } catch (error) {
    console.error("Flitt API Error:", error);
    res.status(500).json({ message: "შეცდომა: " + error.message });
  }
}
