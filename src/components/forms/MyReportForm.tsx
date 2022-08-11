// import { UserOutlined } from '@ant-design/icons';
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import { useFormik } from 'formik';
// // import { navigate } from 'gatsby';
// import React from 'react';
// import isEqual from 'react-fast-compare';
// import { useSelector } from 'react-redux';
// import { AlertTextError, AlertTextSuccess, showPopup } from 'src/alert/SweetAlert';
// import AppButton from 'src/components/button';
// import ErrorMessage from 'src/components/error-message';
// import AppInput from 'src/components/input';
// import { MyReportFormData } from 'src/models';
// import { RootState } from 'src/reducers/model';
// import OverviewService from 'src/services/overview';
// import { formatPhoneNumber } from 'src/utils/format';
// import regex from 'src/utils/regularExpression';
// import RoutePaths from 'src/utils/routes';
// // import RoutePaths from 'src/utils/routes';
// import validation from 'src/utils/validation';
// import * as Yup from 'yup';
// import AppSelect from '../select';

// enum DataStatus {
//   GeneratingReport = 'Generating report',
//   Completed = 'Completed',
// }
// const MyReportForm: React.FC<{ setIsSubmitForm: (boolean) => void }> = React.memo(({ setIsSubmitForm }) => {
//   const userAsset = useSelector((state: RootState) => state.user.userAssets);
//   const profile = useSelector((state: RootState) => state.auth.myProfile);
//   const validationSchema = React.useRef(
//     Yup.object().shape({
//       firstName: Yup.string().trim().required(validation.firstName.required),
//       lastName: Yup.string().trim().required(validation.lastName.required),
//       market: Yup.string().trim().required(validation.market.required),
//       dre: Yup.string().trim().required(validation.dre.required),
//       website: Yup.string().matches(validation.website.regWeb, validation.website.url),
//       phone: Yup.string().required(validation.phone.required).matches(regex.phoneNumber, {
//         message: validation.phone.invalid,
//       }),
//     }),
//   );
//   const [isLoading, setIsLoading] = React.useState<boolean>(false);
//   const formik = useFormik<MyReportFormData>({
//     initialValues: {
//       firstName: profile?.first_name || '',
//       lastName: profile?.last_name || '',
//       market: '',
//       dre: '',
//       website: '',
//       phone: formatPhoneNumber(profile?.phone?.slice(1, 11) || ''),
//     },
//     validationSchema: validationSchema.current,
//     validateOnChange: true,
//     validateOnBlur: true,
//     onSubmit: (values) => {
//       const { firstName, lastName, market, dre, website } = values;
//       setIsLoading(true);
//       OverviewService.checkSubmission({
//         first_name: firstName.trim(),
//         last_name: lastName.trim(),
//         market: market.trim().toUpperCase(),
//         dre: dre.trim(),
//         website: website,
//       })

