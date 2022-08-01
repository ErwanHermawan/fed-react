import { bannerData } from 'assets/dummy';
import { HeroBanner } from 'components';
import { Default } from 'container/templates';

function About() {
  return (
    <>
      <Default>
        <HeroBanner data={bannerData} />
      </Default>
    </>
  );
}

export default About;
