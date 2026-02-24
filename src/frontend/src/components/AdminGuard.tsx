import { ReactNode } from 'react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useAdminCheck } from '../hooks/useAdminCheck';
import LoginButton from './LoginButton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Shield, ShieldAlert } from 'lucide-react';

interface AdminGuardProps {
  children: ReactNode;
}

export default function AdminGuard({ children }: AdminGuardProps) {
  const { identity, isInitializing } = useInternetIdentity();
  const { data: isAdmin, isLoading: isCheckingAdmin, isFetched } = useAdminCheck();

  const isAuthenticated = !!identity;

  // Show loading state while initializing or checking admin status
  if (isInitializing || (isAuthenticated && isCheckingAdmin)) {
    return (
      <div className="container py-16">
        <Card className="max-w-md mx-auto border-border/50">
          <CardContent className="pt-6 text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-saffron animate-pulse" />
            </div>
            <p className="text-muted-foreground">Verifying access...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show login prompt if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="container py-16">
        <Card className="max-w-md mx-auto border-border/50">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-saffron" />
            </div>
            <CardTitle className="text-2xl text-saffron">Admin Access Required</CardTitle>
            <CardDescription>
              Please log in to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <LoginButton />
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show access denied if authenticated but not admin
  if (isFetched && !isAdmin) {
    return (
      <div className="container py-16">
        <Card className="max-w-md mx-auto border-destructive/50">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <ShieldAlert className="h-12 w-12 text-destructive" />
            </div>
            <CardTitle className="text-2xl text-destructive">Access Denied</CardTitle>
            <CardDescription>
              You do not have permission to access this page. Only administrators can view the admin dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <LoginButton />
          </CardContent>
        </Card>
      </div>
    );
  }

  // Render children if authenticated and admin
  return <>{children}</>;
}
