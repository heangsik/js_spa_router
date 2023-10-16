export const navigate = (to, isReplace = false) => {
  const historyChangeEvent = new CustomEvent('historychange', {
    detail: {
      to,
      isReplace,
    },
  });
  console.log('navigate event addon', to, isReplace);

  dispatchEvent(historyChangeEvent);
};
