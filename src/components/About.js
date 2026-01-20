import React from 'react';

export default function About() {
  return (
    <div className="card shadow p-4">
      <h2 className="mb-3">About TypoFix</h2>

      <p>
        <strong>TypoFix</strong> is a modern React-based text utility application
        designed to help users efficiently edit, transform, and analyze text
        in real time. It provides a clean UI and multiple productivity-focused
        features commonly found in text editors.
      </p>

      <hr />

      <h4>🔹 Key Features</h4>
      <ul>
        <li>Convert text to Uppercase, Lowercase, and Capitalized format</li>
        <li>Find & Replace text functionality</li>
        <li>Undo and Redo support using stack-based state management</li>
        <li>Remove extra spaces, numbers, and special characters</li>
        <li>Text-to-Speech support using Web Speech API</li>
        <li>Multi-language UI support (English, Hindi, Marathi)</li>
        <li>Copy text with toast notification feedback</li>
        <li>Light and Dark mode toggle</li>
      </ul>

      <hr />

      <h4>🔹 Technology Stack</h4>
      <ul>
        <li><strong>Frontend:</strong> React.js (Functional Components, Hooks)</li>
        <li><strong>Routing:</strong> React Router DOM</li>
        <li><strong>Styling:</strong> Bootstrap 5</li>
        <li><strong>APIs:</strong> Clipboard API, Web Speech API</li>
      </ul>

      <hr />

      <h4>🔹 Learning Outcomes</h4>
      <ul>
        <li>Hands-on experience with React Hooks like useState</li>
        <li>Understanding state management and controlled components</li>
        <li>Implementing real-world features like Undo/Redo</li>
        <li>Building Single Page Applications using React Router</li>
        <li>Improving UI/UX using conditional rendering and themes</li>
      </ul>

      <hr />

      <h4>🔹 Future Enhancements</h4>
      <ul>
        <li>Download edited text as a .txt file</li>
        <li>Keyboard shortcuts (Ctrl + Z / Ctrl + Y)</li>
        <li>Character frequency analysis chart</li>
        <li>User authentication and saved notes</li>
      </ul>

      <p className="mt-3 text-muted">
        TypoFix is built as a learning-focused project to demonstrate practical
        React skills and real-world application features.
      </p>
    </div>
  );
}
