'use client';
import React from 'react';
import NewItem from './new-item';

const NewItemPage = () => {
  const handleFormSubmit = (formData) => {
    console.log('Form submitted with data:', formData);
  };

  return (
    <div>
      <h1>
      <a href='/Home' style={{ color: 'blue' }}> Home </a>
      </h1>
      <h1 style={{ color: 'darkgray', fontSize: 30, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>Add a new item:</h1>
      <NewItem onSubmit={handleFormSubmit} />
    </div>
  );
};

export default NewItemPage;
