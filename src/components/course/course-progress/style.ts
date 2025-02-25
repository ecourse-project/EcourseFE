import styled from '@emotion/styled';

export const CourseProgressWrapper = styled.div`
  .course_header_wrapper {
    height: 60px;
    background-color: #bdd7ee;
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    border-radius: 0 0 10px 10px;
    .ant-col {
      height: 100%;
    }
    .right_box {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
    .rating {
      height: 100%;
      display: flex;
      align-items: center;
      .anticon-star {
        font-size: 18px;
        color: #faad14;
      }
      .rating_btn {
        background: #000;
        border-color: #000;
        color: #fff;
        font-weight: 500;
        font-size: 16px;
        padding: 4px 4px;

        &:hover {
          opacity: 0.7;
        }
      }
    }
    .course_header {
      color: #fff !important;
      font-weight: 600;
      line-height: 50px;
      font-size: 18px;
      cursor: pointer;
    }
    .progress {
      display: flex;
      height: 100%;
      align-items: center;
      background: #bdd7ee;
      width: unset;
      .progress_circle {
        .ant-progress-inner {
          width: 50px !important;
          height: 50px !important;
          font-size: 13px !important;

          .ant-progress-text {
            font-weight: 600;
            color: #000;
          }
        }
      }
      .progress_label {
        margin-left: 10px;
        font-size: 15px;
        font-weight: 500;
        cursor: pointer;
        color: #000;
        .anticon-down {
          vertical-align: baseline;
        }
      }
    }
    .header-group {
      width: fit-content;
      display: flex;
      justify-content: space-evenly;
      align-items: baseline;
      gap: 10px;
      .anticon-swap,
      .course_header {
        color: #000 !important;
      }
      .home_header {
        color: #000 !important;
        font-size: 26px;
        font-weight: 600;
      }
    }
  }
  .course_content {
    .anticon {
      font-size: 19px;
      cursor: pointer;
    }
    .video_wrapper {
      height: 30%;
      width: 100%;
      video {
        border-radius: 5px;
      }
    }
    .document_content {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-height: 650px;
      // height: 650px;

      .react-pdf__Document {
        max-height: 100%;
        .react-pdf__Page {
          max-height: 100%;
          // height: 650px;
        }
      }
      .react-pdf__Page__annotations annotationLayer {
        height: 0 !important;
      }
    }
    .page_group {
      display: flex;
      height: 25px;
      align-items: baseline;
      margin: 40px;

      p {
        font-size: 16px;
        font-weight: 500;
      }
      input {
        width: 60px;
        border: 3px solid;
        border-radius: 2px;
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
  .course_list {
    max-height: 90vh;
    overflow: auto;
    .save-change-btn {
      width: 100%;
      height: 50px;
      font-weight: 700;
      font-size: 20px;
    }
    .quiz_header {
      .ant-collapse-header {
        cursor: none;
      }
      .ant-collapse-header-text {
        font-weight: 700;
        color: #000;
      }
    }
    .quiz_name {
      cursor: pointer;
    }
    .course_lesson {
      .ant-collapse-header {
        font-weight: 700;
      }
      .course_list_video {
        .ant-collapse-header {
          font-weight: 600;
        }
      }
    }

    .ant-list-item {
      padding: 0;
    }
    .course_list_video {
      .ant-collapse-header {
        padding-left: 45px;
      }
    }
    .course_video_item {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      color: #1c1d1f;
      padding: 0.8rem 0.6rem;

      cursor: pointer;
      &:hover {
        background-color: #d1d7dc;
      }
      input {
        height: 18px;
        width: 18px;
      }
      input[type='checkbox'] {
        accent-color: #1c1d1f;
      }
    }
  }

  .comment_group {
    padding: 10px;
    flex-direction: column;
  }
  .pdf_wrapper {
    width: 100%;
  }
  @media (min-width: 1500px) {
    .video_wrapper {
      width: 100%;
      height: 16.7%;
      margin: auto;
      video {
        border-radius: 5px;
      }
    }
  }
  .ant-collapse {
    width: 100%;

    .ant-collapse-content > .ant-collapse-content-box {
      padding: 16px;
    }
  }
  .tab-section {
    padding: 50px;
  }
`;
