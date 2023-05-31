import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Listing } from './components/Listing';
import { IItem } from './models/IItem';
import { data } from './data/etsy';

function App() {

  const items: Required<IItem>[] = data.filter((e) => e.state === "active").map((e) => e as IItem);

  return (
    <div className="">
      <Listing items={items} />
    </div>
  );
}

export default App;
