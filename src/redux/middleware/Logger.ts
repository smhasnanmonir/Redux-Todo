const Logger = (state) => (next) => (action) => {
  console.log(state);
  console.log(action);
  console.log(next);
  next(action);
};

export default Logger;
