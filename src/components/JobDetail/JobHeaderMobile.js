import { Col, Row, Button, Image } from 'react-bootstrap';

import { MapMarker } from '../UI/Icons';
import ApplyButton from '../UI/Button/Apply';

import './JobHeaderMobile.scss';

function JobHeaderMobile(props) {
	const { job } = props;

	return (
		<Row className="mb-5">
			<Col className="d-flex flex-column p-0 position-relative">
				<Image src={job.bgImg} className="bg-img" />

				<div className="img-cover">
					<div className="logo-box bg-white">
						<Image src={job.logo} fluid />
					</div>
					<h1 className="text-white">{job.company}</h1>
				</div>

				<div className="px-3 header-body">
					<h2>{job.title}</h2>
					<div className="d-flex gap-3 my-3">
						<MapMarker /> {`${job.location} - ${job.period} - ${job.type}`}
					</div>
					<div className="buttons">
						<ApplyButton className="no-border" />
						<Button variant="outline-primary" className="rounded-pill outline">
							Gå tillbaka
						</Button>
					</div>
				</div>
			</Col>
		</Row>
	);
}

export default JobHeaderMobile;
