import React from 'react';

const StudentInfo = () => {
  const studentName = 'Cooper Armstrong';
  const GitHubLink = 'https://github.com/CooperA02';
  const pageLink = '/week-2/Page.js';

  return (
    <div>
      <h2>{studentName}</h2>
      <p>
        <a href={GitHubLink} target="_blank" rel="noopener noreferrer">
          Visit GitHub Account
        </a>
      </p>
    </div>
  );
};

export default StudentInfo;
