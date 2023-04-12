import { times } from 'lodash';
import Skeleton from 'react-loading-skeleton';

import { css } from '@emotion/react';

function DocCourseItemSkeleton(props) {
  return (
    <div
      css={css`
        display: flex;
        isplay: flex;
        flex-wrap: wrap;
        gap: 25px;
        .doc-skeleton {
          padding-left: 8px;
          padding-right: 8px;
        }
      `}
    >
      {times(9).map((e, i) => {
        return (
          <div key={i} className="doc-skeleton">
            <Skeleton height={130} width={200} />
            <Skeleton height={10} width={200} />
            <Skeleton height={10} width={200} />
            <Skeleton height={20} width={130} />
            <Skeleton height={30} width={200} />
          </div>
        );
      })}
    </div>
  );
}
export default DocCourseItemSkeleton;
