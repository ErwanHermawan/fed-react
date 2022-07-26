import { HeroBannerItem } from 'components';

const HeroBanner = ({ data }) => {
  return (
    <div className='hero-banner hero-banner--single'>
      {data.map((val, idx) => (
        <HeroBannerItem key={`hb-${idx}`} data={val} />
      ))}
    </div>
  );
};

export default HeroBanner;
