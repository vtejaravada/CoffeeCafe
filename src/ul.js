import React from 'react';

// Define a functional component for the list
const MyList = (props) => {
  // Assuming props.items is an array of items
  const items = props.items;

  // Function to chunk the array into groups of size 'size'
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  // Chunk the items into groups of 4
  const rows = chunkArray(items, 4);

  return (
    <div>
      <h2>List Items</h2>
      
      {rows.map((row, rowIndex) => (

        <div key={rowIndex} style={{ display: 'flex' }}>
          
          {row.map((item, index) => (
            <div key={index} style={{ flex: 1 }}>
              {item && <li>{item}</li>}
            </div>
          ))}
          
          {row.length < 4 &&
            Array.from({ length: 4 - row.length }).map((_, index) => (
              <div key={`empty-${index}`} style={{ flex: 1 }}></div>
            ))}
        </div>
      ))}
    </div>
  );
};

// Define an array of 12 items
const myItems = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9',
  'Item 10',
  'Item 11',
  'Item 12'
];

// Render the list component with the array of items
const App = () => (
  <div>
    <h1>My List App</h1>
    <MyList items={myItems} />
  </div>
);

export default App;
