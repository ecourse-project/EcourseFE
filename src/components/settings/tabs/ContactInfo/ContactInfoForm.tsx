import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AskForSave } from 'src/components/alert/SweetAlert';
import AppButton from 'src/components/button';
import ErrorMessage from 'src/components/error-message';
import AppInput from 'src/components/input';
import CourseService from 'src/lib/api/course';
import { appActions } from 'src/lib/reducers/app/appSlice';
import { RootState } from 'src/lib/reducers/model';
import { SettingFieldData } from 'src/lib/types/commentType';
import regex from 'src/lib/utils/regularExpression';
import validation from 'src/lib/utils/validation';
import theme from 'src/styles/theme';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

import { css } from '@emotion/react';
import UploadImage from 'src/components/Upload';

interface ContactSettingsFormProps {
  myProfile?: any;
  avatar?: string;
}
const dateFormat = 'DD/MM/YYYY';
const ContactSettingForm: React.FC<ContactSettingsFormProps> = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const myProfile = useSelector((state: RootState) => state.app.user);

  const validationSchema = React.useRef(
    Yup.object().shape({
      // full_name: Yup.string().required(validation.firstName.required).matches(regex.alphabet, {
      //   message: 'First name cannot accept numeric and special characters.',
      // }),
      full_name: Yup.string().required(validation.firstName.required),
      email: Yup.string().required(validation.email.required),
      phone: Yup.string().notRequired().matches(regex.phoneNumberVN, {
        message: validation.phone.invalid,
      }),
    }),
  );
  const formik = useFormik<SettingFieldData>({
    initialValues: {
      ...myProfile,
      phone: myProfile.phone || '',
    },
    validationSchema: validationSchema.current,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      const { full_name, email, phone, avatar } = values;
      const obj = {
        full_name: full_name,
        email: email,
        phone: phone,
        avatar: avatar,
      };
      AskForSave('Lưu Thay Đổi', '', 'Lưu', 'Huỷ', '', async (result) => {
        if (result.isConfirmed) {
          try {
            const newInfo = await CourseService.updateInfo(phone, full_name, avatar);
            dispatch(appActions.setMyProfile(newInfo));
            Swal.fire('Đã lưu thay đổi!', '', 'success');
          } catch (error) {
            Swal.fire('Đã có lỗi xảy ra!', 'Xin thử lại sau', 'error');
          }
        } else if (result.isDismissed) {
          Swal.fire('Thay đổi không được lưu!', '', 'info');
        }
      });
    },
  });
  const hasError = (key: string) => {
    return Object.keys(formik.errors).length > 0 && !!formik.errors[key] && formik.touched[key];
  };

  return (
    <form
      css={css`
        display: flex;
        flex-direction: column;
        gap: 10px;
        > h2 {
          margin-top: 0px;
          margin-bottom: 10px;
          font-family: 'FiraSans', sans-serif;
          font-size: 34px;
          line-height: 36px;
          font-weight: 700;
          @media (max-width: ${theme.media.tablets}px) {
            font-size: 24px;
          }
        }
        .form-container {
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .form-item-button {
          margin-top: 10px;
        }
        .ant-picker {
          min-height: 48px;
          width: 100%;
        }
        .s-label {
          display: block;
          margin-bottom: 5px;
          font-weight: 700;
        }
        [ant-click-animating-without-extra-node='true']:after {
          display: none;
        }
        .ant-btn {
          min-width: 200px;
        }
      `}
      onSubmit={formik.handleSubmit}
    >
      <h2>Thông tin cá nhân</h2>
      <div className="form-container">
        <UploadImage
          avatar={myProfile.avatar}
          setAvatar={(avatar) => formik.setFieldValue('avatar', avatar.image_short_path)}
        />
        <div className="form-item-full">
          <AppInput
            className="field name-field"
            label="Email"
            name="email"
            type="email"
            placeholder="Email của bạn"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.email}
            hasError={hasError('email')}
            readOnly
            disabled
          />
          {hasError('email') ? <ErrorMessage className="form-item-error">{formik.errors.email}</ErrorMessage> : null}
        </div>
        <div className="form-item-half">
          <AppInput
            className="field name-field"
            label="Họ và Tên"
            name="full_name"
            type="text"
            placeholder="Nhập tên của bạn"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.full_name}
            hasError={hasError('full_name')}
          />
          {hasError('full_name') ? (
            <ErrorMessage className="form-item-error">{formik.errors.full_name}</ErrorMessage>
          ) : null}
        </div>

        {/* <div className="form-item-half">
          <AppInputDate label="Ngày sinh" placeholder="Nhập ngày sinh của bạn" dateFormat={dateFormat} isPast />
        </div> */}
        <div className="form-item-half">
          <AppInput
            className="field name-field"
            label="Số điện thoại"
            name="phone"
            type="text"
            placeholder="Số điện thoại"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.phone}
            hasError={hasError('phone')}
            disabled={isLoading}
          />
          {hasError('phone') ? <ErrorMessage className="form-item-error">{formik.errors.phone}</ErrorMessage> : null}
        </div>

        <div className="form-item-button">
          <AppButton
            btnTextColor="white"
            btnSize="large"
            btnStyle="solid"
            btnWidth="fix-content"
            className="btn-setting"
            type="primary"
            htmlType="submit"
            nonBordered
            bgColor=""
            // disabled={formik.isSubmitting}
          >
            Lưu thay đổi
          </AppButton>
        </div>
      </div>
    </form>
  );
};
export default ContactSettingForm;
