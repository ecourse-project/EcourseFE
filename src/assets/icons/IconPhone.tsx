import * as React from 'react';
import { SVGProps } from 'react';

const IconPhone = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={30} viewBox="0 0 20 30" {...props}>
    <g id="check-square" transform="translate(-3.285 1.152)">
      <g id="smartphone" transform="translate(4.479 -0.152)">
        <rect
          id="Rectangle_500"
          data-name="Rectangle 500"
          width={18}
          height={28}
          rx={2}
          transform="translate(-0.194)"
          fill="none"
          stroke="#ffa535"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <g
          id="Ellipse_20"
          data-name="Ellipse 20"
          transform="translate(7.806 21)"
          fill="none"
          stroke="#ffa900"
          strokeWidth={2}
        >
          <circle cx={1} cy={1} r={1} stroke="none" />
          <circle cx={1} cy={1} r={2} fill="none" />
        </g>
      </g>
    </g>
  </svg>
);

export default IconPhone;
