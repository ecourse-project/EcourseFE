import { Image } from 'antd';
import Link from 'next/link';
import BannerImg from 'src/assets/images/banner.png';
import Logo from 'src/assets/images/logo.png';
import RoutePaths from 'src/lib/utils/routes';

import styled from '@emotion/styled';

const BannerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
  --bs-gutter-x: 5rem;
  --bs-gutter-y: 0;
  .app-logo,
  .app-banner {
    height: 100px;
  }
  .app-banner {
    height: 100px;
  }
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <div className="app-logo">
        <Link href={RoutePaths.HOME}>
          <Image src={Logo.src} preview={false} height={100} />
        </Link>
      </div>
      <div className="app-banner">
        <Image src={BannerImg.src} preview={false} height={100} />
      </div>
    </BannerWrapper>
  );
};
export default Banner;
