import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Loading from '../components/Loading/Loading';
import ClientList from '../components/Client/ClientList';
import Navbar from '../components/Navbar/Navbar';
import Infos from '../components/Infos/Infos';
import fetchClient from '../actions/ClientAction';
import './index.scss';

export function Main({ children }) {
  const dispatch = useDispatch();
  const fetchClientAction = () => dispatch(fetchClient());
  const client = useSelector((state) => state.clientReducer.selectClient);

  useEffect(() => {
    fetchClientAction();
  }, []);
  return (
    <div>
      <Loading />
      <Header />
      <div className="Index-body">
        <ClientList />
        {
          client
          && (
            <div className="Index-content">
              <Navbar />
              <Infos />
              { children }
            </div>
          )
        }
      </div>
    </div>
  );
}

export default function DefaultLayoutRoute({ component: Component }) {
  return (
    <Route
      render={() => (
        <Main>
          <Component />
        </Main>
      )}
    />
  );
}

Main.defaultProps = {
  children: {},
};

Main.propTypes = {
  children: PropTypes.shape({}),
};

DefaultLayoutRoute.propTypes = {
  component: PropTypes.element.isRequired,
};
