# SERVE Email Signature Setup Guide

This guide will help you set up the professional email signature for **web@serve.org.uk**.

## 📁 Files Included

1. **email-signature.html** - Full featured signature with logo, award badge, social links
2. **email-signature-simple.html** - Simplified version without logo (better compatibility)

## 🎨 Design Features

- **Brand Colors**: SERVE blue (#1565C0) matching website
- **Award Badge**: Great British Care Awards 2024 winner
- **Contact Info**: Email, phone, address, website
- **Social Links**: Facebook, LinkedIn, JustGiving
- **CQC & Charity Info**: Registration details
- **Confidentiality Notice**: Legal protection
- **Mobile Responsive**: Looks great on all devices

## 📧 Installation Instructions

### For Gmail (web@serve.org.uk)

1. **Open the signature file**:
   - Open `email-signature.html` in your web browser
   - Right-click and select "View Page Source" or press Ctrl+U

2. **Copy the signature**:
   - Find the section between `<!-- SERVE Email Signature -->` and `<!-- End of SERVE Email Signature -->`
   - Select and copy ALL of this HTML code

3. **Add to Gmail**:
   - Go to Gmail Settings (gear icon → "See all settings")
   - Scroll to "Signature" section
   - Click "+ Create new" and name it "SERVE"
   - **Switch to HTML mode**: Click the 3 dots (...) → "Insert HTML"
   - Paste the copied HTML code
   - Click "OK" then scroll down and click "Save Changes"

### For Outlook (Desktop)

1. **Open the signature file**:
   - Open `email-signature.html` in your web browser

2. **Copy as rendered HTML**:
   - Select the entire signature (click and drag)
   - Copy it (Ctrl+C)

3. **Add to Outlook**:
   - In Outlook, go to File → Options → Mail → Signatures
   - Click "New" and name it "SERVE Web"
   - Paste in the signature area (Ctrl+V)
   - Set as default for new messages and replies
   - Click "OK"

### For Outlook Web (Office 365)

1. **Open the file in browser**:
   - Open `email-signature.html` in Chrome/Edge

2. **Copy the signature**:
   - Select the entire visible signature
   - Copy it (Ctrl+C)

3. **Add to Outlook Web**:
   - Click Settings (gear icon) → View all Outlook settings
   - Go to Mail → Compose and reply
   - Under "Email signature", paste the signature
   - Check "Include signature on new messages"
   - Click "Save"

### For Apple Mail

1. **Open the file**:
   - Open `email-signature.html` in Safari

2. **Copy the signature**:
   - Select and copy the entire signature

3. **Add to Mail**:
   - Go to Mail → Settings → Signatures
   - Click "+" to create new signature
   - Name it "SERVE"
   - Paste the signature
   - Drag to the email account to apply

## 🎯 Recommended Version by Email Client

| Email Client | Recommended File | Reason |
|--------------|-----------------|---------|
| Gmail | `email-signature.html` | Full support for HTML/CSS |
| Outlook Desktop | `email-signature-simple.html` | Better compatibility |
| Outlook Web | `email-signature.html` | Good HTML support |
| Apple Mail | `email-signature.html` | Excellent rendering |
| Thunderbird | `email-signature-simple.html` | Mixed HTML support |

## ✏️ Customization

If you need to customize the signature (e.g., add personal name, job title):

### Adding Your Name and Title

Find this section in the HTML:
```html
<td style="font-size: 16px; font-weight: 600; color: #1565C0; padding-bottom: 4px;">
    SERVE
</td>
```

Replace with:
```html
<td style="font-size: 16px; font-weight: 600; color: #1565C0; padding-bottom: 4px;">
    Your Name
</td>
<tr>
    <td style="font-size: 13px; color: #64748b; padding-bottom: 12px;">
        Web Manager | SERVE
    </td>
</tr>
```

### Changing Email Address

Find:
```html
<a href="mailto:web@serve.org.uk" style="color: #1565C0; text-decoration: none;">web@serve.org.uk</a>
```

Replace `web@serve.org.uk` with your email address in both places.

### Adding Direct Extension/Mobile

Add after the phone number row:
```html
<tr>
    <td style="padding: 4px 0;">
        <table cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td style="color: #64748b; width: 20px; vertical-align: top;">📱</td>
                <td>
                    <a href="tel:+447700000000" style="color: #1e293b; text-decoration: none;">07700 000000</a>
                </td>
            </tr>
        </table>
    </td>
</tr>
```

## 🔧 Troubleshooting

### Logo Not Showing
- The logo links to `https://serve.org.uk/images/logo-icon.png`
- Ensure this file exists on your website and is accessible
- Some email clients block external images by default

### Formatting Issues
- Use the simple version (`email-signature-simple.html`) for better compatibility
- Some email clients strip certain CSS styles - this is normal

### Colors Look Different
- Email clients render colors differently
- The signature uses web-safe colors that work across platforms

### Signature Appears Twice
- Remove any existing signatures before adding the new one
- Check your email client settings for duplicate signature insertion

## 📱 Mobile Testing

Always test your signature by:
1. Sending a test email to yourself
2. Opening on mobile phone
3. Checking that links work (phone, email, website)
4. Verifying readable font sizes

## 🔒 Security Note

The confidentiality notice is included for legal protection. If you need to customize it for specific requirements (GDPR, data protection), consult with your legal advisor.

## 📞 Support

If you need help customizing the signature or have issues:
- Contact your IT department
- Refer to your email client's documentation
- Ensure you're copying the HTML correctly (not just the visible text)

## 🎨 Brand Consistency

This signature matches your website design:
- **Primary Color**: SERVE Blue (#1565C0)
- **Secondary Color**: SERVE Green (#0F8636) for donate link
- **Typography**: System fonts for maximum compatibility
- **Layout**: Clean, professional, accessible

---

**Last Updated**: November 18, 2025
**Version**: 1.0
**Created for**: web@serve.org.uk
