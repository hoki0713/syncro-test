import { Container } from 'react-bootstrap';

import JobHeader from './JobHeader';
import JobDescription from './JobDescription';

import './JobDetail.scss';

function JobDetail(props) {
	const { jobDataObj } = props;

	return (
		<Container className="pt-5 pb-5">
			<JobHeader
				companyName={jobDataObj.company}
				jobTitle={jobDataObj.title}
				location={jobDataObj.location}
				jobType={jobDataObj.type}
				jobPeriod={jobDataObj.period}
				companyBGImage={jobDataObj.bgImg}
				companyLogo={jobDataObj.logo}
			/>
			<JobDescription
				jobDescription={jobDataObj.description}
				className="description"
			/>
		</Container>
	);
}

export default JobDetail;
