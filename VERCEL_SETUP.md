# Vercel Deployment - Environment Variables Setup

For the contact form to work on Vercel, you need to set environment variables in your Vercel project settings.

## Steps to Add Environment Variables in Vercel:

1. Go to your Vercel project dashboard: https://vercel.com/dashboard
2. Select your project (tajanaskorak)
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

### Required Variables:

- **Variable Name:** `GMAIL_USER`
- **Value:** `tajanaskorak@gmail.com`
- **Environment:** Production, Preview, Development (select all)

- **Variable Name:** `GMAIL_APP_PASSWORD`
- **Value:** Your 16-character Gmail App Password (e.g., `utsgdcpwszehxslx`)
- **Environment:** Production, Preview, Development (select all)

5. Click **Save** for each variable
6. **Redeploy** your application for the changes to take effect

## After Adding Variables:

1. Go to **Deployments** tab
2. Click the three dots (⋯) on the latest deployment
3. Select **Redeploy**
4. Wait for the deployment to complete

## Verify It's Working:

After redeployment, test the contact form. If it still doesn't work:
- Check the Vercel function logs in the **Functions** tab
- Verify the environment variables are correctly set
- Make sure you're using a valid Gmail App Password (not your regular password)
