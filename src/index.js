import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Navbar from './components/navbar/Navbar';
import { Provider } from 'react-redux';
import store from './redux/Store';
import { debounce } from 'debounce';
import { saveState } from './redux/StorageHandler';

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
