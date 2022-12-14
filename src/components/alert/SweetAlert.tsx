/* eslint-disable react/react-in-jsx-scope */
import RoutePaths from 'src/lib/utils/routes';
import Swal, { SweetAlertResult } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const MySwal = withReactContent(Swal);

export const AlertTextError = (_title: string, _body: string) => {
  return MySwal.fire({
    title: _title,
    customClass: {
      title: 'text-center mr-0',
    },
    icon: 'error',
    text: _body,
    showCloseButton: true,
    confirmButtonText: 'Okay',
    confirmButtonColor: '#051d29',
    focusConfirm: true,
  });
};
export const AlertTextSuccess = (
  _title: string,
  _body: string,
  callBack?: (value: SweetAlertResult<unknown>) => void,
) => {
  return MySwal.fire({
    title: _title,
    customClass: {
      title: 'text-center mr-0',
    },
    icon: 'success',
    text: _body,
    showCloseButton: true,
    confirmButtonText: 'Okay',
    confirmButtonColor: '#051d29',
    focusConfirm: true,
  }).then(callBack);
};
export const AlertProspectError = (_title: string, _row: string, number: number) => {
  return MySwal.fire({
    title: _title,
    customClass: {
      title: 'text-center mr-0',
    },
    icon: 'error',
    html: (
      // eslint-disable-next-line react/react-in-jsx-scope
      <div>
        <p style={{ textAlign: 'initial' }}>
          {number} {number > 1 ? 'addresses' : 'address'} could not be imported due to invalid data. We have imported
          all other addresses. You can update your import data & reupload it now, or you can add further addresses at a
          later time.
        </p>
        <br />
        <p style={{ textAlign: 'initial' }}>
          To fix the Invalid data, please check the following rows in your file: {_row}
          {number > 5 ? ',..' : null}. If you have further issues, please contact the system administrator.
        </p>
      </div>
    ),
    showCloseButton: true,
    confirmButtonText: 'Okay',
    confirmButtonColor: '#051d29',
    focusConfirm: true,
  });
};
export const showPopup = (
  message: string,
  title: string,
  confirmButtonText: string,
  cancelButtonText: string,
  callBack: (value: SweetAlertResult<unknown>) => void,
): void => {
  MySwal.fire({
    title: title,
    html: message,
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    focusConfirm: true,
    customClass: {
      popup: 'popup-add-cart',
      title: 'text-center mr-0',
    },
  }).then(callBack);
};

// const showPopupConfirm = (res: any) => {
//   showPopup(message, title, confirmButtonText, cancelButtonText, value => {
//     if (value && value.isConfirmed) {
//       onConfirm(res);
//     }
//   });
// };
