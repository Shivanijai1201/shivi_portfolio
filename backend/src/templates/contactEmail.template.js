function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function contactEmailTemplate({ name, email, subject, message }) {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeSubject = escapeHtml(subject)
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background-color:#0b0b0f;font-family:'Segoe UI',Roboto,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0b0b0f;padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background-color:#111318;border-radius:16px;overflow:hidden;border:1px solid rgba(0,204,255,0.15);">
            <tr>
              <td style="background-color:#000000;padding:32px 36px;border-bottom:1px solid rgba(0,204,255,0.2);">
                <span style="color:#ffffff;font-size:22px;font-weight:800;">
                  <span style="color:#00ccff;">S</span>hivani Jayshwal
                </span>
                <div style="color:rgba(255,255,255,0.5);font-size:13px;margin-top:6px;letter-spacing:0.5px;text-transform:uppercase;">
                  New Portfolio Contact Message
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 36px 8px;">
                <p style="margin:0 0 24px;color:rgba(255,255,255,0.7);font-size:15px;line-height:1.6;">
                  You've received a new message from the contact form on your portfolio.
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.45);font-size:12px;text-transform:uppercase;letter-spacing:0.5px;width:110px;vertical-align:top;">Name</td>
                    <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#ffffff;font-size:15px;font-weight:600;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.45);font-size:12px;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Email</td>
                    <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:15px;">
                      <a href="mailto:${safeEmail}" style="color:#00ccff;text-decoration:none;font-weight:600;">${safeEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.45);font-size:12px;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Subject</td>
                    <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#ffffff;font-size:15px;font-weight:600;">${safeSubject}</td>
                  </tr>
                </table>
                <div style="margin-top:24px;color:rgba(255,255,255,0.45);font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Message</div>
                <p style="margin:10px 0 0;padding:18px 20px;background-color:rgba(0,204,255,0.06);border-left:3px solid #00ccff;border-radius:8px;color:rgba(255,255,255,0.85);font-size:15px;line-height:1.7;">
                  ${safeMessage}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 36px 32px;">
                <a href="mailto:${safeEmail}" style="display:inline-block;background-color:#00ccff;color:#000000;text-decoration:none;font-weight:700;font-size:13px;letter-spacing:0.5px;text-transform:uppercase;padding:12px 28px;border-radius:999px;">
                  Reply to ${safeName.split(' ')[0] || 'sender'}
                </a>
              </td>
            </tr>
            <tr>
              <td style="background-color:#000000;padding:18px 36px;text-align:center;border-top:1px solid rgba(255,255,255,0.06);">
                <span style="color:rgba(255,255,255,0.35);font-size:12px;">Sent automatically from shivanijayshwal.dev</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}
