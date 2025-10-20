# Marshy's Interactive Birthday Card

## Project Overview

This is an interactive, romantic birthday card web application created for Marshy. The app features a multi-page story flow with playful interactions, smooth animations, and a soft pink aesthetic.

## Key Features

- **6-page interactive story flow** with smooth fade transitions
- **Playful button interactions**: shrinking "No" button and dodging button that moves away from cursor
- **Floating hearts and sparkle animations** throughout
- **Custom romantic poems** on the memories page
- **Email notification system** for capturing responses

## Technology Stack

- **Frontend**: React + Vite, Tailwind CSS, Radix UI components
- **Backend**: Express.js (minimal, serves API endpoints)
- **Fonts**: Dancing Script, Pacifico, Cookie (Google Fonts)
- **Animations**: CSS keyframes + Tailwind animations

## Project Structure

```
├── client/src/
│   ├── pages/           # 7 page components (Welcome, Memories, Poem, etc.)
│   ├── components/      # Reusable components (FloatingHearts, DodgingButton, etc.)
│   └── App.tsx          # Main app with page flow state
├── server/
│   └── routes.ts        # API endpoint for email notifications
└── SETUP.md             # Complete setup and customization guide
```

## Email Notification System

**Status**: Configured for console logging (ready for external deployment)

**How it works**:
- When Marshy clicks "Yes, I would" → notification triggered with message "Yes, you are mine now 💖"
- When Marshy clicks "No, I won't" 15 times → notification triggered with message "Sorry, we can't work 💔"

**Configuration**:
- Recipient email: `amiazreal@gmail.com` (set in `server/routes.ts`)
- Gmail integration was dismissed - user plans to host elsewhere
- Currently logs to console; requires email service provider (Nodemailer, SendGrid, Resend) when deployed

**API Endpoint**: `POST /api/notify` in `server/routes.ts`

## User Preferences

- User plans to host the application outside of Replit
- Prefers console logging for now, will add email provider during deployment
- All GIFs are placeholders from Giphy (user will replace with personal GIFs)
- Memory photos are Unsplash placeholders (user will replace with actual photos of Marshy)

## Customization Guide

All customization instructions are in `SETUP.md`, including:
- Exact file paths and line numbers for every asset
- Instructions for replacing GIFs and photos
- How to update poems and messages
- Email notification setup for various hosting platforms

## Recent Changes

- Added email notification feature with `/api/notify` endpoint
- Configured notification recipient as `amiazreal@gmail.com`
- Updated button text: "Yes, I do" → "Yes, I would" and "No, I don't" → "No, I won't"
- Created comprehensive SETUP.md with all asset paths and deployment instructions

## Deployment Notes

When deploying elsewhere:
1. Choose an email service provider (Nodemailer + Gmail, SendGrid, or Resend)
2. Install the required package
3. Add email service credentials as environment variables
4. Replace the TODO section in `server/routes.ts` with actual email sending code
5. Test the notification system thoroughly

## Next Steps (User-Driven)

- Replace all placeholder GIFs with personal GIFs for Marshy
- Update memory photos with actual photos
- Customize poems with personal messages
- Set up email service provider when deploying to production
- Test the complete flow before sharing with Marshy
