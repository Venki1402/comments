# Comments Section Project

## Description
This project is a React-based comments section that allows users to add comments, reply to comments, edit comments, and delete comments. It features a hierarchical comment structure, real-time updates, and persistent storage using localStorage.

## Features
- Add top-level comments
- Reply to comments (nested comments)
- Edit comments and replies
- Delete comments and replies
- Sort comments by date
- Persistent storage using localStorage
- Responsive design

## Technologies Used
- React
- CSS Modules
- date-fns (for date formatting)
- localStorage (for data persistence)

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/Venki1402/comments.git
   ```
2. Navigate to the project directory:
   ```
   cd comments
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm run dev
   ```
2. Open your browser and visit `http://localhost:5173` (or the port shown in your terminal).

## Project Structure
```
src/
├── components/
│   ├── Comment/
│   │   ├── Comment.jsx
│   │   └── Comment.module.css
│   ├── CommentForm/
│   │   ├── CommentForm.jsx
│   │   └── CommentForm.module.css
│   ├── CommentList/
│   │   ├── CommentList.jsx
│   │   └── CommentList.module.css
│   └── CommentsSection/
│       ├── CommentsSection.jsx
│       └── CommentsSection.module.css
├── hooks/
│   └── useLocalStorage.js
├── App.css
├── App.jsx
└── main.jsx
```

## Components
- **CommentsSection**: Main component that manages the state and orchestrates other components.
- **CommentList**: Renders the list of comments.
- **Comment**: Represents an individual comment or reply.
- **CommentForm**: Reusable form for adding comments and replies.

## Custom Hooks
- **useLocalStorage**: Custom hook for managing localStorage operations.

## Styling
The project uses CSS Modules for component-specific styling, ensuring that styles are scoped to their respective components.

## Data Persistence
Comments are stored in the browser's localStorage, allowing the data to persist across page reloads.

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Contact
Sai Venkatesh Alampally - [sai.23bcs10095@ms.sst.scaler.com](sai.23bcs10095@ms.sst.scaler.com)

Project Link: https://github.com/Venki1402/comments.git