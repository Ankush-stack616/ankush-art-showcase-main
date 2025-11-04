const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  console.log('Building project...');
  execSync('npm run build', { stdio: 'inherit' });
}

// Create 404.html (same as index.html for SPA routing)
fs.copyFileSync(
  path.join('dist', 'index.html'),
  path.join('dist', '404.html')
);

// Initialize git in dist folder
process.chdir('dist');

try {
  execSync('git init', { stdio: 'inherit' });
  execSync('git add -A', { stdio: 'inherit' });
  execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });
  execSync('git branch -M gh-pages', { stdio: 'inherit' });
  
  // Force push to gh-pages branch
  execSync(
    'git push -f https://github.com/Ankush-stack616/ankush-art-showcase-main.git gh-pages',
    { stdio: 'inherit' }
  );

  console.log('Deployed successfully!');
} catch (error) {
  console.error('Deployment failed:', error);
  process.exit(1);
}