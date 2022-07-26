import { bannerApps } from 'assets/dummy';
import { HeroBanner } from 'components';
import { Default } from 'container/templates';

function Apps() {
  return (
    <>
      <Default>
        <HeroBanner data={bannerApps} />
      </Default>
    </>
  );
}

export default Apps;
