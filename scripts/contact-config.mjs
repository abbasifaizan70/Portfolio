// Set WHATSAPP_NUMBER to the owner's confirmed international number at build time.
export function whatsappUrl(number, message = 'Hi Faizan, I’d like to discuss a project.') {
  if (!number?.trim()) return null;
  const trimmed = number.trim();
  if (!/^\+?[1-9][0-9 ()-]*$/.test(trimmed)) throw new Error('WHATSAPP_NUMBER must include the country code, with no leading local zero.');
  const digits = trimmed.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) throw new Error('WHATSAPP_NUMBER must contain 7–15 international digits.');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
export const whatsappNumber = process.env.WHATSAPP_NUMBER;
export const primaryWhatsappUrl = whatsappUrl(whatsappNumber);
