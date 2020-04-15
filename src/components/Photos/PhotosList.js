import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './photosList.scss';

export default function PhotosList({ onSelect, photos }) {
  const [rangeSelected, setrangeSelected] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    onSelect(photos[0].url);
  }, [photos]);

  useEffect(() => {
    const slice = photos.slice(rangeSelected, rangeSelected + 4);
    setList(slice);
  }, [rangeSelected, photos]);

  function selectIndex(direction) {
    if (direction === 'R') {
      setrangeSelected(rangeSelected + 4);
    } else {
      setrangeSelected(rangeSelected - 4);
    }
  }

  return (
    <div className="PhotosList-main">
      <>
        <FaAngleLeft
          className={!rangeSelected && 'd-none'}
          onClick={() => selectIndex('L')}
          size={40}
        />
        {
          list.map((photo, index) => (
            <div
              role="presentation"
              key={photo.id}
              className="PhotoList-item"
              onClick={() => onSelect(photo.url)}
            >
              <img className="img-fluid" src={photo.thumbnailUrl} alt={index} />
            </div>
          ))
        }
        <FaAngleRight
          className={(rangeSelected + 4 > photos.length) && 'd-none'}
          onClick={() => selectIndex('R')}
          size={40}
        />
      </>
    </div>
  );
}

PhotosList.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
};
