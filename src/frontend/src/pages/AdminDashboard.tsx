import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminGuard from '../components/AdminGuard';
import SubmissionsTable from '../components/SubmissionsTable';
import ExportButton from '../components/ExportButton';
import { useGetSubmissions } from '../hooks/useQueries';
import { useSubmissionFilter } from '../hooks/useSubmissionFilter';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Search, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { data: submissions = [], isLoading, error } = useGetSubmissions();
  const { filteredSubmissions, searchTerm, setSearchTerm, clearSearch } = useSubmissionFilter(submissions);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-12">
        <AdminGuard>
          <div className="container">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-saffron">
                  Admin Dashboard
                </h1>
                <Button
                  variant="outline"
                  onClick={() => navigate({ to: '/' })}
                >
                  Back to Home
                </Button>
              </div>
              <p className="text-muted-foreground">
                Manage and review all contact form submissions
              </p>
            </div>

            <Card className="border-border/50">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-saffron">Form Submissions</CardTitle>
                    <CardDescription>
                      {submissions.length} total submission{submissions.length !== 1 ? 's' : ''}
                      {searchTerm && ` • ${filteredSubmissions.length} filtered`}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExportButton submissions={filteredSubmissions} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by name, email, or message..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9 pr-9"
                    />
                    {searchTerm && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                        onClick={clearSearch}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>

                <SubmissionsTable
                  submissions={filteredSubmissions}
                  isLoading={isLoading}
                  error={error}
                />
              </CardContent>
            </Card>
          </div>
        </AdminGuard>
      </main>
      <Footer />
    </div>
  );
}
