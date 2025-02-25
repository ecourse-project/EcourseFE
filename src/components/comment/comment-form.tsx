import TextArea from 'antd/lib/input/TextArea';
import { useFormik } from 'formik';
import React, { useRef, useState } from 'react';
import AppButton from 'src/components/button';

import { css } from '@emotion/react';

interface CommentFormProps {
  onAddComment: (value) => void;
}

interface CommentProps {
  content: string;
}
const CommentForm: React.FC<CommentFormProps> = ({ onAddComment }) => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [focus, setFocus] = useState<boolean>(false);

  const formik = useFormik<CommentProps>({
    initialValues: {
      content: '',
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      setSubmitting(true);
      setTimeout(() => {
        formik.setFieldValue('content', '');
        onAddComment(values?.content);
        setSubmitting(false);
      }, 800);
    },
  });

  return (
    <form
      css={css`
        .comment_box {
          textarea {
            resize: none;
          }
        }
        .btn_group {
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
          .ant-btn {
            font-size: 14px;
          }
        }
        .btn-cancel {
          border: none;
          margin: 10px 0;
          color: #000;
          height: 40px !important;
          box-shadow: none;
          border-radius: 18px;

          &:hover {
            border: none;
            color: #000;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            background-color: #e5e5e5 !important;
            font-weight: 700;
            text-align: center;
          }
        }
        .btn-cmt {
          background-color: #065fd4 !important;
          border-color: #065fd4 !important;
          height: 40px !important;
          border-radius: 18px !important;
          width: fit-content;
          color: #fff;
          &[disabled] {
            color: #000;
            background-color: rgba(0, 0, 0, 0.05) !important;
            width: fit-content;
          }
          &:hover {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            font-weight: 700;
          }
        }
        [ant-click-animating-without-extra-node='true']:after {
          display: none;
        }
      `}
      className="form-wrapper"
      onSubmit={formik.handleSubmit}
    >
      <div className="form-item">
        <TextArea
          className="comment_box"
          name="content"
          onChange={formik.handleChange}
          value={formik.values?.content}
          placeholder="Bình luận điều gì đó..."
          maxLength={500}
          showCount={true}
          allowClear={true}
          ref={(el) => {
            if (!el) return;
            inputRef.current = el;
          }}
          onFocus={() => setFocus(true)}
        />
      </div>
      {focus ? (
        <div className="form-item btn_group">
          <AppButton
            btnTextColor="black"
            btnSize="large"
            btnStyle="solid"
            btnWidth="fix-content"
            className="btn-cancel"
            onClick={() => setFocus(false)}
          >
            Huỷ
          </AppButton>
          <AppButton
            btnTextColor="black"
            btnSize="large"
            btnStyle="solid"
            btnWidth="fix-content"
            className="btn-cmt"
            htmlType="submit"
            loading={submitting}
            disabled={formik.values.content === ''}
          >
            Bình luận
          </AppButton>
        </div>
      ) : (
        <div></div>
      )}
    </form>
  );
};

export default CommentForm;
