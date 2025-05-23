import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getSettings } from '../../services/SettingsService';
import { doLogout } from '../../services/AuthService';

export default function Settings() {

  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [settings, setSettings] = useState({
    email: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    getSettings(token)
      .then(response => {
        setSettings(response);
      })
      .catch(err => {
        if (err.response && err.response.status === 401)
          return navigate('/');

        if (err.response)
          setError(err.response);
        else
          setError(err.message);
      });
  }, []);

  function onLogoutClick() {
    const token = localStorage.getItem('token');
    doLogout(token)
      .then(() => {
        localStorage.removeItem('token');
        navigate('/');
      })
      .catch(err => {
        setError(err.message);
      });
  }

  return (
    <div>
      <main>
        <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
          <div className="container">
            <p className="text-center">
              <Link to="/" className="d-flex align-items-center justify-content-center">
                <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                {settings.email}
              </Link>
              <button className='btn btn-primary' onClick={onLogoutClick}>Sair</button>
              {
                error
                  ? <div className='alert alert-danger'>{error}</div>
                  : <></>
              }
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}