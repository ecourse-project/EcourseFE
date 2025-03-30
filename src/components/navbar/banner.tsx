import Link from 'next/link';
import BannerImg from 'src/assets/images/banner.png';
import Logo from 'src/assets/images/logo.png';
import RoutePaths from 'src/lib/utils/routes';

import styled from '@emotion/styled';
import Image from 'next/image';

const BannerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;

  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
  --bs-gutter-x: 5rem;
  --bs-gutter-y: 0;
  .app-logo,
  .app-banner {
    position: relative;
    height: 100px;
    a {
      height: 100%;
      position: relative;
      display: block;
      width: fit-content;
    }
    img {
      position: relative !important;
    }
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
          <Image src={Logo.src} objectFit="contain" alt={'img'} fill={true} />
        </Link>
      </div>
      <div className="app-banner">
        <Image src={BannerImg.src} objectFit="contain" alt={'img'} layout="fill" />
      </div>
    </BannerWrapper>
  );
};
export default Banner;
