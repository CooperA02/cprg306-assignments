import React from 'react';
import StudentInfo from './student-info'; 

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <StudentInfo />
      <h1>
      <a href='/Home' style={{ color: 'blue' }}>
            Home
          </a>
      </h1>
    </main>
  );
}
