## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js
- npm

### Installation

1. Clone this repository
   ```
   git clone https://github.com/yourusername/muaz-portfolio.git
   cd muaz-portfolio
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Deployment

This project is set up for easy deployment to GitHub Pages.

1. Update the `homepage` field in `package.json` with:
   ```json
   "homepage": "https://amuazm.github.io/muaz-portfolio"
   ```

2. Deploy manually:
   ```
   npm run deploy
   ```

3. Alternatively, push to the main branch and let the GitHub Action workflow deploy automatically.

## Customization

### Personal Information
- Edit your name, contact info, and about text in the appropriate components
- Update the profile image by replacing the placeholder in the About component
- Modify section content in the data files in `src/data/`

### Styling
- Adjust colors and theme in `src/styles/global.css`
- Modify component-specific styles in `src/styles/components/`

### Projects
- Add your own projects in `src/data/projects.ts`
- Include screenshots of your projects in `public/assets/images/`

## Technologies Used

- React 18
- TypeScript
- Framer Motion for animations
- React Router
- GitHub Pages