# Veecious Security Solutions Website

A professional, responsive single-page application (SPA) developed for Veecious Security Solutions (PTY) Ltd. This website showcases the company's security services, training college offerings, and accreditation status using a modern, tactical design theme.

## Project Overview

This project is built using React.js and features a custom-built design system focused on a "tactical security" aesthetic. It includes fully responsive layouts that adapt from foldable devices to large desktop screens, dynamic scroll animations, and direct integration with WhatsApp for client inquiries.

## Features

### Core Functionality
* **Responsive Navigation:** Custom header with a glass-morphism effect that changes state on scroll. Includes a mobile-specific hamburger menu with background animations.
* **Dynamic Hero Sections:** Reusable hero component with overlay effects and customizable text/images for each page.
* **Scroll Animations:** Custom Component (`useScrollObserver`) that triggers bi-directional fade and slide animations as elements enter or leave the viewport.
* **Direct Communication:** "Request Quote" buttons automatically format messages and redirect users to the company's WhatsApp business line.
* **Emergency Call-to-Action:** prominent emergency hotline buttons available throughout the user journey.

### Pages
* **Home:** Overview of capabilities, accreditations (PSIRA, SAPS, SASSETA), and core value propositions.
* **About Us:** Company history, mission statement, core values, and registration details.
* **Services:** Detailed breakdown of security offerings including Armed Response, VIP Protection, and Crowd Control.
* **Training:** dedicated section for the Training College, featuring PSIRA grade information, firearm competency pricing tables, and training galleries.
* **Contact:** Contact form interface and detailed business contact information.

## Technologies Used

* **Frontend Framework:** React.js
* **Routing:** React Router v6
* **Styling:** CSS3 (Custom Properties/Variables, Flexbox, CSS Grid)
* **Icons:** React Icons (FontAwesome, Material Design, Game Icons)
* **Animations:** Native CSS Keyframes and Transitions

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository
   git clone https://github.com/yourusername/veecious-security-website.git

2. Navigate to the project directory
   cd veecious-security-website

3. Install dependencies
   npm install

4. Start the development server
   npm start

The application will launch in your browser at http://localhost:3000.

## Customization

### Color Palette
The site uses a centralized CSS variable system defined in `src/styles/App.css`. You can adjust the theme by modifying the `:root` variables for `--black-primary`, `--navy-header`, and `--blue-medium`.

### Content Updates
* **Services:** Update the `services` array in `src/pages/Services.js`.
* **Pricing:** Update the pricing tables in `src/pages/Training.js`.
* **Images:** Replace assets in the `src/media/` folder and update import paths in the respective pages.
