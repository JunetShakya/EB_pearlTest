<<<<<<< HEAD
# EB_pearlTest
=======
# My Project

This is a modern front-end project built using **React**, **Vite**, and **Tailwind CSS**. It supports phone number input validation, form handling, and includes icons using `react-icons`.

# What We Learn

Working on this project helps reinforce:

- **React Fundamentals** – Component-based structure, JSX, and hooks.
- **Vite Workflow** – How to set up and run a blazing fast dev server and production build with Vite.
- **Tailwind CSS** – Building responsive UI with utility classes.
- **Form Validation** – Managing and validating forms using `react-hook-form`.
- **Phone Input Integration** – Working with international phone formats using `react-phone-number-input`.
- **NPM & Package.json** – Understanding dependencies and scripts in a modern JavaScript project.
- **Linting** – Using ESLint to enforce code quality in React apps.
- **Module Imports** – Modern JavaScript module system with ES modules (`type: module`).

## Project Structure

my-project/ ├── public/ # Static files │ └── index.html ├── src/ │ ├── assets/ # Images, fonts, logos, etc. │ ├── components/ # Reusable UI components │ │ ├── Footer.jsx │ │ ├── Features.jsx │ │ └── Task.jsx │ ├── pages/ # Page-level components │ │ └── Home.jsx │ ├── styles/ # Global or component-specific styles │ │ └── index.css │ ├── data/ # Static/mock data (optional) │ │ └── featuresData.js │ ├── App.jsx # Main application component │ └── main.jsx # Entry point (Vite) or index.js (CRA) ├── package.json ├── tailwind.config.js # Tailwind CSS config (if used) └── README.md

## Features

- Fast development with Vite
- Utility-first styling with Tailwind CSS
- International phone number input with `react-phone-number-input`
- Form handling using `react-hook-form`
- Beautiful icons via `react-icons`
- ESLint setup for linting React code
- Configured with `.gitignore` for safe version control

## Scripts

Available via `npm`:

- `dev` – Starts the development server
- `build` – Builds the app for production
- `lint` – Runs ESLint on the project
- `preview` – Serves the production build locally

## Getting Started

# Install dependencies

npm install

# Start the dev server

npm run dev

## Project Overview

This is a simple React UI module for a business website that includes:

# A Home section with a call-to-action.

# A Navbar for site navigation.

# A Contact Us form with validation and submission handling.

# Features is a reusable UI section that highlights key benefits, services, or functionalities offered by a product or business. It presents each feature in a clean card layout with a title, short description, and visual emphasis (like an icon or emoji).

# Task is a basic React component to manage tasks with add, delete, and complete functionality. Built for productivity apps and beginner React projects.

# Footer is a reusable UI section typically placed at the bottom of a webpage.

## Components

# Navbar.jsx
![Image Alt](https://github.com/JunetShakya/EB_pearlTest/blob/6d784bbdaed0937107e5e36a6024df085cd7d4f8/navbar)

A responsive navigation bar with links for Products, Solutions, Help Center, and a demo request button.

Clean layout with mobile-friendly styling using Tailwind CSS.

# Home.jsx

![Image Alt](https://github.com/JunetShakya/EB_pearlTest/blob/2ebe294b57a14cafeb952f968f850d74873cf838/Screenshot%202025-04-13%20144224.png)
A home section introducing the company’s service offering.

Includes a call-to-action button ("Get started").

Decorative blurred gradient background elements for a modern UI look.

# Feature.jsx
![Image Alt](https://github.com/JunetShakya/EB_pearlTest/blob/1191c36bdee644520fb8cdb1b4d4b17b5582c0c9/feature.jpg)

A responsive grid layout (1–3 columns based on screen size)

A heading and subheading to introduce the section

Feature cards with hover effects for interactivity

Clean, readable styling using Tailwind CSS

A data-driven structure using a JavaScript array for easy content updates

# Task.jsx
![Image Alt](https://github.com/JunetShakya/EB_pearlTest/blob/7f6af5a290f00fd0aecd12154f737115091f0c68/Screenshot%202025-04-13%20172907.png)

Add tasks with input validation

Mark tasks as complete/incomplete

Delete tasks from the list

Live user feedback messages

Responsive design with Tailwind CSS

# ContactUs.jsx
![Image Alt](https://github.com/JunetShakya/EB_pearlTest/blob/7f6af5a290f00fd0aecd12154f737115091f0c68/Screenshot%202025-04-13%20172907.png)
A contact form using react-hook-form for validation.

Includes phone number input with validation using libphonenumber-js.

Handles form submissions and displays a success message.

# Footer.jsx
![Image Alt](https://github.com/JunetShakya/EB_pearlTest/blob/7f6af5a290f00fd0aecd12154f737115091f0c68/Screenshot%202025-04-13%20172907.png)

4-column layout: Description, Products, Company, Resources

Social media icons (LinkedIn, Email)

Responsive and minimal design

Bottom bar with policy and sitemap links
>>>>>>> 97d9f9f (commit message)
