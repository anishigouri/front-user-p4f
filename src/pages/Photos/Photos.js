import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos } from '../../actions/ClientAction';
import PhotosList from '../../components/Photos/PhotosList';
import './photos.scss';

export default function Photos() {
  const client = useSelector((state) => state.clientReducer.selectClient);
  const result = useSelector((state) => state.clientReducer.fetchPhotos);

  const dispatch = useDispatch();
  const fetchPhotosAction = (clientId) => dispatch(fetchPhotos(clientId));

  const [photos, setPhotos] = useState([]);
  const [photoSelected, setPhotoSelected] = useState('');

  useEffect(() => {
    if (client) {
      fetchPhotosAction(client.id);
    }
  }, [client]);

  useEffect(() => {
    if (result) {
      setPhotos(result);
    }
  }, [result]);

  function onSelect(photo) {
    setPhotoSelected(photo);
  }

  return (
    <div className="Photos-main">
      {
        photos.length > 0
        && (
        <>
          <div className="Photos-image">
            <img
              className="img-fluid"
              alt={photoSelected.id}
              src={`${photoSelected}`}
            />
          </div>
          <PhotosList photos={photos} onSelect={onSelect} />
        </>
        )
      }

    </div>
  );
}
