import { useSelector } from 'react-redux';

import createRoutes from './routes';

export default function App() {
  const signed = useSelector((state) => state.auth.signed);
  return createRoutes(signed);
}
