import './App.css';
import CakeContainer from './Components/cake/CakeContainer';
import {Provider} from 'react-redux';
import store from './redux/store';
import HookCakeContainer from './Components/cake/HookCakeContainer';
import IceCreamContainer from './Components/iceCreams/IceCreamContainer';
import NewCakeContainer from './Components/cake/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <CakeContainer/>
          <HookCakeContainer/>
          <IceCreamContainer/>
          <NewCakeContainer/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
