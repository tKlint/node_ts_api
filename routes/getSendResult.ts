export function getErr(err = "server internal error", errCode = 500) {
  return {
    code: errCode,
    msg: err,
  };
};

export function getResult<T = any>(result: T) {
  return {
    code: 0,
    msg: "",
    data: result,
  };
};