import { bannerDoctor } from 'assets/dummy';
import { HeroBanner } from 'components';
import { Default } from 'container/templates';

function Doctor() {
  return (
    <>
      <Default>
        <HeroBanner data={bannerDoctor} />
      </Default>
    </>
  );
}

export default Doctor;
