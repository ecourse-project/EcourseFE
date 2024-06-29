import { useQuery } from 'react-query';
import CourseService from '..';
import { DEFAULT_STALE_TIME, ONE_DAY_CACHE_TIME } from 'src/lib/utils/constant';

const useCourseHook = () => {
  const { data: homeData, error: homeError } = useQuery('home', CourseService.getHome, {
    staleTime: DEFAULT_STALE_TIME,
    keepPreviousData: true,
    cacheTime: ONE_DAY_CACHE_TIME,
    refetchOnWindowFocus: false,
  });

  const {
    data: chatHistory,
    error: chatHistoryError,
    refetch: refetchChatList,
    isLoading: chatLoading,
  } = useQuery('chat-history', CourseService.getChatHistory, {
    staleTime: DEFAULT_STALE_TIME,
    keepPreviousData: true,
    cacheTime: ONE_DAY_CACHE_TIME,
    refetchOnWindowFocus: false,
  });
  return { homeData, homeError, chatHistory, chatHistoryError, refetchChatList, chatLoading };
};
export default useCourseHook;
