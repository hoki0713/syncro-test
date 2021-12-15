import useWindowDimensions from './useWindowDemenstion';

export default function useMobileStatus() {
	const { width } = useWindowDimensions();

	return width < 993;
}
