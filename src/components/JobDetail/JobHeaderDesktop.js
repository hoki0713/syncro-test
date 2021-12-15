import { Col, Row, Button } from 'react-bootstrap';

import { MapMarker } from '../UI/Icons';
import ApplyButton from '../UI/Button/Apply';
import JobGraphics from './JobGraphics';

import './JobHeaderDesktop.scss';

function JobHeaderDesktop(props) {
	const { job } = props;

	return (
		<Row className="top-box mb-5">
			<Col sm="6" className="d-flex flex-column justify-content-evenly">
				<h1>{job.company}</h1>
				<h2>{job.title}</h2>

				<div className="d-flex gap-3">
					<MapMarker /> {`${job.location} - ${job.period} - ${job.type}`}
				</div>
				<span className="d-flex flex-wrap gap-3 buttons">
					<ApplyButton className="no-border" />
					<Button variant="outline-primary" className="rounded-pill outline">
						Gå tillbaka
					</Button>
				</span>
			</Col>
			<Col sm="6">
				<JobGraphics bgImage={job.bgImg} logo={job.logo} />
			</Col>
		</Row>
	);
}

export default JobHeaderDesktop;
