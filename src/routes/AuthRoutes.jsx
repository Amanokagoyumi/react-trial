// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SignInSide from '@/components/sign-in-side/SignInSide';

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path='SignInSide' element={<SignInSide />} />
    </Routes>
  );
}
