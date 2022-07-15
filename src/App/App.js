import { useState } from 'react';
import axios from 'axios';

import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Links } from '../components/Links/Links';
import { LinksItem } from '../components/LinksItem/LinksItem';
import { Navbar } from '../components/Navbar/Navbar';
import { Statistics } from '../components/Statistics/Statistics';
import { useLocalStorage } from '../hooks/useLocalStorage';

import '../scss/app.scss';

export function App() {
  const [dataURL, setDataURL] = useLocalStorage('SHORTER_URL', []);
  const [loading, setLoading] = useState(false);

  const shorterURL = async (url) => {
    try {
      const res = await axios.post(
        `https://api.shrtco.de/v2/shorten?url=${url}`,
        url
      );
      const dataJSON = await res.data;
      const newURL = [...dataURL];
      newURL.push({ url: url, shorterURL: dataJSON.result.full_short_link });
      setDataURL(newURL);
      setLoading(false);
    } catch (error) {
      if (error.response.data.error_code === 1) {
        console.log('Please add a link');
        setLoading(false);
      }
    }
  };

  console.log('yes', dataURL);

  return (
    <>
      <Navbar />
      <Header />
      <Links loading={loading} setLoading={setLoading} shorterURL={shorterURL}>
        {dataURL.map((value) => (
          <LinksItem
            key={value.url}
            url={value.url}
            shorterURL={value.shorterURL}
          />
        ))}
      </Links>
      <Statistics />
      <Footer />
    </>
  );
}
