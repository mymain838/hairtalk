import { useEffect, useState } from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import Loading from '../../components/Loading';
import { auth } from '../firebase/firebase';

export default function Dresser() {
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
      ) : auth.currentUser !== null && auth.currentUser.role === 'dresser' ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
