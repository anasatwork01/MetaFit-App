export const getTimeDifference = (date) => {
  if (!date) return;
  const date5 = new Date(date);
  const date6 = new Date();
  const diffTime = Math.abs(date6 - date5);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
  const diffMinutes = Math.ceil(diffTime / (1000 * 60));
  const diffSeconds = Math.ceil(diffTime / 1000);
  if (diffDays > 0) {
    return diffDays + " day/s ago";
  }
  if (diffHours > 0) {
    return diffHours + " hours ago";
  }
  if (diffMinutes > 0) {
    return diffMinutes + " minutes ago";
  }
  if (diffSeconds > 0) {
    return diffSeconds + " seconds ago";
  }
  return "Just now";
};
