import { useState } from 'react';
import { Button } from 'react-bootstrap';
import getJoke from '../api/jokeData';
import Joke from '../components/Joke';

function Home() {
  const [btnText, setBtnText] = useState('Joke');
  const [joke, setJoke] = useState({});

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      setButton('Punchline');
    });
  };

  return (
    <>
      <Joke joke={joke} btnText={btnText} />
      {btnText === 'Joke' || btnText === 'New Joke' ? (
        <Button type="button" onClick={getAJoke}>   {btnText}
        </Button>
      ) : (
        <Button type="button" onClick={() => setButton('New Joke')}>{btnText}
        </Button>
      )}
    </>
  );
}

export default Home;
