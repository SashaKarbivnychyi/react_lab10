import { useState, useEffect } from 'react';
import Helpers from './helpers';

import Content from './Content/Content';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import People from './People/People';

function App() {
  const [cache, _setCache] = useState(new Helpers());
  const [id, setId] = useState(undefined);
  const [response, setResponse] = useState("");

  const fireCache = () => {
    id === "" ?
      setResponse(cache.getId(undefined)) :
    setResponse(cache.getId(id));
  };

  return (
    <div className="App">
      <Header name="website (Header)"></Header>
      <SideBar name="SideBar"></SideBar>
      <Content name="Content">
        <h1>Hello from Next.js</h1>
        <div>
        <div>
          <input
            type="text"
            placeholder="param"
            onChange={(e) => {
              console.log(e.target.value);
              setId(e.target.value);
            }}
          />
          <button onClick={() => fireCache()}>Fire</button>
        </div>

        <textarea
          name="helperOutput"
          id="helperOutput"
          value={response}
          readOnly
        ></textarea>
      </div>
      <People />
      </Content>
      <Footer name="Footer"></Footer>
    </div>
  );
}

export default App;
