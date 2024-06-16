import { useEffect, useState } from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import Loading from '../../components/Loading';

export default function Admin() {
  const [loading, setLoading] = useState(true);
  console.log(loading);
  const initAuth = async () => {
    await auth.authStateReady();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    initAuth();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : auth.currentUser !== null && auth.currentUser.role === 'admin' ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
