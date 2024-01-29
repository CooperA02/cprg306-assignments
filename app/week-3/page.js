import React from "react";
import ItemList from './item-list';

export default function Page() {
  return (
    <div>
      <ItemList />
      <main>
        <h1>
        <a href='/Home' style={{ color: 'blue' }}>
            Home
          </a>
        </h1>
      </main>
    </div>
  );
}
