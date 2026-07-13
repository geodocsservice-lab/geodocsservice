export default async function handler(req, res) {
  // 1. ვამოწმებთ, რომ მოთხოვნა მხოლოდ POST მეთოდით მოდის
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'მხოლოდ POST მეთოდია დაშვებული' });
  }

  // 2. აქ ვიღებთ გასაღებს Vercel-ის დახურული სივრციდან (REACT_APP_ პრეფიქსის გარეშე!)
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    return res.status(500).json({ error: 'API გასაღები ვერ მოიძებნა ბექენდში' });
  }

  // 3. ვიღებთ მომხმარებლის მოწერილ ტექსტს (პრომპტს) ჩვენი საიტიდან
  const { prompt } = req.body;

  try {
    // 4. სერვერი ფარულად უკავშირდება გუგლს
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();
    
    // 5. პასუხს ვაბრუნებთ უკან, საიტზე (დოქტორ დამისოსთან)
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'სერვერის შეცდომა', details: error.message });
  }
}
