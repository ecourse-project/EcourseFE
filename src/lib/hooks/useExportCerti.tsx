import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/model';
import { Session } from 'inspector';
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

export const useExportCertificate = ({
  certificateExport,
  onFailed,
}: ExportCertificateProps): ExportCertoficateInfo => {
  const [downloadUrl, setDownloadUrl] = React.useState<string>('');
  const [name, setFilename] = React.useState<string>('');
  const ref = React.useRef<HTMLAnchorElement | null>(null);

  const { user: profile } = useSelector((state: RootState) => state.app);
  const getFileName = (name: string) => {
    return `${name.split(' ').join('_')}_${profile?.full_name}.pdf`;
  };

  // const downloadPDF = async (id: string, name: string) => {
  //   try {
  //     const blobContent = await certificateExport(id);
  //     // console.log('blobContent :>> ', blobContent);
  //     const blob = new Blob([blobContent as string], { type: 'application/pdf' });
  //     const url = window.URL.createObjectURL(blob);
  //     const fileName = getFileName(name);
  //     console.log('url :>> ', url);
  //     setDownloadUrl(url);
  //     setFilename(fileName);
  //     ref.current?.click();

  //     URL.revokeObjectURL(url);
  //   } catch (err) {
  //     onFailed(err);
  //   }
  // };

  // const downloadPDF = async (id: string, name: string) => {
  //   const token: OToken =
  //     typeof window !== 'undefined'
  //       ? (JSON.parse(localStorage.getItem(StorageKeys.SESSION_KEY) || '{}') as OToken)
  //       : ({} as OToken);
  //   try {
  //     await fetch(`${globalVariable.API_URL + apiURL.downloadCerti(id)}`, {
  //       headers: {
  //         Authorization: 'Bearer ' + token.access,
  //       },
  //     })
  //       .then((res) => {
  //         const contentType = res.headers.get('Content-Type');
  //         console.log('contentType :>> ', contentType);
  //         return res.blob();
  //       })
  //       .then((blobContent) => {
  //         // const blob = new Blob([blobContent as string], { type: 'application/pdf' });
  //         const url = URL.createObjectURL(blobContent);
  //         URL.revokeObjectURL(url);
  //         const fileName = getFileName(name);

  //         setDownloadUrl(url);
  //         setFilename(fileName);

  //         ref.current?.click();
  //       });
  //   } catch (err) {
  //     onFailed(err);
  //   }
  // };
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
          console.log('contentType :>> ', contentType);
          return res.blob();
        })
        .then((blob) => {
          const link = document.createElement('a');
          link.addEventListener('load', () => {
            URL.revokeObjectURL(link.href);
          });
          link.href = URL.createObjectURL(blob);
          link.download = 'example.pdf';
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
