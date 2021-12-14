import { Button } from 'react-bootstrap';

function Facebook(props) {
	return (
		<Button variant="link" className="btn-icon">
			<svg
				width="50"
				height="50"
				viewBox="0 0 50 50"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 25.1396C0 37.5687 9.02708 47.9042 20.8333 50V31.9437H14.5833V25H20.8333V19.4437C20.8333 13.1937 24.8604 9.72292 30.5562 9.72292C32.3604 9.72292 34.3062 10 36.1104 10.2771V16.6667H32.9167C29.8604 16.6667 29.1667 18.1937 29.1667 20.1396V25H35.8333L34.7229 31.9437H29.1667V50C40.9729 47.9042 50 37.5708 50 25.1396C50 11.3125 38.75 0 25 0C11.25 0 0 11.3125 0 25.1396Z"
					fill="#395185"
				/>
			</svg>
		</Button>
	);
}

export default Facebook;