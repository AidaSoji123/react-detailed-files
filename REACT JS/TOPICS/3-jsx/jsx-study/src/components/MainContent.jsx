import React from 'react';

const MainContent = () => {
  return (
    <main>
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Main Content</h2>
          <p className="card-text">
            This is an example of a simple React component using JSX.
          </p>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Another Section</h2>
          <p className="card-text">
            JSX allows you to write HTML-like syntax directly in your JavaScript code.
          </p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
