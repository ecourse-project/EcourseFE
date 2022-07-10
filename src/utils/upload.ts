// import UploadService from 'src/services/upload';

import { navigate } from 'gatsby';
import MailingService from 'src/services/mailing';
import { AlertProspectError } from 'src/alert/SweetAlert';
import UserService from 'src/services/user';
import RoutePaths from './routes';

const getBase64 = (img: any, callback: any): void => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const getFileUrl = async (file: File | null, folder_name = 'photos', cbError?: (v) => void): Promise<any> => {
  if (!file) return undefined;
  const formData = new FormData();
  formData.append('file', file);
  formData.append('folder_name', folder_name);
  try {
    const response: any = await UserService.upload(formData);
    return response.file_path;
  } catch (error: any) {
    console.log('ERROR_AVATAR_UPLOAD_', error);
    cbError && cbError(error);
  }
};
const importMaillingList = async (file: File | null, name: string, cbError?: (v) => void): Promise<any> => {
  if (!file) return undefined;
  const formData = new FormData();
  formData.append('mailing_list', file);
  formData.append('name', name);
  try {
    const res = await MailingService.importMailingList(formData);
    if (res?.error_rows && res?.error_rows.length > 0) {
      const err = res?.error_rows.join(', ');
      AlertProspectError('Upload Error', err, res?.error_rows_total);
    } else {
      navigate(RoutePaths.MAILING_LISTS);
    }
  } catch (error: any) {
    console.log('ERROR_AVATAR_UPLOAD_', error.message);
    cbError && cbError(error.message);
  }
};

export { getBase64, getFileUrl, importMaillingList };
