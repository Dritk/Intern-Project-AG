export const getErrorMessage = (error: any) => {
  if (error && typeof error === "object" && "message" in error) {
    return error.message;
  }
  return String(error);
};