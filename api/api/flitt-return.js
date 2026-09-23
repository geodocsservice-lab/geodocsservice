export default function handler(req, res) {
  // Flitt-დან მოსული POST მოთხოვნის დაჭერა და GET მეთოდით მთავარ გვერდზე გადამისამართება
  res.redirect(302, '/?payment_status=success');
}
