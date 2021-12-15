import { Row, Col } from 'react-bootstrap';

import './JobDescriptions.scss';

function JobDescription(props) {
	const { jobDescription } = props;

	return (
		<Row>
			<Col>
				{jobDescription &&
					jobDescription.split('\n').map((paragraph, index) => {
						return (
							<p
								key={index}
								className={`description ${
									paragraph.trim() === 'Övrigt' && 'bold'
								}`}
							>
								{paragraph}
								<br />
							</p>
						);
					})}
			</Col>
		</Row>
	);
}

export default JobDescription;
