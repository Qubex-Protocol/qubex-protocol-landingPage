# Vercel Deployment - Secure Solution

## 🚀 Vercel Functions Advantages

- ✅ **Serverless** : No server to manage
- ✅ **Secure** : Environment variables on server side
- ✅ **Free** : 100,000 requests/month free
- ✅ **Automatic** : Automatic deployment from GitHub

## 📋 Deployment Steps

### 1. Prepare Gmail
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Enable **2-factor authentication**
3. Generate an **application password** :
   - Security → Google Sign-in → App passwords
   - Select "Other" and name it "Qubex Protocol"
   - Copy the generated password

### 2. Deploy to Vercel
1. Connect your GitHub repo to Vercel
2. Vercel will automatically detect it's a React/Vite project
3. Click "Deploy"

### 3. Configure Environment Variables
In your Vercel project dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add these variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-application-password
TO_EMAIL=qubexprotocol@gmail.com
```

3. Select **Production**, **Preview**, and **Development**
4. Click **Save**

### 4. Redeploy
1. Vercel will automatically redeploy
2. Or click **Redeploy** in the dashboard

## 🔧 Project Structure

```
qubex-protocol-landingPage/
├── api/
│   └── waitlist.js          # Vercel Function
├── src/
│   └── pages/
│       └── WaitList.tsx     # Frontend (updated)
└── package.json             # nodemailer added
```

## 🧪 Testing

1. Go to your deployed site
2. Test the registration form
3. Verify you receive the email
4. Check in developer tools that **no IDs are exposed**

## 🔒 Guaranteed Security

- ✅ No EmailJS IDs in client code
- ✅ Secure environment variables on server side
- ✅ Server-side validation
- ✅ Robust error handling

## 📊 Monitoring

In the Vercel dashboard:
- **Functions** : View logs and performance
- **Analytics** : Usage statistics
- **Settings** : Environment variables management

## 🆘 Troubleshooting

### "Module not found" Error
```bash
npm install nodemailer
```

### Gmail Authentication Error
- Verify that 2-factor authentication is enabled
- Use an application password, not your main password

### Environment Variables Not Recognized
- Redeploy after adding variables
- Verify variables are configured for all environments
