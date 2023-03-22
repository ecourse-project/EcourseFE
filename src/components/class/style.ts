import { GlobalStyle } from 'src/lib/utils/enum';

import styled from '@emotion/styled';

export const ItemDocCourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100%;
  max-width: 210px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: all 1s ease;
  }

  .title,
  p {
    color: black;
    margin-bottom: 6px;
  }

  .title {
    display: block !important;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    margin: 0.5rem 0;
    font-family: 'Montserrat';
    text-align: left;
    font-size: 17px;
    font-weight: 600;
    height: 40px;
  }

  .description {
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: gray;
    white-space: normal;
  }

  @media only screen and (min-width: 1200px) {
    .ant-btn[disabled] {
      letter-spacing: 2px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .ant-btn[disabled] {
      letter-spacing: 0px;
    }
  }

  .download {
    font-weight: 400;

    & .rate-score {
      color: #b4690e;
      font-weight: 700;
    }
  }

  .doc--image {
    max-width: 100%;
    margin-bottom: 10px;

    .doc-img {
      width: 200px;
      height: 130px;
      aspect-ratio: auto 240 / 135;
    }
  }

  .doc_info {
    margin: 0 10px;
  }

  .anticon {
    position: relative;
    bottom: 3px;
    right: 6px;
    color: ${GlobalStyle.BROWN_YELLOW};
  }

  .anticon-star {
    color: unset;
    position: unset;
  }

  .card-btn {
    width: 100%;
    color: #000;
    border-color: #000;
  }

  .price-tag {
    display: flex;
    justify-content: left;
    font-weight: 600;
    font-size: 22px;
    margin-left: 10px;
    align-items: center;
  }

  .doc-info {
    margin: 0 10px;
  }

  [ant-click-animating-without-extra-node='true']:after {
    display: none;
  }

  .ant-click-animating-node {
    display: none;
  }

  .ant-rate {
    font-size: 14px;
    margin: 0 10px;
    color: #ffa535;

    .ant-rate-star {
      margin: 0;
    }
  }

  button[disabled] {
    cursor: not-allowed;
  }
`;

export const DocCourseWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  gap: 25px;
  justify-content: flex-start;
  /* .ant-col {
    padding: 0 5px 30px 5px;
  } */
  .item:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: all 1s ease;
  }
`;
