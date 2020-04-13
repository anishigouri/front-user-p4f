import React from 'react';
import { useSelector } from 'react-redux';

export default function Client() {
  const clients = useSelector((state) => state.data);
  return (
    <div>
      {
        clients.map((client) => <div>{ client.name }</div>)
      }
    </div>
  );
}
