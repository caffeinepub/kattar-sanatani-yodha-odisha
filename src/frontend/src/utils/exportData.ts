import { ContactSubmission } from '../backend';

export function convertToCSV(submissions: ContactSubmission[]): string {
  if (submissions.length === 0) {
    return 'Name,Email,Message\n';
  }

  const headers = ['Name', 'Email', 'Message'];
  const csvRows = [headers.join(',')];

  for (const submission of submissions) {
    const row = [
      escapeCSVField(submission.name),
      escapeCSVField(submission.email),
      escapeCSVField(submission.message),
    ];
    csvRows.push(row.join(','));
  }

  return csvRows.join('\n');
}

function escapeCSVField(field: string): string {
  // Escape double quotes and wrap in quotes if contains comma, newline, or quote
  if (field.includes(',') || field.includes('\n') || field.includes('"')) {
    return `"${field.replace(/"/g, '""')}"`;
  }
  return field;
}

export function convertToJSON(submissions: ContactSubmission[]): string {
  return JSON.stringify(submissions, null, 2);
}

export function downloadFile(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
