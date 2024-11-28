// public/javascripts/app.js

// Hente og vise innleggene
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
    postElement.appendChild(document.createElement("hr"));
    
    postsContainer.insertBefore(postElement, postsContainer.firstChild);
  });
}

// Legge til nytt innlegg
document.getElementById("postForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const content = document.getElementById("content").value;

  const response = await fetch("/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, content }),
  });

  if (response.ok) {
    document.getElementById("username").value = "";
    document.getElementById("content").value = "";
    fetchPosts(); // Oppdater innleggene etter publisering
  }
});

// Kaller funksjonen for å vise innlegg når siden lastes
fetchPosts();
