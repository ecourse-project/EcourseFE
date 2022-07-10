// import { css } from '@emotion/react';
// import React from 'react';
// import validation from 'src/utils/validation';
// import AppButton from '../button';
// import ErrorMessage from '../error-message';
// import AppInput from '../input';
// import * as Yup from 'yup';
// import { useFormik } from 'formik';
// import regex from 'src/utils/regularExpression';
// import { formatPhoneNumber } from 'src/utils/format';
// import LandingService, { LandingParams } from 'src/services/landing';
// import { AlertTextError, AlertTextSuccess } from 'src/alert/SweetAlert';
// export interface DownsizesForm {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
// }

// interface DetailDownsizesFormProps {
//   uniquePurlCode: string;
// }

// const DetailDownsizesForm: React.FunctionComponent<DetailDownsizesFormProps> = ({ uniquePurlCode }) => {
//   const [isLoading, setIsLoading] = React.useState<boolean>(false);

//   const uniquePurlCodeRef = React.useRef<HTMLSpanElement>(null);

//   const validationSchema = React.useRef(
//     Yup.object().shape({
//       firstName: Yup.string()
//         .required(validation.firstName.required)
//         .matches(regex.alphabet, { message: 'First name cannot accept numeric and special characters' }),
//       lastName: Yup.string()
//         .required(validation.lastName.required)
//         .matches(regex.alphabet, { message: 'Last name cannot accept numeric and special characters' }),
//       email: Yup.string()
//         .required(validation.email.required)
//         .email(validation.email.invalid)
//         .matches(/^[\w.-]+@([\w-]+\.)+[\w-]{1,4}$/, validation.email.invalid),
//       phone: Yup.string().required(validation.phone.required).matches(regex.phoneNumber, {
//         message: validation.phone.invalid,
//       }),
//     }),
//   );

//   const formik = useFormik<DownsizesForm>({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//     },
//     validationSchema: validationSchema.current,
//     validateOnChange: true,
//     validateOnBlur: true,
//     onSubmit: async (values) => {
//       setIsLoading(true);
//       const { firstName: first_name, lastName: last_name, email, phone } = values;

//       const data: LandingParams = {
//         unique_purl_code: uniquePurlCodeRef.current ? uniquePurlCodeRef.current.innerText : '',
//         first_name,
//         last_name,
//         email,
//         phone,
//       };

//       LandingService.sendMMSToAgent(data)
//         .then(() => {
//           AlertTextSuccess('Submission Success', 'Sending SMS successful');
//         })
//         .catch((error) => {
//           AlertTextError('Submission Failed', 'Sending SMS failed. Please check again.');
//         })
//         .finally(() => {
//           setIsLoading(false);
//           formik.setSubmitting(false);
//         });
//     },
//   });

//   const hasError = (key: string) => {
//     return Object.keys(formik.errors).length > 0 && !!formik.errors[key] && formik.touched[key];
//   };

//   return (
//     <form action="" onSubmit={formik.handleSubmit}>
//       <span
//         css={css`
//           position: absolute;
//           left: -99999em;
//         `}
//         ref={uniquePurlCodeRef}
//       >
//         {uniquePurlCode}
//       </span>
//       <div className="form-grid">
//         <div className="form-item-half">
//           <AppInput
//             className="field name-field"
//             label="First Name *"
//             name="firstName"
//             type="text"
//             placeholder="First Name"
//             handleChange={formik.handleChange}
//             handleBlur={formik.handleBlur}
//             value={formik.values.firstName}
//             hasError={hasError('firstName')}
//             disabled={isLoading}
//           />
//           {hasError('firstName') ? (
//             <ErrorMessage className="form-item-error">{formik.errors.firstName}</ErrorMessage>
//           ) : null}
//         </div>

//         <div className="form-item-half">
//           <AppInput
//             className="field name-field"
//             label="Last Name *"
//             name="lastName"
//             type="text"
//             placeholder="Last Name"
//             handleChange={formik.handleChange}
//             handleBlur={formik.handleBlur}
//             value={formik.values.lastName}
//             hasError={hasError('lastName')}
//             disabled={isLoading}
//           />
//           {hasError('lastName') ? (
//             <ErrorMessage className="form-item-error">{formik.errors.lastName}</ErrorMessage>
//           ) : null}
//         </div>

//         <div className="form-item-half">
//           <AppInput
//             className="field dre-field"
//             label="Phone Number"
//             name="phone"
//             disabled={isLoading}
//             placeholder="(XXX) XXX-XXXX"
//             type="string"
//             value={formik.values.phone}
//             handleChange={(e) => {
//               const formattedPhone = formatPhoneNumber(e.target.value);
//               formik.setFieldValue('phone', formattedPhone, false);
//             }}
//             handleBlur={formik.handleBlur}
//             hasError={hasError('phone')}
//           />
//           {hasError('phone') ? <ErrorMessage className="error">{formik.errors.phone}</ErrorMessage> : null}
//         </div>

//         <div className="form-item-half">
//           <AppInput
//             className="field email-field"
//             label="Email *"
//             name="email"
//             type="email"
//             disabled={isLoading}
//             placeholder="Email Address"
//             handleChange={formik.handleChange}
//             handleBlur={formik.handleBlur}
//             value={formik.values.email}
//             hasError={hasError('email')}
//           />
//           {hasError('email') ? <ErrorMessage className="error">{formik.errors.email}</ErrorMessage> : null}
//         </div>
//       </div>

//       <div
//         css={css`
//           display: flex;
//           justify-content: center;
//         `}
//       >
//         <AppButton
//           btnTextColor="black"
//           btnSize="large"
//           btnStyle="solid"
//           btnWidth="full-w"
//           className="btn-downsizes"
//           type="primary"
//           htmlType="submit"
//           disabled={formik.isSubmitting && !!uniquePurlCodeRef.current?.innerText}
//         >
//           Submit
//         </AppButton>
//       </div>
//     </form>
//   );
// };
// export default DetailDownsizesForm;
