
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { getLocalStorageItem, setLocalStorageItem } from './helpers.js';
import CForm from './CForm';

const App = () => {

  const mainState = getLocalStorageItem('c-data');
  if (!mainState) setLocalStorageItem('c-data', {});

  return (
    <CForm/>
    
  );
}

export default App;
