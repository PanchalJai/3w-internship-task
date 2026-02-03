# Mini Social Post Application
### 3W Full Stack Internship Assignment

A full-stack social post application where users can register, log in, create posts (text/image), and view a public feed — inspired by the TaskPlanet social page.

- Link: https://3w-internship-task.vercel.app/

- basic authentication flow (register → login → create post → view feed).

## Live Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## Tech Stack
### Frontend
- React.js (Vite)
- React Bootstrap
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
  
### Database
-  MongoDB Atlas

## Features
### Authentication
- User Registration (Signup)
- User Login
- Secure authentication flow
### Create Post
- Create a post with:
  -  Text only
  -  Image URL only
  -  Text + Image
- Either field is sufficient
### Feed
- Public feed of all users’ posts
- Displays:
  - Username
  - Post content
  - Image (if available)
### Real-Time Updates
- Feed updates immediately after post creation
- Refresh function passed to components

## Stracture 

root/

│

├── frontend/

│   ├── src/

│   │   ├── components/

│   │   ├── pages/

│   │   │   ├── Feed.jsx

│   │   │   └── CreatePost.jsx

│   │   ├── services/

│   │   │   └── api.js

│   │   └── App.jsx

│   └── package.json

│

├── backend/

│   ├── routes/

│   ├── controllers/

│   ├── models/

│   ├── app.js

│   └── server.js

│

└── README.md

