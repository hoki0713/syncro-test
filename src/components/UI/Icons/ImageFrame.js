function ImageFrame(props) {
	const { className, bgImage, width, height } = props;
	return (
		<div className={className}>
			<svg
				width={width}
				height={height}
				viewBox="150 80 450 270"
				xmlns="http://www.w3.org/2000/svg"
			>
				<clipPath id="clip0_51_91">
					<path
						id="thePath"
						d="M430.73846,118.25641C506.63589,84.92308 560.99486,83.38461 590.22563,157.23077C619.4564,231.07692 579.45641,307.48717 485.61025,333.64102C391.7641,359.79486 265.61025,291.07692 218.43076,263.38461C171.25128,235.6923 137.4002,195.68733 167.14871,150.5641C196.89722,105.44088 262.53334,128 286.12308,131.58974C309.71283,135.17948 354.84103,151.58975 430.73846,118.25641z"
					/>
				</clipPath>

				<use xlinkHref="#thePath" />
				<image
					clipPath="url(#clip0_51_91)"
					xlinkHref={bgImage}
					x="150"
					y="80"
					width={500}
					height={300}
				/>
			</svg>
		</div>
	);
}

export default ImageFrame;
