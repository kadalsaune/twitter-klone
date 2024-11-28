# Karlarne-cha-24 Web App

This is a web application built with Express.js that allows users to fetch and post content. The application is secured using Helmet to mitigate common web vulnerabilities.

## Features

- Fetch and display posts
- Create new posts
- Basic security measures using Helmet

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/karlarne-cha-24.git
   cd karlarne-cha-24

2. Install dependencies:
```
npm install
```
3. Start the application:
```
npm start
```

## Usage
* Navigate to http://localhost:3000 in your web browser.
* You can view existing posts and create new ones.

## Security Measures
This application uses several security measures to protect against common web vulnerabilities:

**1. Helmet Middleware:**

* Sets various HTTP headers to secure the app.
* Configures Content Security Policy (CSP) to prevent XSS attacks.

**2. Sanitizing User Input:**

* Uses textContent instead of innerHTML to avoid injecting HTML directly.

## Example Code
### Fetching and Displaying Posts

```javascript
async function fetchPosts() {
  const response = await fetch("/posts");
  const posts = await response.json();
  const postsContainer = document.getElementById("postsContainer");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    const usernameElement = document.createElement("h3");
    const contentElement = document.createElement("p");
    const timestampElement = document.createElement("small");

    usernameElement.textContent = post.username;
    contentElement.textContent = post.content;
    timestampElement.textContent = post.timestamp;

    postElement.appendChild(usernameElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(timestampElement);
    postsContainer.appendChild(postElement);
  });
}
```
## Creating a New Post
```javascript
const content = document.getElementById("content").value;

const response = await fetch("/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username, content }),
});
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
