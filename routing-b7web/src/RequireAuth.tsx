import { Navigate } from 'react-router-dom'

interface RequireAuthProps {
  children: JSX.Element;
}

export function RequireAuth({ children }: RequireAuthProps) {
  const isAuth = false;
  if (!isAuth) return <Navigate to="/" />

  return children;
}
