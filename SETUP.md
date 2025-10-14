# Running Marshy's Birthday Card Locally

This guide will help you run this interactive birthday card project on your local machine using VS Code.

## Prerequisites

Before you begin, make sure you have the following installed:

1. **Node.js** (version 18 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **VS Code**
   - Download from [code.visualstudio.com](https://code.visualstudio.com/)

## Setup Steps

### 1. Download or Clone the Project

If you're working on Replit and want to run it locally in VS Code:

**Option A: Using Replit SSH**
- In your Replit workspace, open the SSH pane
- Click the "Connect" tab and select "Launch VS Code"
- This will open the project directly in VS Code connected to your Replit environment

**Option B: Download the files**
- Download all project files to your local machine
- Open the project folder in VS Code

### 2. Install Dependencies

Open a terminal in VS Code (Terminal → New Terminal) and run:

```bash
npm install
```

This will install all required packages including:
- React and React DOM
- Vite (development server)
- Tailwind CSS (styling)
- Radix UI components
- Express (backend server)
- And many other dependencies

### 3. Start the Development Server

Run the following command:

```bash
npm run dev
```

This starts:
- The Express backend server
- The Vite development server for the frontend
- Both running on the same port (typically port 5000)

### 4. View the Application

Once the server starts, open your browser and navigate to:
```
http://localhost:5000
```

You should see the birthday card welcome page!

## Project Structure

```
├── client/               # Frontend code
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Page components
│   │   ├── App.tsx      # Main app component
│   │   └── index.css    # Global styles
│   └── index.html       # HTML entry point
├── server/              # Backend code
│   ├── routes.ts        # API routes
│   └── index.ts         # Server setup
└── package.json         # Dependencies and scripts
```

## Customizing the Experience

### Asset Paths - All Images and GIFs

Here's a complete list of all assets used in the project for easy editing:

#### Page 1 - Welcome Page (`client/src/pages/WelcomePage.tsx`)
- **Line 20**: Dancing cat GIF
  ```
  https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif
  ```
- **Line 54**: Sad cat GIF (shown when "No thanks" is clicked)
  ```
  https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif
  ```

#### Page 2 - Memories Page (`client/src/pages/MemoriesPage.tsx`)
- **Line 11**: Memory Photo 1
  ```
  https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400
  ```
  - **Line 12**: Poem 1: "Every moment with you feels like a dream,\nYour smile lights up my world with its gleam."

- **Line 15**: Memory Photo 2
  ```
  https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400
  ```
  - **Line 16**: Poem 2: "In your eyes I see the stars above,\nA universe of beauty, warmth, and love."

- **Line 19**: Memory Photo 3
  ```
  https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400
  ```
  - **Line 20**: Poem 3: "Your laughter is the sweetest song,\nWith you is where I belong."

#### Page 3 - Birthday Poem Page (`client/src/pages/BirthdayPoemPage.tsx`)
- **Line 30**: Heart bear GIF
  ```
  https://media.giphy.com/media/yoJC2GnSClbPOkV0eA/giphy.gif
  ```
- **Lines 44-50**: Birthday poem text

#### Page 4 - Reaction Page (`client/src/pages/ReactionPage.tsx`)
- **Line 23**: Cute cat GIF
  ```
  https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif
  ```

#### Page 5 - Sweet Surprise Page (`client/src/pages/SweetSurprisePage.tsx`)
- **Line 15**: Blushing bear GIF
  ```
  https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif
  ```

#### Page 6 - The Question Page (`client/src/pages/QuestionPage.tsx`)
- No images (just the question "Would you be mine?")

#### Final Page (`client/src/pages/FinalPage.tsx`)
- **Line 27**: Kissing bears GIF
  ```
  https://media.giphy.com/media/VxbvpfaTTo3le/giphy.gif
  ```

### Quick Edit Guide

**To replace a GIF:**
1. Open the file path listed above
2. Go to the line number specified
3. Replace the URL in the `src` attribute with your own image/GIF URL

**To update poems:**
1. Open `client/src/pages/MemoriesPage.tsx`
2. Edit the `poem` text in lines 12, 16, and 20
3. Or edit the birthday poem in `client/src/pages/BirthdayPoemPage.tsx` lines 44-50

### Modify Colors

The pink color scheme is defined in `client/src/index.css`. You can adjust the colors in the `:root` section.

## Troubleshooting

**Port already in use:**
- If port 5000 is already in use, you can change it in the `server/index.ts` file

**Dependencies not installing:**
- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again

**Changes not appearing:**
- The development server has hot reload, but sometimes you may need to refresh your browser
- If that doesn't work, restart the dev server (Ctrl+C, then `npm run dev` again)

## Email Notifications Feature

The birthday card includes a subtle notification system that sends you an email based on Marshy's response!

### How It Works

When Marshy reaches the "Would you be mine?" question:

1. **If she clicks "Yes, I would"**: You receive an email with subject "💖 She said YES!" and message "Yes, you are mine now 💖"

2. **If she clicks "No, I won't" 15 times**: You receive an email with subject "💔 Not this time..." and message "Sorry, we can't work 💔"

### Setting Up Email Notifications

**Default Recipient**: Notifications are configured to send to `amiazreal@gmail.com`

**Current Status**: The notification system is currently **logging to console only**. To enable actual email sending when you host this app elsewhere, you'll need to add an email service provider.

**For Deployment (Hosting Elsewhere)**

When you deploy this app to another hosting platform (Vercel, Netlify, your own server, etc.), you'll need to configure an email service. Here are popular options:

**Option 1: Nodemailer with Gmail App Password** (Recommended for Gmail)
```bash
npm install nodemailer
```

Then in `server/routes.ts`, replace the TODO section with:
```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Your gmail address
    pass: process.env.GMAIL_APP_PASSWORD // App-specific password from Google
  }
});

await transporter.sendMail({
  from: process.env.GMAIL_USER,
  to: emailConfig.to,
  subject: emailConfig.subject,
  text: emailConfig.message
});
```

**Option 2: SendGrid** (Easier for production)
```bash
npm install @sendgrid/mail
```

**Option 3: Resend** (Modern, simple API)
```bash
npm install resend
```

**Environment Variables Needed** (when deploying):
- `NOTIFICATION_EMAIL`: Where to send notifications (default: amiazreal@gmail.com)
- Email service credentials (varies by provider)

**For Testing Locally**: The app will log notification details to the console so you can see when they would be triggered.

### Code Location

- **Backend API**: `server/routes.ts` (line 6-37) - The `/api/notify` endpoint
- **Frontend Logic**: `client/src/pages/QuestionPage.tsx` (line 14-46) - Tracks clicks and sends requests

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `dist` folder with the compiled application ready for deployment.

## Need Help?

If you encounter any issues, make sure:
- Node.js version is 18 or higher
- All dependencies installed successfully
- No other applications are using port 5000
- For email notifications: Gmail integration is properly connected on Replit
