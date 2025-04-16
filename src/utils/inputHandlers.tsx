export const preventNumbers = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (/\d/.test(e.key)) {
    e.preventDefault();
  }
};

export const preventAlphabets = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (/^[a-zA-Z]+$/.test(e.key) && e.key !== "Backspace") {
    e.preventDefault();
  }
};
