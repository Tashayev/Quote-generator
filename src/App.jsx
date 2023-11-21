import './App.css'
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTumblr, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import updateColors from "./assets/updateColors.js";

function App() {

  const [data, setData] = useState(null);
  const [randomQuote, setRandomQuote] = useState(null);
  const {quote, author} = randomQuote || {};

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
          .then(res => res.json())
      setData(response?.quotes);
    })();
  }, []);

  useEffect(() => {
    if (data) {
      setRandomQuote(getRandomQuoteFromJSON(data));
      updateColors();
    }
  }, [data]);

  const handleNewQuote=()=>{
    if(data) {
      setRandomQuote(getRandomQuoteFromJSON(data));
      updateColors();
    }
  }

  return (
      <>
        <div className="app">
          <div className="container">
            {quote && author && (
                <div className="wrapper">
                  <div className="quote-section">
                    <div className="quote">
                      <label ><FontAwesomeIcon icon={faQuoteLeft} className='quote-icon'/> {quote}</label>
                    </div>
                    <h5 className='author'>- {author}</h5>
                  </div>
                  <div className="buttons">
                    <div className="social-btn">
                      <a target={'_blank'} href="https://twitter.com/intent/tweet?hashtags=quotes&related=
                      freecodecamp&text=%22Certain%20things%20catch%20your%20eye%2C%20but%20pursue%2
                      0only%20those%20that%20capture%20the%20heart.%22%20%20Ancient%20Indian%20Proverb">
                        <button className='btn twitter'>
                          <FontAwesomeIcon icon={faTwitter} />
                        </button>
                      </a>
                      <a target={'_blank'} href="https://www.tumblr.com/widgets/share/tool?posttype=
                      quote&tags=quotes,freecodecamp&caption=%20Ancient%20Indian%20Proverb&content=
                      Certain%20things%20catch%20your%20eye%2C%20but%20pursue%20only%20those%20that%20capture
                      %20the%20heart.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=
                      tumblr_share_button">
                        <button className='btn tumblr'>
                          <FontAwesomeIcon icon={faTumblr} />
                        </button>
                      </a>
                    </div>
                    <button className='btn quote-btn'  onClick={handleNewQuote}>
                      New quote
                    </button>
                  </div>
                </div>
            )}
          </div>
          <h4>by Adil</h4>
        </div>
      </>
  );
}

export default App;


function getRandomQuoteFromJSON(jsonData) {
  try {

    if (!Array.isArray(jsonData)) {
      new Error('JSON data must be an array.');
    }

    const randomIndex = Math.floor(Math.random() * jsonData.length);

    return jsonData[randomIndex];
  } catch (error) {
    console.error('Error: ' + error.message);
    return null;
  }
}