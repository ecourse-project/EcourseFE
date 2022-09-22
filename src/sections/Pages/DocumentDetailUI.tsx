import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Image, Space, Table, Tooltip, Button } from 'antd';
import { tableStyle } from 'src/styles/tableStyle';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { FileDoneOutlined, ShopOutlined } from '@ant-design/icons';
import AppButton from 'src/components/button';
import DocDetail from 'src/components/document/doc-detail';
import { StyledEngineProvider } from '@mui/material';

const DocumentDetailUI = () => {
	return (
		<div>
			<DocDetail />
		</div>
	);
};

export default DocumentDetailUI;
