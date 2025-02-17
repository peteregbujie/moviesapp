# React Movies App

A modern, responsive movie browsing application built with React, TypeScript, and Tailwind CSS. This application uses The Movie Database (TMDB) API to provide users with an engaging interface to discover and explore movies.

![React Movies App Screenshot]
![Home Page](screenshots/homepage.png)



## Features

- 🎬 Browse trending and popular movies
- 🔍 Search functionality with debounced input
- 🎯 Filter movies by genres
- 📱 Fully responsive design
- 🎨 Modern UI with smooth transitions
- 🚀 Fast performance with React Query caching
- 🎭 Detailed movie information pages


## Tech Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Query (TanStack Query)
- **Routing:** React Router v7
- **API Client:** Axios
- **Build Tool:** Vite
- **Icons:** Lucide React
- **URL State Management:** nuqs

## Prerequisites

Before you begin, ensure you have:
- Node.js (v18 or higher)
- npm or yarn
- TMDB API access token

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/peteregbujie/moviesapp.git
   cd moviesapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_TMDB_ACCESS_TOKEN=your_tmdb_access_token
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## License

This project is licensed under the MIT License
