import { bannerData } from 'assets/dummy';
import { HeroBanner } from 'components';
import { Default } from 'container/templates';

console.log(1);

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
