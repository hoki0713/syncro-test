import useMobileStatus from '../../hooks/useMobileStatus';

import JobHeaderMobile from './JobHeaderMobile';
import JobHeaderDesktop from './JobHeaderDesktop';

function JobHeader(props) {
	const { job } = props;

	const isMobile = useMobileStatus();

	if (isMobile) {
		return <JobHeaderMobile job={job} />;
	}
	return <JobHeaderDesktop job={job} />;
}

export default JobHeader;
