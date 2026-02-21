/* eslint-disable prettier/prettier */

import { Col, Row } from 'antd';
import HomeData from 'src/components/home';
import HomeSide from 'src/components/home/homeSide';
import useCourseHook from 'src/lib/api/course/query-hooks/useCourseHook';

const HomeUI = () => {
  const { homeData } = useCourseHook();
  return (
    <div className="page-container">
      <Row gutter={16} style={{ maxWidth: '100%' }}>
        <Col span={18}>
          {homeData?.homepage?.map((v, i) => {
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
