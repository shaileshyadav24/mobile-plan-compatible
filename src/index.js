import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store/store'
import { QueryClient, QueryClientProvider } from 'react-query';

async function enableMocking() {
  const { worker } = await import('./mocks/browser')
  return worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'));

enableMocking().then(() => {
  root.render(
    <QueryClientProvider client={new QueryClient()}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
