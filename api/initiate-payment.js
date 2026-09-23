export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'დაშვებულია მხოლოდ POST მოთხოვნა' });
  }

  try {
    const { amount, email, description } = req.body;
    
    const merchantId = process.env.FLITT_MERCHANT_ID;
    const secretKey = process.env.FLITT_SECRET_KEY;

    // ვცდით ალტერნატიულ, სტანდარტულ სტრუქტურას
    const payload = {
      merchant_id: merchantId,
      amount: parseFloat(amount),
      currency: "GEL",
      order_id: "DOC_" + Date.now(),
      description: description || "CV Generation",
      customer_email: email,
      redirect_url: "https://geodocsservice.ge/?payment_status=success",
      failure_url: "https://geodocsservice.ge/?payment_status=failed"
    };

    console.log("Sending payload to Flitt:", payload);

    const flittResponse = await fetch("https://pay.flitt.com/api/checkout/url", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${secretKey}`
      },
      body: JSON.stringify(payload)
    });

    const data = await flittResponse.json();
    console.log("Flitt Response Data:", data);

    if (!flittResponse.ok || data.response?.response_status === 'failure') {
      throw new Error(data.response?.error_message || data.message || 'გადახდის ინიცირება ვერ მოხერხდა');
    }

    const paymentUrl = data.url || data.payment_url || data.checkout_url || data.redirect_url || (data.response && data.response.url);

    if (!paymentUrl) {
      throw new Error('ბანკმა არ დააბრუნა გადახდის ლინკი');
    }

    res.status(200).json({ paymentUrl: paymentUrl });
    
  } catch (error) {
    console.error("Flitt API Error:", error);
    res.status(500).json({ message: "შეცდომა: " + error.message });
  }
}
