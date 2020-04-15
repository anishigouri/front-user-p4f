import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './loading.scss';

export default function Loading() {
  const result = useSelector((state) => state.loadingReducer.loading);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(result);
  }, [result]);

  return (
    <div id="loading" className={`${show ? '' : 'd-none'}`}>
      <div className="folding-cube">
        <div className="cube1 cube" />
        <div className="cube2 cube" />
        <div className="cube4 cube" />
        <div className="cube3 cube" />
      </div>
    </div>
  );
}
