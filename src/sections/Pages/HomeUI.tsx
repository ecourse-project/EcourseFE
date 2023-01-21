/* eslint-disable prettier/prettier */

import { AppstoreAddOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Col, Divider, Row } from 'antd';
import { useEffect } from 'react';
import CourseItem from 'src/components/course/course-item';
import DocItem from 'src/components/document/doc-item';
import { Course, Document, SaleStatusEnum } from 'src/lib/types/backend_modal';
import { courseAction } from 'src/lib/reducers/course/courseSlice';
import { docActions } from 'src/lib/reducers/document/documentSlice';
import { RootState } from 'src/lib/reducers/model';
import CourseService from 'src/lib/api/course';
import { useDispatch, useSelector } from 'react-redux';
import Layout from 'src/components/common/Layout';
import Chemistry from 'src/assets/images/ecourseLogo-removebg-preview.png';
import Image, { StaticImageData } from 'next/image';

const LIMIT = 4;

interface InitialState {
  listDoc: Document[];
  listCourse: Course[];
  O;
}

enum HomeActionKind {
  LIST_DOC = 'LIST_DOC',
  LIST_COURSE = 'LIST_COURSE',
  UPDATE_DOC = 'UPDATE_DOC',
  UPDATE_COURSE = 'UPDATE_COURSE',
}
export interface ActionBase {
  type: string;
  payload?: any;
}
function reducer(state: InitialState, action: ActionBase) {
  switch (action.type) {
    case HomeActionKind.LIST_DOC:
      return {
        ...state,
        listDoc: action.payload,
      };
    case HomeActionKind.UPDATE_DOC:
      const item = [...state.listDoc];
      const itemUpdateIdx = state.listDoc?.findIndex((item) => item.id === action.payload.id);
      if (itemUpdateIdx < 0) return state;
      //update existed drip
      const updateStatus = {
        ...action.payload,
        sale_status:
          action.payload.sale_status !== SaleStatusEnum.AVAILABLE ? SaleStatusEnum.AVAILABLE : SaleStatusEnum.IN_CART,
      };
      item.splice(itemUpdateIdx, 1, updateStatus);
      return {
        ...state,
        listDoc: item,
      };
    default:
      return state;
  }
}

export interface ICategory {
  name: string;
  img: StaticImageData;
  url: string;
}

const category: ICategory[] = [
  {
    name: 'Toán',
    img: Chemistry,
    url: '',
  },
  {
    name: 'Lý',
    img: Chemistry,
    url: '',
  },
  {
    name: 'Hoá',
    img: Chemistry,
    url: '',
  },
];

const HomeUI = () => {
  const dispatch = useDispatch();
  const fetchHomeData = async () => {
    const mostDownloadDoc = await CourseService.getMostDownloadDocs();
    const mostDownloadCourse = await CourseService.getMostDownloadCourses();
    dispatch(docActions.fetchMostDoc(mostDownloadDoc));
    dispatch(courseAction.fetchMostCourse(mostDownloadCourse));
  };
  const listDoc = useSelector((state: RootState) => state.document.mostDownDoc);
  const listCourse = useSelector((state: RootState) => state.course.mostDownCourse);
  useEffect(() => {
    fetchHomeData();
  }, []);
  return (
    <div
      className="page-container2"
      css={css`
        .doc-wrapper {
          padding-bottom: 40px;
          &:last-child {
            padding-bottom: 60px;
          }
        }
        .ant-col {
          height: 100%;
        }
        .cover {
          color: '#fff';
          lineheight: '160px';
          textalign: 'center';
          background: '#fff';
          margin: '0 auto';
          .rounded {
            margin: 0 auto;
            height: 350px;
          }
        }
        .doc {
          display: flex;
        }
        .title {
          font-weight: 700;
          font-size: 20px;
          text-align: center;
        }
        .doc-title {
          font-size: 30px;
          font-weight: 500;
          text-decoration: overline;
          .anticon {
            vertical-align: baseline;
          }
        }
      `}
    >
      <Divider orientation="center">Tải nhiều nhất</Divider>
      <div className="doc-wrapper">
        <div className="doc-title">
          <AppstoreAddOutlined />
          {' Tài liệu'}
        </div>
        <Row gutter={[8, 16]}>
          {listDoc?.slice(0, LIMIT).map((e, i) => {
            return (
              <Col lg={8} xl={6} md={12} sm={24} xs={24} key={i}>
                <DocItem document={e} />
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="doc-wrapper">
        <div className="doc-title">
          <AppstoreAddOutlined />
          {'Khoá học'}
        </div>
        <Row gutter={[8, 16]}>
          {listCourse?.slice(0, LIMIT).map((e, i) => {
            return (
              <Col lg={8} xl={listCourse.length > 4 ? 6 : 8} md={12} sm={24} xs={24} key={i}>
                <CourseItem course={e} />
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="doc-wrapper">
        <div className="doc-title">
          <AppstoreAddOutlined />
          {'Chủ đề'}
        </div>
        <Row gutter={[8, 16]}>
          {category?.map((e, i) => {
            return (
              <Col lg={8} xl={category.length > 4 ? 6 : 8} md={12} sm={24} xs={24} key={i}>
                <div
                  css={css`
                    font-weight: 700;
                    background-color: #f8f9fb;
                    height: 230px;
                    img {
                      cursor: pointer;
                      display: grid;
                      place-items: center;

                      &:hover {
                        height: 220px;
                        width: 270px;
                        transition: all 0.5s linear;
                      }
                    }
                  `}
                >
                  <Image src={e.img} alt={''} height={200} width={250} />
                </div>
                <div
                  css={css`
                    font-weight: 700;
                  `}
                >
                  {e.name}
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};
const HomeSection: React.FC = () => {
  return <HomeUI />;
};

export default HomeSection;
