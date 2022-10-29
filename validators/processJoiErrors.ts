const processJoiErrors = (error:any) => {
    let errors:any = {};
    error.details.map((err:any) => {
      errors[err.context.key] = err.message;
    });
    return errors;
  };
  
export default processJoiErrors;
  