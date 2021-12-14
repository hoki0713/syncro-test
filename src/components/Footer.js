import { Container, Row, Col } from 'react-bootstrap';

function Footer(props) {
	return (
		<Container fluid className="footer">
			<Row className="h-100 text-center">
				<Col className="text-white d-flex flex-column justify-content-center gap-4">
					<p>Fair Recruiting</p>
					<p>Den här sidan drivs av © Fair Recruiting 2021</p>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
