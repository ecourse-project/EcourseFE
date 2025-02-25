import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/model';
import { OToken } from '../types/backend_modal';
import { StorageKeys } from '../utils/enum';
import { apiURL } from '../api/course';
import globalVariable from '../config/env';

interface ExportCertificateProps {
  readonly certificateExport: (id: string) => Promise<unknown>;
  readonly onFailed: (err) => void;
}

interface ExportCertoficateInfo {
  readonly downloadPDF: (id: string, name: string) => Promise<void>;
  DownloadAnchor: React.FunctionComponent;
}

export const useExportCertificate = ({ onFailed }: ExportCertificateProps): ExportCertoficateInfo => {
  const [downloadUrl, setDownloadUrl] = React.useState<string>('');
  const [name, setFilename] = React.useState<string>('');
  const ref = React.useRef<HTMLAnchorElement | null>(null);

  const { user: profile } = useSelector((state: RootState) => state.app);
  const getFileName = (name: string) => {
    return `${name.split(' ').join('_')}_${profile?.full_name}_certificate.pdf`;
  };

  const downloadPDF = async (id: string, name: string) => {
    const token: OToken =
      typeof window !== 'undefined'
        ? (JSON.parse(localStorage.getItem(StorageKeys.SESSION_KEY) || '{}') as OToken)
        : ({} as OToken);
    try {
      await fetch(`${globalVariable.API_URL + apiURL.downloadCerti(id)}`, {
        headers: {
          Authorization: 'Bearer ' + token.access,
        },
      })
        .then((res) => {
          const contentType = res.headers.get('Content-Type');
          return res.blob();
        })
        .then((blob) => {
          const link = document.createElement('a');
          link.addEventListener('load', () => {
            URL.revokeObjectURL(link.href);
          });
          link.href = URL.createObjectURL(blob);
          link.download = getFileName(name);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
    } catch (err) {
      onFailed(err);
    }
  };
  const DownloadAnchor = () => {
    return <a href={downloadUrl} download={name} className="hidden" ref={ref} />;
  };

  return {
    downloadPDF,
    DownloadAnchor,
  };
};
