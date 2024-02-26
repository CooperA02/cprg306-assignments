import React from "react";
import ItemList from './item-list';

export default function Page() {
  return (
    <div>
      <main>
        <a href='/Home' style={{ color: 'blue' }}>
            Home
        </a>
          <h1>
            <ItemList />
          </h1>
      </main>
    </div>
  );
}
