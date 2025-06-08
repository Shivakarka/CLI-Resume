#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';

const heading = chalk.green.bold('Shiva Karka');
const contact = `${chalk.white('+91-8686680384')} | ${chalk.cyan('shivakarka@gmail.com')}
${chalk.cyan('linkedin.com/in/shivakarka')} | ${chalk.cyan('github.com/shivakarka')}`;

const education = `
${chalk.yellow.bold('Education')}
• B.Tech in Electrical and Electronics Engineering
  Malla Reddy Engineering College, Telangana
  Sep 2012 – April 2016
`;

const experience = `
${chalk.yellow.bold('Experience')}
• ${chalk.bold('Software Development Engineer')} @ Aapastech
  Jan 2023 – Mar 2023 (Remote)
  - Built Express.js + MongoDB APIs for job portal with Swagger docs
  - Improved home UI with React.js for better engagement

• ${chalk.bold('Process Specialist')} @ Cognizant
  Jun 2018 – May 2022, Hyderabad
  - Led 3D maps data QC & training, cut onboarding time by 30%
  - Fixed critical bugs, boosted data pipeline quality

• ${chalk.bold('Analyst')} @ Intelenet Global Services
  Oct 2016 – May 2018, Hyderabad
  - Enhanced map accuracy by 20% with GIS fixes
  - Improved terrain imagery & data quality by 25%
`;

const projects = `
${chalk.yellow.bold('Projects')}
• ${chalk.bold('Game Hub')} (React, TypeScript, Chakra, Zustand)
  - Responsive game explorer via RAWG API, infinite scroll, filters

• ${chalk.bold('Tomato')} (MERN, TS, Stripe)
  - Full-stack food delivery app with Stripe integration and admin panel

• ${chalk.bold('LinkedIn Clone')} (React, Express, MongoDB, TS)
  - JWT auth, profile mgmt, post interactions, real-time notifications
`;

const skills = `
${chalk.yellow.bold('Technical Skills')}
Languages: JavaScript, TypeScript, Python, Java, HTML/CSS
Frameworks: React.js, Express.js, Next.js, React Native
Libraries: Zustand, Redux, Tailwind CSS, Chakra UI, Prisma, Mongoose
Databases: MongoDB, MySQL, PostgreSQL, Redis
Tools: Git, Docker, AWS, Vercel, Postman, VS Code, IntelliJ
APIs: REST APIs, Stripe, Cloudinary, RAWG, MailTrap
`;

const output = `
${heading}
${contact}
${education}
${experience}
${projects}
${skills}
`;

console.log(
  boxen(output, {
    padding: 1,
    borderStyle: 'round',
    borderColor: 'green',
    dimBorder: true
  })
);
