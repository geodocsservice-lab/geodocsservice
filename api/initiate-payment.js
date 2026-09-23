import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'დაშვებულია მხოლოდ POST მოთხოვნა' });
  }

  try {
    const { amount, email, description } = req.body;
    
    const merchantId = process.env.FLITT_MERCHANT_ID;
    const secretKey = process.env.FLITT_SECRET_KEY;

    const payload = {
      amount: amount * 100, // ლარიდან თეთრებში
      currency: "GEL",
      merchant_id: merchantId, // ვაბრუნებთ პირვანდელ მდგომარეობაში
      order_desc: description || "CV Generation",
      order_id: "DOC_" + Date.now(),
      // მივმართავთ ახალ უკან დასაბრუნებელ ფაილზე
      response_url: "https://geodocsservice.ge/api/flitt-return",
      server_callback_url: "https://geodocsservice.ge/api/flitt-return"
    };

    if (email) {
      payload.sender_email = email;
    }

    const keys = Object.keys(payload).sort();
    
    const dataToSign = [secretKey];
    keys.forEach(key => {
      if (payload[key] !== '' && payload[key] !== undefined && payload[key] !== null) {
        dataToSign.push(payload[key]);
      }
    });
    
    const signatureString = dataToSign.join('|');
    payload.signature = crypto.createHash('sha1').update(signatureString, 'utf8').digest('hex');

    const flittResponse = await fetch("https://pay.flitt.com/api/checkout/url", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ request: payload })
    });

    const data = await flittResponse.json();

    if (!flittResponse.ok || data.response?.response_status === 'failure') {
      throw new Error(data.response?.error_message || 'გადახდის ინიცირება ვერ მოხერხდა');
    }

    const paymentUrl = data.response?.checkout_url || data.checkout_url;

    if (!paymentUrl) {
      throw new Error('ბანკმა არ დააბრუნა გადახდის ლინკი');
    }

    res.status(200).json({ paymentUrl: paymentUrl });
    
  } catch (error) {
    console.error("Flitt API Error:", error);
    res.status(500).json({ message: "შეცდომა: " + error.message });
  }
}
