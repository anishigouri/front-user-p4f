import React from 'react';
import { useSelector } from 'react-redux';
import './infos.scss';

export default function Infos() {
  const data = useSelector((state) => state.clientReducer.selectClient);
  return (
    <>
      {
        (data && data.id)
        && (
        <div className="Infos-main">
          <p>{ data.name }</p>
          <p>{ data.address.street }</p>
          <p>{ data.address.suite }</p>
          <p>
            { data.address.city }
            {' '}
            -
            {' '}
            {data.address.zipcode}
          </p>
        </div>
        )
      }
    </>
  );
}
