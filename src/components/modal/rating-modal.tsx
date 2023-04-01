import { UserOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Avatar, Card, Rate } from 'antd';
import Meta from 'antd/lib/card/Meta';
import TextArea from 'antd/lib/input/TextArea';
import { defaults, isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Rating } from 'src/lib/types/backend_modal';
import BaseModal from '.';
import AppButton from '../button';
import ErrorMessage from '../error-message';
import AppInput from '../input';
interface RatingModalProps {
  visible: boolean;
  countStar: (value) => void;
  onChangeFeedback?: (value) => void;
  onClose: () => void;
  onSave: () => void;
  defaultStar?: number;
  rated?: Rating;
}
const RatingModal: React.FC<RatingModalProps> = (props) => {
  const { visible, countStar, onChangeFeedback, onClose, onSave, rated, defaultStar } = props;
  const [star, setStar] = useState<number>(defaultStar || 0);
  const [msg, setMsg] = useState<string>('');
  const [msgError, setMsgError] = useState<string>('');
  useEffect(() => {
    countStar(star);
  }, [visible]);
  return (
    <BaseModal
      visible={visible}
      onCancel={onClose}
      css={css`
        position: relative;
        top: 30%;
        .ant-modal-content {
          width: 650px;
        }
        .ant-modal-body {
          text-align: center;
          height: 450px;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          flex-direction: column;

          .ant-rate {
            font-size: 50px;
          }
          .title {
            font-size: 24px;
            font-weight: 700;
            font-family: 'Montserrat';
            text-transform: capitalize;
          }
          .ant-input-textarea {
            width: 560px;
            font-size: 18px;
            & textarea {
              border: medium solid #000;
              resize: none;
              border-color: #000;
              padding: 20px;
              letter-spacing: 1px;
              font-size: 18px;
            }
          }
          .ant-input-textarea-show-count:after {
            float: left !important;
          }
          .save-btn {
            float: right;
            margin-top: 5px;
            font-weight: 600;
            color: #fff;
            &:hover {
              letter-spacing: 6px;
            }
          }
        }
        .card-wrapper {
          width: 90%;
          .ant-card-body {
            width: 100%;
          }
          .ant-card-meta-detail {
            text-align: left;
          }
          .ant-rate {
            font-size: 30px;
            margin-left: 20px;
            color: #faad14;
          }
          .ant-card-meta-title {
            font-weight: 600;
          }
        }
      `}
      footer={null}
    >
      {!isEmpty(rated) ? (
        <div className="card-wrapper">
          <Card>
            <Meta
              // avatar={<Avatar src={rated?.user?.avatar || 'https://joeschmoe.io/api/v1/random'} />}
              // avatar={<Avatar src={'https://joeschmoe.io/api/v1/random'} />}
              avatar={<Avatar src={<UserOutlined />} alt="avata" shape="square" />}
              title={
                <>
                  {rated?.user?.full_name}
                  {/* <Rate disabled defaultValue={rated?.rating} /> */}
                </>
              }
              description={rated?.comment}
            />
          </Card>
        </div>
      ) : (
        <>
          <div className="title">Để lại đánh giá</div>
          <div>
            <Rate
              className="rating"
              onChange={(value) => {
                setStar(value);
                countStar(value);
              }}
              defaultValue={star || defaultStar}
              style={{ color: '#e59819', marginBottom: '20px' }}
            />
            {star ? (
              <>
                <TextArea
                  maxLength={100}
                  showCount
                  rows={5}
                  onChange={(e) => {
                    setMsg(e.target.value);
                    onChangeFeedback && onChangeFeedback(e.target.value);
                  }}
                />
                {msgError.length ? <ErrorMessage className="error">{msgError}</ErrorMessage> : null}
                <AppButton
                  className="save-btn"
                  btnTextColor={'white'}
                  btnStyle={'solid'}
                  btnSize={'small'}
                  btnWidth={'fix-content'}
                  onClick={() => {
                    if (!msg.length) return setMsgError('Xin hãy để lại nhận xét');
                    onChangeFeedback && onChangeFeedback(msg);
                    onSave();
                  }}
                >
                  Lưu
                </AppButton>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </>
      )}
    </BaseModal>
  );
};

export default RatingModal;
