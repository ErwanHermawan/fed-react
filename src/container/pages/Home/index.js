import {
  bannerData,
  osData,
  sdLeadingData,
  sdDownloadData,
  testimonyData,
  blogData
} from 'assets/dummy';
import {
  HeroBanner,
  OurServices,
  SectionDescription,
  Testimony,
  Blog
} from 'components';
import { Default } from 'container/templates';

function Home() {
  return (
    <>
      <Default>
        <HeroBanner data={bannerData} />
        <OurServices data={osData} />
        <SectionDescription data={sdLeadingData} />
        <SectionDescription
          data={sdDownloadData}
          reverse={true}
          arrowIcon={true}
        />
        <Testimony data={testimonyData} />
        <Blog data={blogData} />
      </Default>
    </>
  );
}

export default Home;
