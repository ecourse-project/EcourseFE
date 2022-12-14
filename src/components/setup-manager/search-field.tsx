import { css } from '@emotion/react';
import { Button, Image, Skeleton } from 'antd';
import React, { useRef, useState } from 'react';
import { AlertTextError } from 'src/components/alert/SweetAlert';
import icBlackClose from 'src/assets/icons/black-close-icon.svg';
import SearchIcon from 'src/assets/images/search.svg';
import icClose from 'src/assets/images/white-close-icon.svg';
import AppInput from '../input';
interface SearchFieldProps {
  isSearchByInput?: boolean;
  isSearchByFile?: boolean;
  getSearchValue?: (v: string) => void;
  getSearchFile?: (file: any) => void;
  setVisible?: (v: boolean) => void;
  visible?: boolean;
  pathname?: boolean;
  searchValue?: string;
  isLoading?: boolean;
  isCampaigns?: boolean;
  isReadOnly?: boolean;
  isProspect?: boolean;
  placeholder?: string;
}

const SearchField: React.FC<SearchFieldProps> = ({
  isSearchByFile,
  isSearchByInput,
  getSearchValue,
  getSearchFile,
  setVisible,
  visible,
  pathname,
  searchValue,
  isLoading,
  isCampaigns,
  isReadOnly,
  isProspect,
  placeholder,
}) => {
  const [selectedFileName, setSelectedFileName] = useState<any>(null);
  const inputFileRef = useRef<any>(null);

  const cbError = (message: string) => {
    AlertTextError('Upload Error', message);
  };
  const onBtnClick = () => {
    if (!inputFileRef?.current) return;
    inputFileRef?.current?.click();
  };

  return (
    <div
      id="search"
      className="search-wrapper"
      css={css`
        margin-top: 30px;
        .search-input {
          position: relative;
        }
        .ant-image {
          position: absolute;
          top: 14px;
          left: 20px;
          z-index: 10;
        }
        .search {
          input {
            border-radius: 27px;
            background-color: #fff;
            padding-left: 60px;
          }
          input:read-only {
            cursor: not-allowed;
          }
        }
        .search-file {
          h3 {
            color: ${pathname ? '#000' : '#fff'};
            font-size: 17px;
            font-weight: 700;
            span {
              font-weight: 400;
            }
          }
          .btn {
            background-color: ${pathname ? '#031F2D' : 'transparent'};
            color: #fff;
            width: 183px;
            height: 54px;
            font-weight: 700;
            font-size: 17px;
            margin-right: 20px;
            border-color: #fff;
            text-transform: uppercase;
            &:hover {
              border-color: #fff;
            }
          }
          .upload-file {
            display: flex;
            .selected-file {
              display: flex;
              justify-content: center;
              align-items: center;
              h3 {
                margin: 0;
              }
              p {
                margin-top: 5px;
              }
              img {
                margin-left: 20px;
                cursor: pointer;
              }
              .ant-skeleton-active {
                .ant-skeleton-content {
                  .ant-skeleton-title {
                    background: linear-gradient(
                      90deg,
                      rgba(190, 190, 190, 0.9) 25%,
                      #2196f3 37%,
                      rgba(190, 190, 190, 0.9) 63%
                    );
                    background-size: 400% 100%;
                    -webkit-animation: ant-skeleton-loading 2s ease infinite;
                    animation: ant-skeleton-loading 2s ease infinite;
                    height: 5px;
                  }
                }
              }
            }
          }
          .prospect-lookup {
            padding: 5px 5px;
            border-style: solid;
            border-width: 1px;
            border-color: rgb(250, 174, 24);
            height: 54px;
            background-color: rgb(250, 174, 24) !important;
            -webkit-transition: all 400ms ease;
            transition: all 400ms ease;
            color: rgb(51, 51, 51);
            font-size: 17px;
            cursor: pointer;
            line-height: 20px;
            font-weight: 700;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            width: 210px;
            margin-left: 60px;
            &:hover {
              background-color: rgb(250, 174, 24) !important;
              color: rgb(51, 51, 51);
              letter-spacing: 1px;
              border-color: rgb(250, 174, 24);
            }
          }
          .left-button {
            margin-left: 0;
          }
        }
      `}
    >
      {isSearchByInput && (
        <div className="search-input">
          {!isCampaigns && <Image src={SearchIcon} preview={false} />}
          <AppInput
            className="search"
            label=""
            type="string"
            placeholder={
              placeholder
                ? placeholder
                : isReadOnly
                ? 'Enter New Card'
                : isCampaigns
                ? 'Search and select an agent...'
                : 'Search for Agent Name or Email'
            }
            handleChange={(e) => {
              getSearchValue && getSearchValue(e.target.value);
            }}
            value={searchValue}
            onInput={() => setVisible && setVisible(true)}
            onClick={(e) => {
              if (visible && pathname) {
                e.stopPropagation();
              } else if (!visible && pathname) {
                e.preventDefault();
              }
            }}
            readOnly={isReadOnly}
          />
        </div>
      )}
      {isSearchByFile && (
        <div className="search-file">
          <h3>
            Upload File
            <span className="normal"> (optional)</span>
          </h3>
          <div className="upload-file">
            <div className="l">
              <input
                type="file"
                name="file"
                style={{ display: 'none' }}
                ref={inputFileRef}
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              />
              <Button className="btn" onClick={onBtnClick}>
                Select File
              </Button>
            </div>
            {selectedFileName ? (
              <div className="selected-file">
                <div>
                  <h3>Selected file:</h3>
                  <p>{selectedFileName}</p>
                  <Skeleton active paragraph={false} loading={isLoading} />
                </div>
                <img
                  src={pathname ? icBlackClose : icClose}
                  alt="close"
                  onClick={() => {
                    setSelectedFileName(null);
                  }}
                  className="ic-close"
                />
              </div>
            ) : isProspect ? (
              <Button className="prospect-lookup">Prospect Lookup</Button>
            ) : null}
          </div>
          {selectedFileName && isProspect && (
            <div style={{ marginTop: '15px' }}>
              <Button className="prospect-lookup left-button">Prospect Lookup</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default SearchField;
