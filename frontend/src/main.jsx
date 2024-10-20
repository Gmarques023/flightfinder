import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/store.js'; // Import the store you created
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
