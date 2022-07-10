// import { css } from '@emotion/react';
// import { User } from '@goldfishcode/first-team-real-estate-sdk/libs/api/user/models';
// import { useFormik } from 'formik';
// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { AlertTextError, AlertTextSuccess } from 'src/alert/SweetAlert';
// import AppButton from 'src/components/button';
// import ErrorMessage from 'src/components/error-message';
// import AppInput from 'src/components/input';
// import AppSelect from 'src/components/select';
// import { SettingFieldData } from 'src/models';
// import AuthAction from 'src/reducers/auth/action';
// import UserService from 'src/services/user';
// import theme from 'src/styles/theme';
// import regex from 'src/utils/regularExpression';
// import validation from 'src/utils/validation';
// import * as Yup from 'yup';
// interface ContactSettingsFormProps {
//   myProfile?: User;
//   avatar?: string;
// }
// const ContactSettingForm: React.FC<ContactSettingsFormProps> = ({ myProfile, avatar }) => {
//   const itemSelect = ['United States', 'Canada'];
//   const dispatch = useDispatch();
//   const [isLoading, setIsLoading] = useState(false);
//   const validationSchema = React.useRef(
//     Yup.object().shape({
//       firstName: Yup.string()
//         .required(validation.firstName.required)
//         .matches(regex.alphabet, { message: 'First name cannot accept numeric and special characters' }),
//       lastName: Yup.string()
//         .required(validation.lastName.required)
//         .matches(regex.alphabet, { message: 'Last name cannot accept numeric and special characters' }),
//       title: Yup.string().required(validation.title.required),
//       company: Yup.string().required(validation.company.required),
//       // email: Yup.string().required(validation.email.required),
//       address: Yup.string().required(validation.address.required),
//       city: Yup.string().required(validation.city.required),
//       state: Yup.string().required(validation.state.required),
//       zipcode: Yup.string().required(validation.zipcode.required),
//       country: Yup.string().required(validation.country.required),
//     }),
//   );
//   const formik = useFormik<SettingFieldData>({
//     initialValues: {
//       firstName: myProfile?.first_name || '',
//       lastName: myProfile?.last_name || '',
//       title: myProfile?.title || '',
//       company: myProfile?.company || '',
//       email: myProfile?.email || '',
//       address: myProfile?.address || '',
//       city: myProfile?.city || '',
//       state: myProfile?.state || '',
//       zipcode: myProfile?.zipcode || '',
//       country: myProfile?.country || itemSelect[0],
//     },
//     validationSchema: validationSchema.current,
//     validateOnChange: true,
//     validateOnBlur: true,
//     onSubmit: async (values) => {
//       const { firstName, lastName, title, company, address, city, state, zipcode, country } = values;
//       const obj = {
//         first_name: firstName,
//         last_name: lastName,
//         country,
//         address,
//         city,
//         zipcode,
//         state,
//         company,
//         title,
//         avatar: avatar ? avatar : myProfile?.avatar,
//       };
//       try {
//         setIsLoading(true);
//         const resp = await UserService.updateProfile(obj);
//         if (resp) {
//           const newProfile = { ...myProfile, ...resp };
//           dispatch({
//             type: AuthAction.UPDATE_MY_PROFILE,
//             payload: newProfile,
//           });
//           AlertTextSuccess('Save Succeeded', 'Your changes have been saved');
//         }
//       } catch (error) {
//         console.log(error);
//         // AlertTextError('Submission Failed', 'Market Does Not Exist');
//       } finally {
//         setIsLoading(false);
//         formik.setSubmitting(false);
//       }
//     },
//   });
//   const hasError = (key: string) => {
//     return Object.keys(formik.errors).length > 0 && !!formik.errors[key] && formik.touched[key];
//   };
//   useEffect(() => {
//     if (myProfile) {
//       formik.setValues({
//         firstName: myProfile?.first_name || '',
//         lastName: myProfile?.last_name || '',
//         title: myProfile?.title || '',
//         company: myProfile?.company || '',
//         email: myProfile?.email || '',
//         address: myProfile?.address || '',
//         city: myProfile?.city || '',
//         state: myProfile?.state || '',
//         zipcode: myProfile?.zipcode || '',
//         country: myProfile?.country || itemSelect[0],
//       });
//     }
//   }, [myProfile]);
//   return (
//     <form
//       css={css`
//         .form-container {
//           display: grid;
//           margin-top: 40px;
//           grid-auto-columns: 1fr;
//           grid-column-gap: 20px;
//           grid-row-gap: 20px;
//           grid-template-columns: 1fr 1fr;
//           grid-template-rows: auto;
//           .form-item-half {
//             grid-row-start: span 1;
//             grid-row-end: span 1;
//             grid-column-start: span 1;
//             grid-column-end: span 1;
//             align-self: end;
//             margin-bottom: 10px;
//             position: relative;
//             .form-item-error {
//               position: absolute;
//             }
//             @media (max-width: ${theme.media.tablets}px) {
//               grid-column-start: span 2;
//               grid-column-end: span 2;
//             }
//           }
//           .form-item-full {
//             grid-row-start: span 1;
//             grid-row-end: span 1;
//             grid-column-start: span 2;
//             grid-column-end: span 2;
//             margin-bottom: 10px;
//             position: relative;
//             .form-item-error {
//               position: absolute;
//             }
//           }
//           .form-item-button {
//             grid-row-start: span 1;
//             grid-row-end: span 1;
//             grid-column-start: span 2;
//             grid-column-end: span 2;
//             justify-self: stretch;
//           }
//         }
//       `}
//       onSubmit={formik.handleSubmit}
//     >
//       <div className="form-container">
//         <div className="form-item-half">
//           <AppInput
//             className="field name-field"
//             label="First Name"
//             name="firstName"
//             type="text"
//             placeholder="First Name"
//             handleChange={formik.handleChange}
//             handleBlur={formik.handleBlur}
//             value={formik.values.firstName}
//             hasError={hasError('firstName')}
//             disabled={true}
//           />
//           {hasError('firstName') ? (
//             <ErrorMessage className="form-item-error">{formik.errors.firstName}</ErrorMessage>
//           ) : null}
//         </div>
//         <div className="form-item-half">
//           <AppInput
//             className="field name-field"
//             label="Last Name"
//             name="lastName"
//             type="text"
//             placeholder="Last Name"
//             handleChange={formik.handleChange}
//             handleBlur={formik.handleBlur}
//             value={formik.values.lastName}
//             hasError={hasError('lastName')}
//             disabled={true}
//           />
//           {hasError('lastName') ? (
//             <ErrorMessage className="form-item-error">{formik.errors.lastName}</ErrorMessage>
//           ) : null}
//         </div>
//         <div className="form-item-half">
//           <AppInput
//             className="field name-field"
//             label="Title"
//             name="title"
//             type="text"
//             placeholder="Title"
//             handleChange={formik.handleChange}
//             handleBlur={formik.handleBlur}
//             value={formik.values.title}
//             hasError={hasError('title')}
//             disabled={isLoading}
//           />
//           {hasError('title') ? <ErrorMessage className="form-item-error">{formik.errors.title}</ErrorMessage> : null}
//         </div>
//         <div className="form-item-half">
//           <AppInput
//             className="field name-field"
//             label="Company Name"
//             name="company"
//             type="text"
//             placeholder="Company Name"
//             handleChange={formik.handleChange}
//             handleBlur={formik.handleBlur}
//             value={formik.values.company}
//             hasError={hasError('company')}
//             disabled={isLoading}
//           />
//           {hasError('company') ? (
//             <ErrorMessage className="form-item-error">{formik.errors.company}</ErrorMessage>
//           ) : null}
//         </div>
//         <div className="form-item-full">
//           <AppInput
//             className="field name-field"
//             label="Email Address"
//             name="email"
//             type="email"
//             placeholder="Email Address"
//             handleChange={formik.handleChange}
//             handleBlur={formik.handleBlur}
//             value={formik.values.email}
//             hasError={hasError('email')}
//             disabled={true}
//           />
//           {hasError('email') ? <ErrorMessage className="form-item-error">{formik.errors.email}</ErrorMessage> : null}
//         </div>
//         <div className="form-item-full">
//           <AppInput
//             className="field name-field"
//             label="Address"
//             name="address"
//             type="text"
//             placeholder="Address"
//             handleChange={formik.handleChange}
//             handleBlur={formik.handleBlur}
//             value={formik.values.address}
//             hasError={hasError('address')}
//             disabled={isLoading}
//           />
//           {hasError('address') ? (
//             <ErrorMessage className="form-item-error">{formik.errors.address}</ErrorMessage>
//           ) : null}
//         </div>
//         <div className="form-item-half">
//           <AppInput
//             className="field name-field"
//             label="City"
//             name="city"
//             type="text"
//             placeholder="City"
//             handleChange={formik.handleChange}
//             handleBlur={formik.handleBlur}
//             value={formik.values.city}
//             hasError={hasError('city')}
//             disabled={isLoading}
//           />
//           {hasError('city') ? <ErrorMessage className="form-item-error">{formik.errors.city}</ErrorMessage> : null}
//         </div>
//         <div className="form-item-half">
//           <AppInput
//             className="field name-field"
//             label="State"
//             name="state"
//             type="text"
//             placeholder="State"
//             handleChange={formik.handleChange}
//             handleBlur={formik.handleBlur}
//             value={formik.values.state}
//             hasError={hasError('state')}
//             disabled={isLoading}
//           />
//           {hasError('state') ? <ErrorMessage className="form-item-error">{formik.errors.state}</ErrorMessage> : null}
//         </div>
//         <div className="form-item-half">
//           <AppInput
//             className="field name-field"
//             label="Zipcode"
//             name="zipcode"
//             type="text"
//             placeholder="Zipcode"
//             handleChange={formik.handleChange}
//             handleBlur={formik.handleBlur}
//             value={formik.values.zipcode}
//             hasError={hasError('zipcode')}
//             disabled={isLoading}
//           />
//           {hasError('zipcode') ? (
//             <ErrorMessage className="form-item-error">{formik.errors.zipcode}</ErrorMessage>
//           ) : null}
//         </div>
//         <div className="form-item-half" id="market">
//           <AppSelect
//             className="field setting-field"
//             label="Country"
//             name="country"
//             type="text"
//             itemSelect={itemSelect}
//             handleChange={(values) => formik.setFieldValue('country', values)}
//             handleBlur={formik.handleBlur}
//             value={formik.values.country}
//             isGetContainer
//             hasError={hasError('country')}
//           />
//           {hasError('country') ? (
//             <ErrorMessage className="form-item-error">{formik.errors.country}</ErrorMessage>
//           ) : null}
//         </div>
//         <div className="form-item-button">
//           <AppButton
//             btnTextColor="white"
//             btnSize="large"
//             btnStyle="solid"
//             btnWidth="fix-content"
//             className="btn-setting"
//             type="primary"
//             htmlType="submit"
//             nonBordered
//             // disabled={formik.isSubmitting}
//           >
//             Save
//           </AppButton>
//         </div>
//       </div>
//     </form>
//   );
// };
// export default ContactSettingForm;
