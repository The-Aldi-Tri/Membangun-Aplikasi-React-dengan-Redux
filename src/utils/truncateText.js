const truncateText = (text, limit = 250) => {
  return text.length > limit ? text.slice(0, limit) + '...' : text;
};

export { truncateText };
