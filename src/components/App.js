import React from "react";
import blogData from "../data/blog";
import Header from './Header'; // adjust the path if needed
import About from './About';
import ArticleList from './ArticleList';
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    date: "April 15, 2025",
    preview: "Learn the basics of React, including components, JSX, and state."
  },
  {
    id: 2,
    title: "Hooks in Depth",
    date: "April 16, 2025",
    preview: "Explore React Hooks like useState and useEffect."
  }
];



console.log(blogData);

function App() {
  return (
    <div className="App">
            <Header name="My Awesome Blog" />
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <About 
        image="https://your-image-url.com/logo.png" 
        about="Welcome to my blog where I share everything about tech and creativity!" 
      />
      <ArticleList posts={blogPosts} />
    </div>
  );
}

export default App;
