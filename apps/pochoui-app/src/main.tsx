import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { PageAbout } from './app/routes/pageAbout';
import { PageComponents } from './app/routes/pageComponents';
import { PageDatePicker } from './app/routes/pageDatePicker';
import { PageGettingStarted } from './app/routes/pageGettingStarted';
import { PageLanding } from './app/routes/pageLanding';
import { PageRoot } from './app/routes/pageRoot';
import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageRoot />}>
          <Route index element={<PageLanding />} />
          <Route path="getting-started" element={<PageGettingStarted />} />
          <Route path="components" element={<PageComponents />} />
          <Route path="components/date-picker" element={<PageDatePicker />} />
          <Route path="about" element={<PageAbout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