//         .then((values) => {
//           formik.resetForm();
//           if (values.data_status === DataStatus.GeneratingReport) {
//             AlertTextSuccess(
//               'Submission Succeeded',
//               'The system is crawling data. Please check back in a few minutes. If the data crawl takes longer than an hour please contact system admin',
//               async (value) => {
//                 if (value && value.isConfirmed) {
//                   setIsSubmitForm(true);
//                   // navigate(RoutePaths.ON_BOARDING_MANAGER);
//                 }
//               },
//             );
//           } else {
//             showPopup(
//               'This agent report already exists. Do you want to open it?',
//               'Submission Successful',
//               'Yes',
//               'No',
//               async (value) => {
//                 if (value && value.isConfirmed) {
//                   try {
//                     const data = await OverviewService.ownSubmission({
//                       first_name: firstName.trim(),
//                       last_name: lastName.trim(),
//                       market: market.trim().toUpperCase(),
//                       dre: dre.trim(),
//                       website: website,
//                     });
//                     const url = window.location.origin + RoutePaths.MY_REPORT + `/?ssid=${data?.id}`;
//                     window.location.href = url;
//                     // navigate(RoutePaths.MY_REPORT + `/?ssid=${data?.id}`);
//                     // setIsSubmitForm(true);
//                   } catch (error: any) {
//                     AlertTextError('Submission Failed', 'Market Does Not Exist');
//                     if (error.code === 11001) {
//                       AlertTextError('Submission Failed', error.message);
//                     } else if (error.code === 11005) {
//                       AlertTextError('Submission Failed', error.message);
//                     }
//                   } finally {
//                     setIsLoading(false);
//                   }
//                 }
//               },
//             );
//           }
//         })
//         .catch(async (error) => {
//           if (error.code === 11007) {
//             setIsLoading(true);
//             try {
//               await OverviewService.ownSubmission({
//                 first_name: firstName.trim(),
//                 last_name: lastName.trim(),
//                 market: market.trim().toUpperCase(),
//                 dre: dre.trim(),
//                 website: website,
//               });
//               AlertTextSuccess(
//                 'Submission Succeeded',
//                 'The system is crawling data. Please check back in a few minutes. If the data crawl takes longer than an hour please contact system admin',
//                 async (value) => {
//                   if (value && value.isConfirmed) {
//                     setIsSubmitForm(true);
//                     // navigate(RoutePaths.ON_BOARDING_MANAGER);
//                   }
//                 },
//               );
//             } catch (error: any) {
//               AlertTextError('Submission Failed', 'Market Does Not Exist');
//               if (error.code === 11001) {
//                 AlertTextError('Submission Failed', error.message);
//               } else if (error.code === 11005) {
//                 AlertTextError('Submission Failed', error.message);
//               }
//             } finally {
//               setIsLoading(false);
//             }
//           }
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
//     <div
//       css={css`
//         display: flex;
//         min-height: 84vh;
//         padding-top: 100px;
//         padding-bottom: 100px;
//         -webkit-box-pack: center;
//         justify-content: center;
//         -webkit-box-align: center;
//         align-items: center;
//         background-color: rgb(255, 255, 255);
//         .lookup-form {
//           max-width: 480px;
//           width: 100%;
//           font-weight: 300;
//           .lookup-container {
//             max-width: 480px;
//             background-color: rgb(3, 31, 45);
//             background-image: none;
//             backdrop-filter: blur(14px);
//             color: rgb(255, 255, 255);
//             padding: 50px;
//             border-radius: 20px;
//             .lookup-user {
//               margin-top: -91px;
//               .user-wrapper {
//                 display: flex;
//                 width: 80px;
//                 height: 80px;
//                 margin-right: auto;
//                 margin-left: auto;
//                 -webkit-box-pack: center;
//                 justify-content: center;
//                 -webkit-box-align: center;
//                 align-items: center;
//                 background-color: rgb(231, 237, 243);
//                 color: rgb(3, 31, 45);
//                 border-radius: 50%;
//                 .user-avatar {
//                   display: flex;
//                   width: 80px;
//                   height: 80px;
//                   margin-right: auto;
//                   margin-left: auto;
//                   justify-content: center;
//                   align-items: center;
//                   border-radius: 50%;
//                   background-color: #e7edf3;
//                   color: #051d29;
//                   > h2 {
//                     font-size: 30px;
//                   }
//                 }
//               }
//             }
//             .lookup-header {
//               margin-top: 20px;
//               color: rgb(255, 255, 255);
//               text-align: center;
//               border-radius: 5px;
//               margin-bottom: 10px;
//               font-family: 'Fira Sans', sans-serif;
//               font-size: 34px;
//               line-height: 36px;
//               font-weight: 700;
//             }
//             .lookup-form {
//               display: grid;
//               margin-top: 40px;
//               grid-auto-columns: 1fr;
//               grid-column-gap: 40px;
//               grid-row-gap: 30px;
//               grid-template-columns: 1fr;
//               grid-template-rows: auto;
//               .form-item {
//                 width: 100%;
//               }
//             }
//           }
//         }
//       `}
//     >
//       <div className="lookup-form">
//         <div className="lookup-container">
//           <div className="lookup-user">
//             <div className="user-wrapper">
//               <div className="user-avatar">
//                 <h2>
//                   <UserOutlined />
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <h2 className="lookup-header">My Report</h2>
//           <form onSubmit={formik.handleSubmit} className="lookup-form">
//             <div className="form-item">
//               <AppInput
//                 className="field name-field"
//                 label=""
//                 name="firstName"
//                 type="text"
//                 placeholder="First Name"
//                 handleChange={formik.handleChange}
//                 handleBlur={formik.handleBlur}
//                 value={formik.values.firstName}
//                 hasError={hasError('firstName')}
//                 disabled={isLoading}
//               />
//               {hasError('firstName') ? <ErrorMessage>{formik.errors.firstName}</ErrorMessage> : null}
//             </div>
//             <div className="form-item">
//               <AppInput
//                 className="field name-field"
//                 label=""
//                 name="lastName"
//                 type="text"
//                 placeholder="Last Name"
//                 handleChange={formik.handleChange}
//                 handleBlur={formik.handleBlur}
//                 value={formik.values.lastName}
//                 hasError={hasError('lastName')}
//                 disabled={isLoading}
//               />
//               {hasError('lastName') ? <ErrorMessage>{formik.errors.lastName}</ErrorMessage> : null}
//             </div>
//             <div className="form-item" id="market">
//               <AppSelect
//                 className="field role-field"
//                 label=""
//                 name="market"
//                 type="text"
//                 placeholder="Select a market..."
//                 itemSelect={userAsset?.market}
//                 handleChange={(value) => formik.setFieldValue('market', value)}
//                 handleBlur={formik.handleBlur}
//                 value={formik.values.market}
//                 isGetContainer
//                 hasError={hasError('market')}
//               />
//               {hasError('market') ? <ErrorMessage>{formik.errors.market}</ErrorMessage> : null}
//             </div>
//             <div className="form-item">
//               <AppInput
//                 className="field dre-field"
//                 label=""
//                 name="dre"
//                 type="text"
//                 placeholder="Agent's dre#"
//                 handleChange={formik.handleChange}
//                 handleBlur={formik.handleBlur}
//                 value={formik.values.dre}
//                 hasError={hasError('dre')}
//                 disabled={isLoading}
//               />
//               {hasError('dre') ? <ErrorMessage>{formik.errors.dre}</ErrorMessage> : null}
//             </div>
//             <div className="form-item">
//               <AppInput
//                 className="field website-lookup-field"
//                 label=""
//                 type="text"
//                 name="website"
//                 placeholder="Agent`s Website"
//                 handleChange={formik.handleChange}
//                 handleBlur={formik.handleBlur}
//                 value={formik.values.website}
//                 hasError={hasError('website')}
//                 disabled={isLoading}
//               />
//               {hasError('website') ? <ErrorMessage>{formik.errors.website}</ErrorMessage> : null}
//             </div>
//             <div className="form-item">
//               <AppInput
//                 className="field dre-field"
//                 name="phone"
//                 label=""
//                 disabled={isLoading}
//                 placeholder="(XXX) XXX-XXXX"
//                 type="string"
//                 value={formik.values.phone}
//                 handleChange={(e) => {
//                   const formattedPhone = formatPhoneNumber(e.target.value);
//                   formik.setFieldValue('phone', formattedPhone, false);
//                 }}
//                 handleBlur={formik.handleBlur}
//                 hasError={hasError('phone')}
//               />
//               {hasError('phone') ? <ErrorMessage className="error">{formik.errors.phone}</ErrorMessage> : null}
//             </div>
//             <div className="form-item">
//               <AppButton
//                 btnTextColor="black"
//                 btnSize="large"
//                 btnStyle="solid"
//                 btnWidth="full-w"
//                 className="btn-agentlookup"
//                 type="primary"
//                 htmlType="submit"
//                 disabled={formik.isSubmitting}
//               >
//                 Submit
//               </AppButton>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }, isEqual);
// export default MyReportForm;
