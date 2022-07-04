import trafalgar from 'assets/img/logo/trafalgar.svg';
import trafalgarWhite from 'assets/img/logo/trafalgar-white.svg';

const Logo = ({className, name = 'trafalgar'}) => {

	const imageDatas = {
		'trafalgar' : trafalgar,
		'trafalgar-white' : trafalgarWhite
	};

	return (
		<img className={className} src={imageDatas[name]} alt={name} />
	);

}

export default Logo;