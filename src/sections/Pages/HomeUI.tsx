/* eslint-disable prettier/prettier */

import { Col, Row } from 'antd';
import { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import HomeData from 'src/components/home';
import HomeSide from 'src/components/home/homeSide';
import CourseService from 'src/lib/api/course';
import { Course, Document, Homepage } from 'src/lib/types/backend_modal';

interface InitialState {
  listDoc: Document[];
  listCourse: Course[];
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

export interface ICategory {
  name: string;
  img: StaticImageData;
  url: string;
}

const HomeUI = () => {
  const [homeData, setHomeData] = useState<Homepage[]>([]);
  const fetchHomeData = async () => {
    try {
      const homes: Homepage[] = await CourseService.getHome();
      setHomeData(homes);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);
  return (
    <div className="page-container">
      <Row gutter={16} style={{ maxWidth: '100%' }}>
        <Col span={18}>
          {homeData?.map((v, i) => {
            return <HomeData homeData={v} key={i} />;
          })}
        </Col>
        <Col span={6}>
          <HomeSide />
        </Col>
      </Row>
    </div>
  );
};
const HomeSection: React.FC = () => {
  return <HomeUI />;
};

export default HomeSection;
