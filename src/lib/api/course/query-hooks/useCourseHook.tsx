import { useQuery } from 'react-query';
import CourseService from '..';
import { DEFAULT_STALE_TIME } from 'src/lib/utils/constant';

const useCourseHook = () => {
  const { data: homeData, error: homeError } = useQuery('home', CourseService.getHome, {
    staleTime: DEFAULT_STALE_TIME,
    keepPreviousData: true,
  });
  return { homeData, homeError };
};
export default useCourseHook;
