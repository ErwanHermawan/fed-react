import { TestimonyItem } from 'components';

const Testimony = ({ data }) => {
  const { title, item } = data;
  return (
    <div className='testimony'>
      <div className='container'>
        <div className='testimony__box'>
          <div className='testimony__box__head'>
            <h2 className='text-title text-title--white'>{title}</h2>
          </div>
          <div className='testimony__list js-testimony'>
            {item.map((val, idx) => (
              <TestimonyItem key={`ts-${idx}`} data={val} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
