# Next.js Project Setup and Basics

## Introduction

This repository contains a comprehensive Next.js project built with TypeScript and Tailwind CSS. It demonstrates modern web development practices including server-side rendering, reusable components, API integration, and responsive design.

The project showcases how to build a scalable and maintainable web application using the latest React and Next.js features, following industry best practices.

## Project Overview

This project is part of the ALX Software Engineering program and focuses on:

- Setting up a Next.js application with TypeScript
- Implementing routing using the Pages Router
- Creating reusable, type-safe components
- Fetching and displaying data from external APIs
- Building responsive layouts with Tailwind CSS
- Following modern web development best practices

## Features

- 🚀 **Next.js 14** - Latest React framework with server-side rendering
- 📘 **TypeScript** - Type-safe code for better development experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🔄 **API Integration** - Fetching data from JSONPlaceholder API
- 📱 **Responsive Design** - Mobile-first approach with Tailwind
- 🧩 **Reusable Components** - Modular component architecture
- 🛣️ **Dynamic Routing** - Page-based routing system

## Project Structure

```
alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx          # Reusable button component
│   │   ├── Card.tsx            # Card component for content display
│   │   ├── PostCard.tsx        # Component for displaying posts
│   │   ├── PostModal.tsx       # Modal for creating new posts
│   │   └── UserCard.tsx        # Component for displaying user info
│   └── layout/
│       └── Header.tsx          # Navigation header component
├── interfaces/
│   └── index.ts                # TypeScript interfaces
├── pages/
│   ├── _app.tsx                # App wrapper component
│   ├── _document.tsx           # Document structure
│   ├── about.tsx               # About page
│   ├── home.tsx                # Home page with dynamic content
│   ├── index.tsx               # Landing page
│   ├── posts.tsx               # Posts listing page
│   └── users.tsx               # Users listing page
├── public/
│   └── assets/
│       └── images/             # Static images
├── styles/
│   └── globals.css             # Global styles with Tailwind
├── .eslintrc.json              # ESLint configuration
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Getting Started

### Prerequisites

- Node.js 16 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/alx-project-0x02-setup.git
cd alx-project-0x02-setup/alx-project-0x02
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Run development server on http://localhost:3000
- `npm run build` - Build production-ready application
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Components

### Button Component
A reusable button with configurable size and shape:
- Sizes: small, medium, large
- Shapes: rounded-sm, rounded-md, rounded-full

### Card Component
A versatile card component for displaying content with title and body.

### PostCard Component
Displays post information fetched from the JSONPlaceholder API including:
- User ID
- Post ID
- Title
- Content

### UserCard Component
Displays user details including:
- Name and username
- Email and phone
- Address information
- Company details

### PostModal Component
An interactive modal for creating new posts with form validation.

### Header Component
A navigation component with links to all pages in the application.

## Pages

- **/** - Landing page with welcome message
- **/home** - Home page with card components and post creation
- **/about** - About page with button component examples
- **/posts** - Displays posts fetched from JSONPlaceholder API
- **/users** - Displays users fetched from JSONPlaceholder API

## API Integration

This project integrates with the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API for demo data:

- **Posts API**: `https://jsonplaceholder.typicode.com/posts`
- **Users API**: `https://jsonplaceholder.typicode.com/users`

## Technologies Used

- **Next.js 14** - React framework for production
- **React 18** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Tailwind CSS 3** - Utility-first CSS framework
- **ESLint** - Code linting tool
- **PostCSS** - CSS transformation tool

## Best Practices Implemented

1. **Component Organization**: Components are organized by domain (common, layout)
2. **Type Safety**: TypeScript interfaces for all props and data structures
3. **Responsive Design**: Mobile-first approach with Tailwind CSS
4. **Code Quality**: ESLint configuration for consistent code style
5. **Separation of Concerns**: Clear separation between pages, components, and interfaces
6. **Reusability**: All components are designed to be reusable
7. **Error Handling**: Proper error handling for API calls
8. **Loading States**: User-friendly loading indicators

## Learning Outcomes

By working on this project, you will learn:

- How to set up a Next.js project with TypeScript and Tailwind CSS
- Implementing routing using the Pages Router
- Creating reusable, type-safe components
- Fetching and displaying data from APIs
- Managing component state with React hooks
- Building responsive layouts
- Following modern web development best practices

## Contributing

This is an educational project. Feel free to fork and experiment with the code!

## License

This project is part of the ALX Software Engineering program.

## Author

ALX Student - Software Engineering Program

## Acknowledgments

- ALX Africa for the project requirements
- Next.js team for excellent documentation
- JSONPlaceholder for providing free fake API for testing
