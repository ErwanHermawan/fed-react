import { bannerTestimonials } from 'assets/dummy';
import { HeroBanner } from 'components';
import { Default } from 'container/templates';

function Testimonials() {
  return (
    <>
      <Default>
        <HeroBanner data={bannerTestimonials} />
      </Default>
    </>
  );
}

export default Testimonials;
