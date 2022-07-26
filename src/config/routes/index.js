import { Home, About, Doctor, Apps, Testimonials } from 'container/pages';

const AppRoutes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/doctor',
    element: <Doctor />
  },
  {
    path: '/apps',
    element: <Apps />
  },
  {
    path: '/testimonials',
    element: <Testimonials />
  },
  {
    path: '/about',
    element: <About />
  }
];

export default AppRoutes;
