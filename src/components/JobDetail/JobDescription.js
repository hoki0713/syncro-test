import { Row, Col } from 'react-bootstrap';

function JobDescription(props) {
	const { jobDescription, className } = props;

	return (
		<Row>
			<Col>
				{jobDescription &&
					jobDescription.split('\n').map((paragraph, index) => {
						return (
							<p
								key={index}
								className={`${className} ${
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
