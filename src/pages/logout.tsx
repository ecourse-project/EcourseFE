import React from 'react';
// import AppAction from 'src/reducers/app/action';
import RoutePaths from 'src/utils/routes';
import { LoadingPage } from 'src/components/loading/loadingBase';
import { StorageKeys } from 'src/utils/enum';
// import { navigate } from '@reach/router';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
	const navigate = useNavigate();
	React.useEffect(() => {
		localStorage.clear();
		localStorage.removeItem(StorageKeys.SESSION_KEY);
		window.location.href = RoutePaths.LOGIN;
	}, []);
	return <LoadingPage isLoading={true} />;
};

export default Logout;
