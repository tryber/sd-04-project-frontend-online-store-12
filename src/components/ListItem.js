import React from 'react';

const ListItem = ({ prod: { title } }) => (
  <div data-testid="product">
    <p>{title}</p>
  </div>
);

export default ListItem;
