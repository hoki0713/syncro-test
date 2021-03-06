import { Row, Col, Container } from 'react-bootstrap';

import { LinkedIn, Facebook, Mail, Twitter } from './UI/Icons';
import ApplyButton from './UI/Button/Apply';

function Middle(props) {
	return (
		<Container fluid className="bg-white pt-5 pb-5">
			<Row className="justify-content-center">
				<Col sm="8" md="6" lg="5" className="text-center d-grid gap-4">
					<h3>Se hur du matchar med det här jobbet</h3>
					<p>
						I din ansökan kommer du att få svara på frågor. Då kan vi matcha
						dina kunskaper och personliga egenskaper med rollen och
						arbetsplatsens kultur.
					</p>
					<ApplyButton className="px-5 m-auto">Ansök Här</ApplyButton>
					<div className="d-flex flex-wrap justify-content-around">
						<LinkedIn />
						<Facebook />
						<Mail />
						<Twitter />
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Middle;
