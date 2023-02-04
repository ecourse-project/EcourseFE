// import React, { useCallback, useEffect, useRef, useState } from 'react';

// import { css } from '@emotion/react';
// import GoogleMap from 'google-map-react';
// import globalVariable from 'src/config/env';
// import { debounce } from 'lodash';
// import { Dropdown, Menu } from 'antd';
// import SearchField from '../setup-manager/search-field';
// import { DownOutlined } from '@ant-design/icons';

// interface AppInputAddressProps {
// 	onChange: (params: AddressInfo) => void;
// 	placeholder?: string;
// 	defaultValue?: string;
// 	label?: string;
// 	requiredMark?: boolean;
// 	hasError?: boolean;
// 	handleBlur?: React.FocusEventHandler<HTMLInputElement>;
// }
// let google;
// const defaultLatLng = { lat: 0, lng: 0 }; //Newport Beach lat lng

// interface AddressInfo {
// 	address: string;
// 	city: string;
// 	state: string;
// 	country: string;
// 	zipcode: string;
// 	lat?: string;
// 	long?: string;
// }

// const AppInputAddress: React.FC<AppInputAddressProps> = (props) => {
// 	const {
// 		onChange,
// 		placeholder,
// 		defaultValue,
// 		label,
// 		requiredMark,
// 		hasError,
// 		handleBlur,
// 	} = props;
// 	const [address, setAddress] = useState<string>(defaultValue || '');
// 	const [visible, setVisible] = useState<boolean>(false);
// 	const autoCompleteRef = useRef<any>();
// 	const placeServiceRef = useRef<any>();
// 	const [selectedAddress, setSelectedAddress] = useState<any>();
// 	const [placePredictions, setPlacePredictions] = React.useState<any>([]);

// 	const options = {
// 		componentRestrictions: { country: ['us', 'ca'] },
// 		fields: ['address_components', 'geometry', 'formatted_address', 'name'],
// 		types: ['establishment'],
// 	};

// 	useEffect(() => {
// 		let params = {} as AddressInfo;
// 		if (selectedAddress) {
// 			const address_components = selectedAddress?.address_components;
// 			const geometry = selectedAddress?.geometry;

// 			const city =
// 				address_components?.filter((v) => v.types.includes('locality'))[0]
// 					?.long_name || '';
// 			const state =
// 				address_components?.filter((v) =>
// 					v.types.includes('administrative_area_level_1')
// 				)[0]?.long_name || '';
// 			const country =
// 				address_components?.filter((v) => v.types.includes('country'))[0]
// 					?.long_name || '';
// 			const zipcode =
// 				address_components?.filter((v) => v.types.includes('postal_code'))[0]
// 					?.long_name || '';
// 			const long = geometry?.location?.lng();
// 			const lat = geometry?.location?.lat();
// 			params = {
// 				...params,
// 				address,
// 				city,
// 				state,
// 				country,
// 				zipcode,
// 				lat,
// 				long,
// 			};
// 			onChange && onChange(params);
// 		} else {
// 			params = { ...params, address };
// 			onChange && onChange(params);
// 		}
// 	}, [selectedAddress, address]);

// 	const handleSuggestions = (predictions, status) => {
// 		if (status != google.maps.places.PlacesServiceStatus.OK) {
// 			setPlacePredictions([]);
// 			return;
// 		}
// 		setPlacePredictions(predictions);
// 	};

// 	const menu = (
// 		<Menu
// 			css={css`
// 				z-index: 10000;
// 				max-height: 260px !important;
// 				overflow-y: auto;
// 				overflow-x: hidden;
// 				background-color: #f3f3f3 !important;
// 				box-shadow: none !important;
// 				.ant-dropdown-menu-item:hover,
// 				.ant-dropdown-menu-submenu-title:hover {
// 					background-color: #1c87c6;
// 				}
// 				.ant-dropdown-menu-title-content {
// 					display: flex;
// 					justify-content: space-between;
// 					align-items: center;
// 				}
// 			`}
// 		>
// 			{placePredictions.map((d, i) => {
// 				return (
// 					<Menu.Item
// 						key={i}
// 						onClick={() => {
// 							setVisible(false);
// 							setAddress(d?.structured_formatting?.main_text);

