import { LoadError } from '@react-pdf-viewer/core';

const renderError = (error: LoadError) => {
  let message = '';
  switch (error.name) {
    case 'InvalidPDFException':
      message = 'The document is invalid or corrupted';
      break;
    case 'MissingPDFException':
      message = 'The document is missing';
      break;
    case 'UnexpectedResponseException':
      message = 'Unexpected server response';
      break;
    default:
      message = 'Cannot load the document';
      break;
  }

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#e53e3e',
          borderRadius: '0.25rem',
          color: '#fff',
          padding: '0.5rem',
        }}
      >
        {message}
      </div>
    </div>
  );
};
export default renderError;
