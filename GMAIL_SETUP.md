# Gmail Setup Instructions for Contact Form

To enable email functionality for your contact form, you need to configure Gmail credentials.

## Step 1: Enable 2-Step Verification

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** > **2-Step Verification**
3. Enable 2-Step Verification if it's not already enabled

## Step 2: Generate App Password

1. Still in Security settings, scroll down to **App passwords**
2. Select **Mail** as the app
3. Select **Other (Custom name)** as the device
4. Enter a name like: "Next.js Contact Form"
5. Click **Generate**
6. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

## Step 3: Create Environment File

1. In your project root, create a file named `.env.local`
2. Add the following content:

```
GMAIL_USER=tajanaskorak@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password-here
```

**Important:** 
- Replace `your-16-character-app-password-here` with the actual 16-character password (remove spaces)
- Never commit `.env.local` to git (it's already in .gitignore)
- The `.env.local` file is only used locally and won't be deployed

## Step 4: For Production Deployment

When deploying to production (Vercel, Netlify, etc.), add these environment variables in your hosting platform's settings:

- `GMAIL_USER` = `tajanaskorak@gmail.com`
- `GMAIL_APP_PASSWORD` = your app password

## Testing

After setup, restart your development server:
```bash
npm run dev
```

Then test the contact form - submissions should now be sent directly to your Gmail inbox!
