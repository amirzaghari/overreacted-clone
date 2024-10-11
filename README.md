
# Overreacted Clone

This project is a clone of Dan Abramov's personal blog [Overreacted](https://overreacted.io) using Next.js. It features a home page listing posts and a detailed post page. It includes a dark/light theme toggle feature that uses Redux for state management and persists the theme across sessions.

## Features
- **Home Page**: Displays a list of blog posts similar to the original website.
- **Post Page**: Displays the title, publication date, and body of a selected post.
- **Dark/Light Mode**: Users can toggle between dark and light themes, with the state managed by Redux.
- **Data Fetching**: Uses `react-query` to fetch posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts).
- **TypeScript**: Optional setup for type safety.
- **Sass/CSS Modules**: Used for styling.
- **Unit Testing**: Includes tests for components and functionality.

## Tech Stack
- **Next.js**: Framework for server-side rendering and static site generation.
- **React Query**: For data fetching and caching.
- **Redux & Redux Toolkit**: For state management (theme toggle).
- **Sass**: For styling.
- **TypeScript**: Type-safe development.

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/YOUR_USERNAME/overreacted-clone.git
   ```
2. Navigate to the project directory:
   ```
   cd overreacted-clone
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Project
To start the development server, run:
```
npm run dev
```
The application will be available at `http://localhost:3000`.

## Build for Production
To build the application for production, run:
```
npm run build
```
After building, you can start the server with:
```
npm start
```

## Testing
To run tests, use:
```
npm run test
```

## Contributing
Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.
