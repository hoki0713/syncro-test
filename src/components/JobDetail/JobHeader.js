import { Col, Row, Button, Image } from 'react-bootstrap';

import { MapMarker, ImageFrame } from '../UI/Icons';
import ApplyButton from '../UI/Button/Apply';

function JobHeader(props) {
	const {
		companyName,
		jobTitle,
		location,
		jobType,
		jobPeriod,
		companyBGImage,
		companyLogo,
	} = props;

	return (
		<Row className="top-box mb-5">
			<Col sm="6" className="d-flex flex-column justify-content-evenly">
				<h1>{companyName}</h1>
				<h2>{jobTitle}</h2>

				<div className="d-flex gap-3">
					<MapMarker /> {`${location} - ${jobPeriod} - ${jobType}`}
				</div>
				<span className="d-flex flex-wrap gap-3">
					<ApplyButton className="no-border" />
					<Button variant="outline-primary" className="rounded-pill outline">
						Gå tillbaka
					</Button>
				</span>
			</Col>

			<Col sm="6">
				<div className="top-img-box">
					<ImageFrame className="img-frame" bgImage={companyBGImage} />
					<div className="logo-box w-100 h-100">
						<Image src={companyLogo} />
					</div>
				</div>
			</Col>
		</Row>
	);
}

export default JobHeader;
