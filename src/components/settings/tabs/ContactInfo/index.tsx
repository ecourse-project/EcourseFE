import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/lib/reducers/model';
import { SettingFieldData } from 'src/lib/types/commentType';
import regex from 'src/lib/utils/regularExpression';
import validation from 'src/lib/utils/validation';
import * as Yup from 'yup';

import ChangePasswordForm from './ChangePasswordForm';
import ContactSettingForm from './ContactInfoForm';

interface ContactSettingsFormProps {
  myProfile?: any;
  avatar?: string;
}
const dateFormat = 'DD/MM/YYYY';
const ContactInfo: React.FC<ContactSettingsFormProps> = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const myProfile = useSelector((state: RootState) => state.app.user);
  const validationSchema = React.useRef(
    Yup.object().shape({
      full_name: Yup.string().required(validation.firstName.required).matches(regex.alphabet, {
        message: 'First name cannot accept numeric and special characters.',
      }),
      email: Yup.string().required(validation.email.required),
      // phone: Yup.string().required(validation.country.required).matches(regex.phoneNumber, {
      //   message: validation.phone.invalid,
      // }),
    }),
  );
  const formik = useFormik<SettingFieldData>({
    initialValues: {
      ...myProfile,
      doB: '',
    },
    validationSchema: validationSchema.current,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      const { full_name, email, phone } = values;
      const obj = {
        full_name: full_name,
        email: email,
        phone: phone,
        // avatar: avatar ? avatar : myProfile?.avatar,
      };
      console.log('values :>> ', values);
      try {
        setIsLoading(true);
      } catch (error) {
        console.log(error);
        // AlertTextError('Submission Failed', 'Market Does Not Exist');
      } finally {
        setIsLoading(false);
        formik.setSubmitting(false);
      }
    },
  });
  const hasError = (key: string) => {
    return Object.keys(formik.errors).length > 0 && !!formik.errors[key] && formik.touched[key];
  };

  return (
    <>
      <ContactSettingForm />
      <ChangePasswordForm />
    </>
  );
};
export default ContactInfo;
