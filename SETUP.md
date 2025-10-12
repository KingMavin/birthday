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

### Replace Placeholder GIFs

The project uses placeholder GIFs from Giphy. To use your own:

1. Find the GIF URLs in the page components:
   - `client/src/pages/WelcomePage.tsx` - Dancing cat and sad cat
   - `client/src/pages/BirthdayPoemPage.tsx` - Heart bear
   - `client/src/pages/ReactionPage.tsx` - Cute cat
   - `client/src/pages/SweetSurprisePage.tsx` - Blushing bear
   - `client/src/pages/FinalPage.tsx` - Kissing bears

2. Replace the `src` attribute with your own GIF URLs

### Update Photos and Poems

Edit `client/src/pages/MemoriesPage.tsx` to customize:
- Replace the placeholder images with actual photos of Marshy
- Update the poems to your own personal messages

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
