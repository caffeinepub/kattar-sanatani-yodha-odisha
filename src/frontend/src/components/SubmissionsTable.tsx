import { ContactSubmission } from '../backend';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Alert, AlertDescription } from './ui/alert';
import { AlertCircle, Inbox } from 'lucide-react';

interface SubmissionsTableProps {
  submissions: ContactSubmission[];
  isLoading: boolean;
  error: Error | null;
}

export default function SubmissionsTable({ submissions, isLoading, error }: SubmissionsTableProps) {
  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-saffron border-r-transparent"></div>
        <p className="mt-4 text-muted-foreground">Loading submissions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Failed to load submissions: {error.message}
        </AlertDescription>
      </Alert>
    );
  }

  if (submissions.length === 0) {
    return (
      <div className="text-center py-12">
        <Inbox className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
        <p className="text-muted-foreground">No submissions found</p>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-border/50 overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead className="w-[250px]">Email</TableHead>
              <TableHead>Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((submission, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{submission.name}</TableCell>
                <TableCell className="text-muted-foreground">{submission.email}</TableCell>
                <TableCell className="max-w-md">
                  <div className="line-clamp-3 text-sm">{submission.message}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