// 							const placeId = d.place_id;
// 							placeServiceRef.current.getDetails(
// 								{ placeId },
// 								(place, status) => {
// 									if (status !== google.maps.places.PlacesServiceStatus.OK) {
// 										return;
// 									}

// 									setSelectedAddress(place);
// 								}
// 							);
// 						}}
// 					>
// 						{d.description}
// 					</Menu.Item>
// 				);
// 			})}
// 		</Menu>
// 	);
// 	const handleGoogleMapApi = (el) => {
// 		google = el;
// 		autoCompleteRef.current = new google.maps.places.AutocompleteService();
// 		placeServiceRef.current = new google.maps.places.PlacesService(
// 			document.getElementById('address')
// 		);
// 	};
// 	useEffect(() => {
// 		debounceGetPlacePredictions(address);
// 		if (!address) setPlacePredictions([]);
// 	}, [address]);

// 	const debounceGetPlacePredictions = useCallback(
// 		debounce((address) => {
// 			if (autoCompleteRef.current) {
// 				autoCompleteRef.current.getPlacePredictions(
// 					{
// 						input: address,
// 						componentRestrictions: { country: ['us', 'ca'] },
// 					},
// 					handleSuggestions
// 				);
// 			}
// 		}, 500),
// 		[]
// 	);

// 	return (
// 		<div>
// 			<GoogleMap
// 				defaultCenter={defaultLatLng}
// 				defaultZoom={12}
// 				yesIWantToUseGoogleMapApiInternals
// 				onGoogleApiLoaded={handleGoogleMapApi}
// 				bootstrapURLKeys={{
// 					libraries: 'places',
// 					key: 'AIzaSyBOqFVuu_H3jyarVCkWCJlHRM9GCSQiFno',
// 				}}
// 			/>
// 			<div
// 				className="search-address"
// 				css={css`
// 					.s-label {
// 						font-weight: 700;
// 						font-size: 16px;
// 					}

// 					.anticon-down {
// 						display: none;
// 					}
// 					.search-wrapper {
// 						margin-top: 10px;
// 					}
// 					.search {
// 						& input {
// 							border-radius: unset !important;
// 							padding-left: 20px !important;
// 							height: 58px !important;
// 						}
// 					}
// 					.ant-dropdown {
// 						display: ${placePredictions.length ? '' : 'none'};
// 					}
// 					${hasError
// 						? `
//            .search {
//             border: 1px solid #ff0000;
//             input{
//               border: none;
//             }
//             &:hover {
//               border: 1px solid #ff0000;
//             }
//             &:focus {
//               border: 1px solid #ff0000 !important;
//             }
//           }
//           `
// 						: ''}
// 				`}
// 			>
// 				<div id="address"></div>
// 				{label && (
// 					<label className="s-label">{`${label}${
// 						requiredMark ? `*` : ''
// 					}`}</label>
// 				)}
// 				<Dropdown
// 					placement="bottomCenter"
// 					className="dropdown"
// 					overlay={menu}
// 					trigger={['click']}
// 					getPopupContainer={() =>
// 						document.querySelector('.search-address') as HTMLElement
// 					}
// 					visible={visible}
// 					onVisibleChange={(visible) => setVisible(visible)}
// 					arrow={false}
// 				>
// 					<a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
// 						<SearchField
// 							visible={visible}
// 							setVisible={setVisible}
// 							isSearchByInput={true}
// 							placeholder={placeholder || 'Type Address'}
// 							getSearchValue={(v: string) => {
// 								console.log('getsearch value :>> ', v);
// 								setAddress(v);
// 							}}
// 							searchValue={address}
// 							isCampaigns={true}
// 						/>
// 						<DownOutlined className="icon" />
// 					</a>
// 				</Dropdown>
// 			</div>
// 		</div>
// 	);
// };
// export default AppInputAddress;
