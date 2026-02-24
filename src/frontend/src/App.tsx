import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { InternetIdentityProvider } from './hooks/useInternetIdentity';
import { Toaster } from './components/ui/sonner';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import './index.css';

const queryClient = new QueryClient();

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  ),
});

// Home route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

// Admin route
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: AdminDashboard,
});

// Create route tree
const routeTree = rootRoute.addChildren([indexRoute, adminRoute]);

// Create router
const router = createRouter({ routeTree });

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <InternetIdentityProvider>
        <RouterProvider router={router} />
      </InternetIdentityProvider>
    </QueryClientProvider>
  );
}

export default App;
