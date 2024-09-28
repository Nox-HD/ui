#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to copy a single file from source to destination
function copyFile(source, target) {
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, target);
    console.log(`Copied ${source} to ${target}`);
  } else {
    console.error(`Source file not found: ${source}`);
  }
}

// Function to create directories if they don't exist
function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

// Function to handle the "add" command
function handleAddCommand(component) {
  const sourceDir = path.resolve(__dirname, 'components', component);
  const destinationDir = path.resolve(process.cwd(), 'components', component);

  // Check if the component exists in the CLI tool
  if (!fs.existsSync(sourceDir)) {
    console.error(`Component "${component}" not found.`);
    process.exit(1);
  }

  // Create destination directory if it doesn't exist
  ensureDirectoryExistence(destinationDir);

  // Copy each file from the component directory
  fs.readdirSync(sourceDir).forEach((file) => {
    const sourceFile = path.join(sourceDir, file);
    const targetFile = path.join(destinationDir, file);
    copyFile(sourceFile, targetFile);
  });

  // Optionally, install dependencies (like Framer Motion)
  if (component === 'animated-card') {
    try {
      console.log('Installing required dependencies for animated-card...');
      execSync('npm install framer-motion', { stdio: 'inherit' });
      console.log('Dependencies installed successfully.');
    } catch (error) {
      console.error('Failed to install dependencies:', error);
    }
  }

  console.log(`Component "${component}" added successfully to your project.`);
}

// Parse command-line arguments
const args = process.argv.slice(2);
const command = args[0];
const component = args[1];

if (command === 'add' && component) {
  handleAddCommand(component);
} else {
  console.log('Usage: npx noxhd-ui add <component-name>');
}
