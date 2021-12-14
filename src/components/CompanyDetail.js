import { Row, Col, Button, Container } from 'react-bootstrap';

function CompanyDetail(props) {
	const { companyDataObj } = props;

	return (
		<Container>
			<Row className="justify-content-center pt-5 pb-5">
				<Col sm="12" lg="7" className="text-center d-grid gap-3">
					<h3>Om arbetsgivaren</h3>
					<p>{companyDataObj.about}</p>
					<Button variant="link" className="link w-25 mx-auto fs-4">
						{companyDataObj.url}
					</Button>
					<Button variant="primary" className="col-5 mx-auto">
						{`Fler jobb hos ${companyDataObj.company}`}
					</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default CompanyDetail;
