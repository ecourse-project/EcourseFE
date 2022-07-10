// import React from 'react';
// import AppInput from 'src/components/input';
// import { css } from '@emotion/react';
// import AppSelect from 'src/components/select';
// import AppButton from 'src/components/button';
// import validation from 'src/utils/validation';
// import * as Yup from 'yup';
// import { useFormik } from 'formik';
// import ErrorMessage from 'src/components/error-message';
// import theme from '../../styles/theme';
// import Title from 'src/components/title';
// const IncreaseMarketShareForm: React.FC = () => {
//   const itemEvents = ['Select one...', '1', '4', '8', '12'];
//   const itemNeighborAdoption = ['Select one...', '1', '2', '3', '4'];
//   const validationSchema = React.useRef(
//     Yup.object().shape({
//       homes: Yup.string().required(validation.homes.required),
//       interaction: Yup.string().required(validation.interaction.required),
//       frequency: Yup.string().required(validation.frequency.required),
//     }),
//   );
//   const formik = useFormik({
//     initialValues: {
//       target: '',
//       homes: '',
//       farm: '',
//       interaction: '',
//       ratio: '',
//       events: '',
//       adoption: '',
//       frequency: '',
//     },
//     validationSchema: validationSchema.current,
//     validateOnChange: true,
//     validateOnBlur: true,
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });

//   const hasError = (key: string) => {
//     return Object.keys(formik.errors).length > 0 && !!formik.errors[key] && formik.touched[key];
//   };

//   return (
//     <div
//       css={css`
//         margin-top: 40px;
//         padding: 6%;
//         border-radius: 5px;
//         background-color: #fff;
//         form {
//           padding: 40px;
//           background-color: #fff;
//           > h3 {
//             margin: 0px 0px 8px 0px;
//           }
//           .wrapper-market {
//             display: grid;
//             grid-auto-columns: 1fr;
//             grid-column-gap: 20px;
//             grid-row-gap: 20px;
//             grid-template-columns: 1fr 1fr;
//             grid-template-rows: auto;
//             .gutter-row {
//               width: 100%;
//             }
//             @media (max-width: ${theme.media.tablets}px) {
//               grid-template-columns: 1fr;
//             }
//           }
//         }
//       `}
//     >
//       <form onSubmit={formik.handleSubmit}>
//         <Title>Increase Your Market Share</Title>
//         <div className="wrapper-market">
//           <div className="gutter-row">
//             <AppInput
//               className="field target-field"
//               label="Target Market Share"
//               name="target"
//               type="number"
//               placeholder="5.4%"
//               handleChange={formik.handleChange}
//               handleBlur={formik.handleBlur}
//               value={formik.values.target}
//               hasError={hasError('target')}
//             />
//             {hasError('target') ? <ErrorMessage>{formik.errors.target}</ErrorMessage> : null}
//           </div>
//           <div className="gutter-row">
//             <AppInput
//               className="field homes-field"
//               label="Forecasted Homes Sold*"
//               name="homes"
//               type="number"
//               placeholder="30"
//               handleChange={formik.handleChange}
//               handleBlur={formik.handleBlur}
//               value={formik.values.homes}
//               hasError={hasError('homes')}
//             />
//             {hasError('homes') ? <ErrorMessage>{formik.errors.homes}</ErrorMessage> : null}
//           </div>
//           <div className="gutter-row">
//             <AppInput
//               className="field farm-field"
//               label="Homes in Farm"
//               name="farm"
//               type="number"
//               placeholder="1000"
//               handleChange={formik.handleChange}
//               handleBlur={formik.handleBlur}
//               value={formik.values.farm}
//               hasError={hasError('farm')}
//             />
//             {hasError('farm') ? <ErrorMessage>{formik.errors.farm}</ErrorMessage> : null}
//           </div>
//           <div className="gutter-row">
//             <AppInput
//               className="field interaction-field"
//               label="Interaction Rate*"
//               name="interaction"
//               type="number"
//               placeholder="1.2%"
//               handleChange={formik.handleChange}
//               handleBlur={formik.handleBlur}
//               value={formik.values.interaction}
//               hasError={hasError('interaction')}
//             />
//             {hasError('interaction') ? <ErrorMessage>{formik.errors.interaction}</ErrorMessage> : null}
//           </div>
//           <div className="gutter-row">
//             <AppInput
//               className="field ratio-field"
//               label="Closing Ratio"
//               name="ratio"
//               type="number"
//               placeholder="6%"
//               handleChange={formik.handleChange}
//               handleBlur={formik.handleBlur}
//               value={formik.values.ratio}
//               hasError={hasError('ratio')}
//             />
//             {hasError('ratio') ? <ErrorMessage>{formik.errors.ratio}</ErrorMessage> : null}
//           </div>
//           <div className="gutter-row">
//             <AppSelect
//               className="field events-field"
//               label="Events"
//               name="events"
//               type="number"
//               itemSelect={itemEvents}
//               handleChange={(value) => formik.setFieldValue('events', value)}
//               handleBlur={formik.handleBlur}
//               value={formik.values.events}
//               hasError={hasError('events')}
//             />
//             {hasError('events') ? <ErrorMessage>{formik.errors.events}</ErrorMessage> : null}
//           </div>
//           <div className="gutter-row">
//             <AppSelect
//               className="field adoption-field"
//               label="Neighbor Adoption"
//               name="adoption"
//               type="number"
//               itemSelect={itemNeighborAdoption}
//               handleChange={(value) => formik.setFieldValue('adoption', value)}
//               handleBlur={formik.handleBlur}
//               value={formik.values.adoption}
//               hasError={hasError('adoption')}
//             />
//             {hasError('adoption') ? <ErrorMessage>{formik.errors.adoption}</ErrorMessage> : null}
//           </div>
//           <div className="gutter-row">
//             <AppInput
//               className="field frequency-field"
//               label="Frequency*"
//               name="frequency"
//               type="number"
//               placeholder="1 - 13"
//               handleChange={formik.handleChange}
//               handleBlur={formik.handleBlur}
//               value={formik.values.frequency}
//               hasError={hasError('frequency')}
//             />
//             {hasError('frequency') ? <ErrorMessage>{formik.errors.frequency}</ErrorMessage> : null}
//           </div>
//           <div>
//             <AppButton
//               btnTextColor="white"
//               btnSize="medium"
//               btnStyle="solid"
//               btnWidth="fix-content"
//               className="overview-btn"
//               type="primary"
//               htmlType="submit"
//               borderRadius="3px"
//               nonBordered
//               colorHover="darkBlue"
//               disabled={formik.isSubmitting}
//             >
//               Calculate
//             </AppButton>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default IncreaseMarketShareForm;
