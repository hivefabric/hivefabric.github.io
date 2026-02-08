<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1ylFuoTOQAs5T4b1h6RBm_dLU6LU6xHP6

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the following variables in `.env.local` (create the file if missing):
   ```
   GEMINI_API_KEY=your_key_here
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   The analytics ID is optional; leaving it blank disables Google Analytics scripts.
3. Run the app:
   `npm run dev`
