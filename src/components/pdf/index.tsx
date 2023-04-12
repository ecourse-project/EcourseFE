import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import packageJson from 'package.json';

import { css } from '@emotion/react';
import { ProgressBar, Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import renderError from './errorRender';

const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];
interface ViewerWrapperProps {
  fileUrl: string;
}

const ViewerWrapper: React.FC<ViewerWrapperProps> = ({ fileUrl }: ViewerWrapperProps) => {
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
    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion.replace('^', '')}/build/pdf.worker.min.js`}>
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
