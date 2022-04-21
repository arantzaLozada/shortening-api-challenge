import { Header } from '../components/Header/Header';
import { Links } from '../components/Links/Links';
import { Navbar } from '../components/Navbar/Navbar';

import '../scss/app.scss';

export function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Links>yes</Links>
      <div>yes</div>
    </>
  );
}
