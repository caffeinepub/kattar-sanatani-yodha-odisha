import { useState, useMemo } from 'react';
import { ContactSubmission } from '../backend';

export function useSubmissionFilter(submissions: ContactSubmission[]) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSubmissions = useMemo(() => {
    if (!searchTerm.trim()) {
      return submissions;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();

    return submissions.filter((submission) => {
      return (
        submission.name.toLowerCase().includes(lowerSearchTerm) ||
        submission.email.toLowerCase().includes(lowerSearchTerm) ||
        submission.message.toLowerCase().includes(lowerSearchTerm)
      );
    });
  }, [submissions, searchTerm]);

  const clearSearch = () => setSearchTerm('');

  return {
    filteredSubmissions,
    searchTerm,
    setSearchTerm,
    clearSearch,
  };
}
