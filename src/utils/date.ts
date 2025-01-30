export const formatRelativeDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return 'Today';
  }

  if (diffDays === 1) {
    return 'Yesterday';
  }

  if (diffDays === 2) {
    return '2 days ago';
  }

  if (diffDays < 7) {
    return 'This week';
  }

  const isSameMonth = date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
  if (isSameMonth) {
    return 'This month';
  }

  const isSameYear = date.getFullYear() === now.getFullYear();
  if (isSameYear) {
    return 'This year';
  }

  // Older than a year - format as dd/mm/yyyy
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};
