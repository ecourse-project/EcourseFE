/* eslint-disable prettier/prettier */

import { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeData from 'src/components/home';
import CourseService from 'src/lib/api/course';
import { RootState } from 'src/lib/reducers/model';
import { Course, Document, Homepage } from 'src/lib/types/backend_modal';

const LIMIT = 4;

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
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const fetchHomeData = async () => {
    try {
      setLoading(true);
      const homes: Homepage[] = await CourseService.getHome();
      setHomeData(homes);
    } catch (error) {
      console.log('errror', error);
    } finally {
      setLoading(false);
    }
  };
  const listDoc = useSelector((state: RootState) => state.document.mostDownDoc);
  const listCourse = useSelector((state: RootState) => state.course.mostDownCourse);
  useEffect(() => {
    fetchHomeData();
  }, []);
  return (
    <div className="page-container">
      {homeData.map((v, i) => {
        return <HomeData homeData={v} key={i} />;
      })}
    </div>
  );
};
const HomeSection: React.FC = () => {
  return <HomeUI />;
};

export default HomeSection;
