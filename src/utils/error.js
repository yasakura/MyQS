const handleError = (error) => {
  alert("Une erreur est survenue, recommence 😜");
  console.error("errorCode", error?.code);
  console.error("errorMessage", error?.message);
};

export default handleError;
