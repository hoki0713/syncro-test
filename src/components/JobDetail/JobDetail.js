import { Container } from 'react-bootstrap';

import useMobileStatus from '../../hooks/useMobileStatus';

import JobHeader from './JobHeader';
import JobDescription from './JobDescription';

function JobDetail(props) {
	const { jobDataObj } = props;

	const isMobile = useMobileStatus();

	return (
		<Container className="pt-lg-5 pb-5" fluid={isMobile}>
			<JobHeader job={jobDataObj} />
			<JobDescription jobDescription={jobDataObj.description} />
		</Container>
	);
}

export default JobDetail;
