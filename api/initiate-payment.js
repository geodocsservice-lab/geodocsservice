import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'დაშვებულია მხოლოდ POST მოთხოვნა' });
  }

  try {
    const { amount, email, description } = req.body;
    
    // საიდუმლო გასაღებები Vercel-იდან
    const merchantId = process.env.FLITT_MERCHANT_ID;
    const secretKey = process.env.FLITT_SECRET_KEY;

    // Flitt-ის პარამეტრები 
    // თანხას ვამრავლებთ 100-ზე, რადგან Flitt ითხოვს თეთრებში (მაგ: 10 ლარი -> 1000)
    const payload = {
      amount: Math.round(parseFloat(amount) * 100),
      currency: "GEL",
      merchant_id: parseInt(merchantId),
      order_desc: description || "CV Generation",
      order_id: "DOC_" + Date.now(),
      response_url: "https://geodocsservice.ge/?payment_status=success",
      response_url_method: "GET", // <--- დამატებულია GET მეთოდი
      server_callback_url: "https://geodocsservice.ge/?payment_status=success"
    };

    if (email) {
      payload.sender_email = email;
    }

    // 1. პარამეტრების სახელების ანბანური სორტირება (Flitt-ის მოთხოვნა)
    const keys = Object.keys(payload).sort();
    
    // 2. ვქმნით ტექსტს დასაშიფრად: იწყება საიდუმლო გასაღებით
    const dataToSign = [secretKey];
    keys.forEach(key => {
      if (payload[key] !== '' && payload[key] !== null) {
        dataToSign.push(payload[key]);
      }
    });
    
    // 3. ვაერთებთ '|' სიმბოლოთი
    const signatureString = dataToSign.join('|');
    
    // 4. ვშიფრავთ SHA1 ალგორითმით
    payload.signature = crypto.createHash('sha1').update(signatureString, 'utf8').digest('hex');

    console.log("Sending payload to Flitt:", payload);

    // 5. ვაგზავნით მონაცემებს (აუცილებლად "request" ობიექტში)
    const flittResponse = await fetch("https://pay.flitt.com/api/checkout/url", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ request: payload })
    });

    const data = await flittResponse.json();
    console.log("Flitt Full Response:", data);

    if (!flittResponse.ok || data.response?.response_status === 'failure') {
      throw new Error(data.response?.error_message || 'გადახდის ინიცირება ვერ მოხერხდა');
    }

    // Flitt გადახდის ლინკს აბრუნებს response.checkout_url ველში
    const paymentUrl = data.response?.checkout_url || data.checkout_url;

    if (!paymentUrl) {
      throw new Error('ბანკმა არ დააბრუნა გადახდის ლინკი');
    }

    // ვუბრუნებთ React-ს გადახდის ლინკს
    res.status(200).json({ paymentUrl: paymentUrl });
    
  } catch (error) {
    console.error("Flitt API Error:", error);
    res.status(500).json({ message: "შეცდომა: " + error.message });
  }
}
