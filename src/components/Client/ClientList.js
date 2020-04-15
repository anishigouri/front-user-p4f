import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectClient } from '../../actions/ClientAction';
import './clientList.scss';

export default function ClientList() {
  const resultClients = useSelector((state) => state.clientReducer.fetchClient);
  const [device, setDevice] = useState('desktop');
  const [clients, setClients] = useState([]);
  const dispatch = useDispatch();
  const selectClientAction = (data) => dispatch(selectClient(data));

  function handleResize() {
    setDevice(window.innerWidth < 778 ? 'mobile' : 'desktop');
  }

  useEffect(() => {
    if (resultClients) { setClients(resultClients); }
    handleResize();
  }, [resultClients]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  function onSelect(clientId) {
    if (clientId) {
      const client = clients.find((c) => c.id === Number(clientId));
      selectClientAction(client);
    }
  }

  return (
    <>
      {
          device === 'desktop'
            ? (
              <div>
                {

                clients.map((item) => (
                  <div
                    role="presentation"
                    key={item.id}
                    className="ClientItem-main"
                    onClick={() => onSelect(item.id)}
                  >
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                    <p>{item.company.name}</p>
                  </div>
                ))
                  }
              </div>
            )
            : (
              <div className="ClientList-select">
                <select className="form-control" onChange={(e) => onSelect(e.target.value)}>
                  <option key={null}>Selecione</option>
                  {
                    clients.map((item) => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))
                  }
                </select>
              </div>
            )
        }
    </>
  );
}
