import './App.css';
// import './css/sass/index.scss';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // eslint-disable-line import/no-extraneous-dependencies
// import AuthRoutes from '@/routes/AuthRoutes';
// import ProtectedRoutes from '@/routes/ProtectedRoutes';
import { CookiesProvider } from 'react-cookie'; // eslint-disable-line import/no-extraneous-dependencies
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // eslint-disable-line import/no-extraneous-dependencies
import SignInSide from '@/components/sign-in-side/SignInSide';
import Home from '@/components/home/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
        //現在のタブで開く
        <a href="https://www.google.com/">Text</a>
//新しいタブで開く
        <a target="_blank" href="https://www.google.com/">Text</a>
//https://www.pazru.net/html5/File/sample.txt
        <a target="_blank" href="https://www.pazru.net/html5/File/sample.txt">Text</a>
//URL Schemeを使用する場合
        <a href="note:///www.pazru.net/html5/File/sample.txt">sample.txtへのリンク</a>
        <a href="nmobilenotes://www.pazru.net/html5/File/sample.txt">sample.txtへのリンク</a>
        <SignInSide />
        {/* <Home /> */}
      </header>
    </div>
  );
}

export default App;
