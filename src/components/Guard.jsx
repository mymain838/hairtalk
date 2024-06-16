import { useEffect, useState } from 'react';
import { auth } from '../utils/firebase/firebase';
import { Navigate } from 'react-router-dom';
import Loading from './Loading';

export default function Guard() {
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
      ) : auth.currentUser === null ? (
        <Navigate to="/login" />
      ) : auth.currentUser.role === 'admin' ? (
        <Navigate to="/admin" />
      ) : auth.currentUser.role === 'dresser' ? (
        <Navigate to="/dresser" />
      ) : (
        <Navigate to="/user" />
      )}
    </>
  );
}
