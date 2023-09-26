import { Image, Upload, message } from 'antd';
import ImgCrop from 'antd-img-crop';
import { RcFile, UploadFile } from 'antd/es/upload';
import { useState } from 'react';
import { apiURL } from 'src/lib/api/course';
import { OToken, UploadImageSuccess } from 'src/lib/types/backend_modal';
import { StorageKeys } from 'src/lib/utils/enum';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { css } from '@emotion/react';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

interface UploadImageProps {
  avatar: string;
  setAvatar: (avatarUploaded: UploadImageSuccess) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({ setAvatar, avatar }) => {
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const onChange = async (file) => {
    const formData = new FormData();
    formData.append('image', file as RcFile);
    formData.append('is_avatar', 'True');

    setUploading(true);
    const token: OToken =
      typeof window !== 'undefined'
        ? (JSON.parse(localStorage.getItem(StorageKeys.SESSION_KEY) || '{}') as OToken)
        : ({} as OToken);
    fetch('http://localhost:4000/' + apiURL.uploadImage(), {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${token.access}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setAvatar(res[0]);
        message.success('upload successfully.');
      })
      .catch((error) => {
        console.log('error :==>>', error);
        message.error('upload failed.');
      })
      .finally(() => {
        setUploading(false);
      });
  };
  return (
    <>
      <ImgCrop
        onModalOk={async (file: any) => {
          if (!file) return;
          const isJpgOrPng = file?.type === 'image/jpeg' || file?.type === 'image/png';
          if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
          }
          const url = await getBase64(file);
          setPreviewImage(url);
          setFileList([file]);
          // return false;
          onChange(file);
        }}
        onModalCancel={() => setFileList([])}
        showGrid
      >
        <Upload listType="picture-card" fileList={fileList} showUploadList={false} onRemove={() => setFileList([])}>
          {fileList.length < 1 && !avatar ? (
            '+ Upload'
          ) : uploading ? (
            'Loading'
          ) : (
            <div>
              <Image
                src={previewImage || avatar}
                alt="avatar"
                style={{ borderRadius: '5px' }}
                preview={{
                  mask: (
                    <div
                      css={css`
                        display: flex;
                        align-items: center;
                        svg {
                          font-size: 15px;
                        }
                      `}
                    >
                      <MdOutlineModeEditOutline />
                      Update
                    </div>
                  ),
                  visible: false,
                }}
              />
            </div>
          )}
        </Upload>
      </ImgCrop>
    </>
  );
};

export default UploadImage;
