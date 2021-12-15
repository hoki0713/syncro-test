import { Image } from 'react-bootstrap';
import { ImageFrame } from '../UI/Icons';

import './JobGraphics.scss';

function JobGraphics(props) {
	const { bgImage, logo } = props;

	return (
		<div className="job-graphics">
			<ImageFrame className="img-frame" bgImage={bgImage} />
			<div className="logo-box">
				<Image src={logo} fluid />
			</div>
		</div>
	);
}

export default JobGraphics;
