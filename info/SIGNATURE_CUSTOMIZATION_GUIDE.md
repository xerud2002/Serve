# SERVE Email Signature - Personalization Guide

## 📝 Quick Start: 3 Simple Edits

Open `email-signature-personalized.html` and find the three sections marked with ⬇️ arrows:

### 1. **Your Name** (Line ~51)
```html
<td style="font-size: 18px; font-weight: 700; color: #1e293b;">
    Louise Wiltshire  <!-- ⬅️ CHANGE THIS -->
</td>
```
**Replace with:** Your full name (e.g., "John Smith")

---

### 2. **Your Position** (Line ~60)
```html
<td style="font-size: 13px; color: #64748b;">
    Executive Assistant to Tony Gibbs - Chief Executive Officer  <!-- ⬅️ CHANGE THIS -->
</td>
```
**Replace with:** Your job title (e.g., "Care Manager", "Finance Director")

---

### 3. **Your Email** (Line ~91)
```html
<a href="mailto:louise.wiltshire@serve.org.uk" style="...">
    louise.wiltshire@serve.org.uk  <!-- ⬅️ CHANGE THIS -->
</a>
```
**Replace with:** Your SERVE email address

⚠️ **IMPORTANT:** Change it in **TWO places**:
- Inside `href="mailto:YOUR_EMAIL"`
- Inside the link text `>YOUR_EMAIL</a>`

---

## 🎯 Example Customizations

### Example 1: Care Manager
```html
<!-- Name -->
<td>Sarah Johnson</td>

<!-- Position -->
<td>Care Manager</td>

<!-- Email -->
<a href="mailto:sarah.johnson@serve.org.uk">sarah.johnson@serve.org.uk</a>
```

### Example 2: Finance Director
```html
<!-- Name -->
<td>Michael Brown</td>

<!-- Position -->
<td>Finance Director</td>

<!-- Email -->
<a href="mailto:michael.brown@serve.org.uk">michael.brown@serve.org.uk</a>
```

### Example 3: Volunteer Coordinator
```html
<!-- Name -->
<td>Emma Davies</td>

<!-- Position -->
<td>Volunteer Coordinator</td>

<!-- Email -->
<a href="mailto:emma.davies@serve.org.uk">emma.davies@serve.org.uk</a>
```

---

## 📋 Installation Steps

### For Gmail:
1. Open `email-signature-personalized.html` in browser
2. Find the section between `<!-- COPY EVERYTHING BELOW THIS LINE -->`
3. View page source (Ctrl+U)
4. Copy everything from `<table cellpadding="0"...` to `</table>`
5. Gmail Settings → Signature → Insert HTML → Paste

### For Outlook Desktop:
1. Open `email-signature-personalized.html` in browser
2. Select the entire visible signature
3. Copy (Ctrl+C)
4. Outlook → File → Options → Mail → Signatures
5. Paste (Ctrl+V)

### For Outlook Web:
1. Open `email-signature-personalized.html` in browser
2. Select and copy the visible signature
3. Settings → View all Outlook settings → Mail → Compose and reply
4. Paste in signature box

---

## ⚙️ Advanced Customizations

### Add Direct Phone Extension
After the main phone number section, add:
```html
<tr>
    <td style="padding: 6px 0;">
        <table cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td style="width: 28px; vertical-align: middle; padding-right: 10px;">
                    <div style="width: 20px; height: 20px; background: #EBF5FF; border-radius: 5px; font-size: 12px;">📱</div>
                </td>
                <td style="vertical-align: middle;">
                    <a href="tel:+447700000000" style="color: #1e293b; text-decoration: none; font-weight: 500; font-size: 14px;">07700 000000</a>
                </td>
            </tr>
        </table>
    </td>
</tr>
```

### Add Department
After the position, add:
```html
<tr>
    <td style="font-size: 12px; color: #94a3b8; font-weight: 500;">
        Department Name
    </td>
</tr>
```

---

## ✅ Checklist Before Using

- [ ] Changed name to your full name
- [ ] Changed position to your job title
- [ ] Changed email in `href="mailto:..."`
- [ ] Changed email in link text
- [ ] Tested email link clicks (should open email client)
- [ ] Sent test email to yourself
- [ ] Checked on mobile device
- [ ] Verified all links work

---

## 🎨 What Stays The Same (Don't Change)

These are consistent across all SERVE staff:
- ✅ SERVE logo
- ✅ SERVE brand name and tagline
- ✅ Main phone: 01933 315555
- ✅ Website: serve.org.uk
- ✅ Address: 8 West Street, Rushden, NN10 0RT
- ✅ Facebook, LinkedIn, Donate buttons
- ✅ Charity number, CQC registration
- ✅ Confidentiality notice

---

## 🆘 Troubleshooting

**Email link doesn't work:**
- Make sure you changed BOTH places (href and text)
- Format: `href="mailto:your.email@serve.org.uk"`

**Signature looks broken:**
- Copy the ENTIRE signature (from `<table` to `</table>`)
- Don't edit the styling code (the `style="..."` parts)

**Name/position too long:**
- Use shorter job titles where possible
- Consider line breaks: "Executive Assistant<br>to the Chief Executive"

**Logo not showing:**
- Logo loads from website: https://serve.org.uk/images/logo-icon.png
- Some email clients block images by default
- Recipients need to "Show Images"

---

## 📞 Need Help?

Contact IT support or refer to:
- `email-signature.html` - Full version with all features
- `email-signature-simple.html` - Simplified version
- `EMAIL_SIGNATURE_SETUP.md` - Detailed installation guide

---

**Version:** 2.0  
**Last Updated:** November 18, 2025  
**Created for:** SERVE Staff
