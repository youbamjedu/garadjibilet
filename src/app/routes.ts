import { createBrowserRouter } from 'react-router';
import { RootLayout } from './components/RootLayout';
import { Home } from './pages/Home';
import { Methodology } from './pages/Methodology';
import { About } from './pages/About';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'methodology', Component: Methodology },
      { path: 'about', Component: About },
    ],
  },
]);
