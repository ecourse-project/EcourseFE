import { Worker } from '@react-pdf-viewer/core';
import { Viewer, LoadError } from '@react-pdf-viewer/core';
import { ProgressBar } from '@react-pdf-viewer/core';
import packageJson from '../../../package.json';
const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];
import '@react-pdf-viewer/core/lib/styles/index.css';
import renderError from './errorRender';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

interface ViewerWrapperProps {
	fileUrl: string;
}

const ViewerWrapper: React.FC<ViewerWrapperProps> = ({
	fileUrl,
}: ViewerWrapperProps) => {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();

	return (
		<Viewer
			fileUrl={fileUrl}
			renderError={renderError}
			renderLoader={(percentages: number) => (
				<div style={{ width: '240px' }}>
					<ProgressBar progress={Math.round(percentages)} />
				</div>
			)}
			plugins={[defaultLayoutPluginInstance]}
		/>
	);
};

interface PdfProps {
	url: string;
}

const PdfViewer: React.FC<PdfProps> = (props: PdfProps) => {
	const { url } = props;
	return (
		<Worker
			workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}
		>
			<div
				css={css`
					border: 1px solid rgba(0, 0, 0, 0.3);
					height: 60vh;
					margin-top: 30px;
					@media (max-width: 1400px) {
						height: 88vh;
					}
				`}
			>
				<ViewerWrapper fileUrl={url} />
			</div>
		</Worker>
	);
};
export default PdfViewer;
