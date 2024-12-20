// export const catchAsyncErrors = (theFunction) => {
//   return (req, res, next) => {
//     Promise.resolve(theFunction(req, res, next)).catch(next);
//   };
// };
export const catchAsyncErrors = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// ErrorHandler is likely not exported properly. Add this:
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default ErrorHandler;