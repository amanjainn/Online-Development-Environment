import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state';
import CellList from './components/cell-list';
import Navbar from './components/navbar';



const App = () => {
  return (<>
    <Navbar/>
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  </>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
