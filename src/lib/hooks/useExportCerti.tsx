import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/model';

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
  const [url, setDownloadUrl] = React.useState<string>('');
  const [name, setFilename] = React.useState<string>('');
  const ref = React.useRef<HTMLAnchorElement | null>(null);

  const { user: profile } = useSelector((state: RootState) => state.app);
  const getFileName = (name: string) => {
    return `${name.split(' ').join('_')}_${profile?.full_name}.pdf`;
  };

  const downloadPDF = async (id: string, name: string) => {
    try {
      const blobContent = await certificateExport(id);
      const blob = new Blob([blobContent as string], { type: 'text/pdf' });
      const url = URL.createObjectURL(blob);
      const fileName = getFileName(name);

      setDownloadUrl(url);
      setFilename(fileName);
      ref.current?.click();

      URL.revokeObjectURL(url);
    } catch (err) {
      onFailed(err);
    }
  };

  const DownloadAnchor = () => {
    return <a href={url} download={name} className="hidden" ref={ref} />;
  };

  return {
    downloadPDF,
    DownloadAnchor,
  };
};
