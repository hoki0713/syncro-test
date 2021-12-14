import { Button } from 'react-bootstrap';

function Apply(props) {
	const { className } = props;

	return <Button className={`rounded-pill ${className}`}>Ansök Här</Button>;
}

export default Apply;
