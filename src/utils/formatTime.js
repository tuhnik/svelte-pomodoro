export default seconds => {
  if (seconds === 3600) return '60:00';
  if (seconds === 0) return '00:00';
  const date = new Date(0);
  date.setSeconds(seconds);
  return date.toISOString().substr(14, 5);
};
