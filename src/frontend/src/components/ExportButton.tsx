import { ContactSubmission } from '../backend';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Download, FileJson, FileSpreadsheet } from 'lucide-react';
import { convertToCSV, convertToJSON, downloadFile } from '../utils/exportData';
import { toast } from 'sonner';

interface ExportButtonProps {
  submissions: ContactSubmission[];
}

export default function ExportButton({ submissions }: ExportButtonProps) {
  const handleExportCSV = () => {
    try {
      const csv = convertToCSV(submissions);
      downloadFile(csv, 'submissions.csv', 'text/csv');
      toast.success('Exported as CSV successfully');
    } catch (error) {
      toast.error('Failed to export CSV');
      console.error('Export error:', error);
    }
  };

  const handleExportJSON = () => {
    try {
      const json = convertToJSON(submissions);
      downloadFile(json, 'submissions.json', 'application/json');
      toast.success('Exported as JSON successfully');
    } catch (error) {
      toast.error('Failed to export JSON');
      console.error('Export error:', error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleExportCSV} className="gap-2">
          <FileSpreadsheet className="h-4 w-4" />
          Export as CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleExportJSON} className="gap-2">
          <FileJson className="h-4 w-4" />
          Export as JSON
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
