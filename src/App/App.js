import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Links } from '../components/Links/Links';
import { LinksItem } from '../components/LinksItem/LinksItem';
import { Navbar } from '../components/Navbar/Navbar';
import { Statistics } from '../components/Statistics/Statistics';

import '../scss/app.scss';

export function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Links>
        <LinksItem />
      </Links>
      <Statistics />
      <Footer />
    </>
  );
}
