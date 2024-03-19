import { toast } from "react-toastify";

export function findIndexInArray<T>(
  originalArray: T[],
  objectToFInd: T,
  key: keyof T,
) {
  return originalArray.findIndex((item) => item[key] === objectToFInd[key]);
}

export function returnUpdatedList<T>(
  newObj: T,
  oldList: T[],
  key: keyof T = "id" as keyof T,
): T[] {
  const indexOfLocal = findIndexInArray(oldList, newObj, key);
  if (indexOfLocal !== -1) oldList[indexOfLocal] = newObj;
  return oldList;
}



export function handleError(error: any) {

  let { response, body } = error || {};
  let msg = '';
  body = body || body?.error || error;
  if (body && !response) {
    response = {
      data: body,
      status: body.status || body.statusCode || error.status,
    };
  }
  const { data } = response;

  const constMessage =
    'Sorry, an error has occurred, Please try again or if issue persist, contact support.';
  msg = data.message || data.error || constMessage;
  toast.error(msg)

}
