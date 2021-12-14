import { Container } from 'react-bootstrap';

import { JobDetail, Middle, CompanyDetail, Footer } from './components';
import DefaultCompanyBGImage from './assets/burger_king_bg 1.png';
import DefaultCompanyLogoImage from './assets/burger_king_PNG15 1.png';

import './App.scss';

function App() {
	const jobData = {
		company: 'Burger King',
		title: 'Vi söker servicefokuserade restaurangmedarbetare',
		location: 'Burger King Varberg, Varbergs Kommun',
		period: 'Tillsvidare',
		type: 'Deltid',
		logo: DefaultCompanyLogoImage,
		bgImg: DefaultCompanyBGImage,
		description: `Vi vet att en anställd som trivs skapar goda gästupplevelser. Vi söker dig som tror på att gott ledarskap är grunden till god service. Som arbetsledare har du 100% ansvar för att driften fungerar under dina skift. Du fördelar arbetsuppgifter, utvecklar och motiverar dina medarbetare. Som arbetsledare på Burger King är du med och ansvarar för:

		Driften av restaurangen
		Utvecklingen och utbildningen av personalen
		Ekonomiska resultat
		Restaurangens gästupplevelse, matkvalitet och renlighet
		Varför ska du välja oss?

		För att du är en person som tycker om att ta ansvar och fatta beslut
		För att du tycker om att utvecklas och lära nytt
		Vi erbjuder flexibel arbetstid
		Vi erbjuder ett spännande och varierande arbete i högt tempo
		Hos oss skaffar du dig värdefull ledarerfarenhet som är efterfrågad även i många andra branscher
		Önskar du att utvecklas finns det många karriärmöjligheter hos oss, både inom Burger King, inom något av våra andra varumärken eller på vårt huvudkontor. Vi söker dig som:

		Har en naturlig fallenhet att leda och inspirera andra genom arbetsglädje och fokus på goda resultat
		Som förstår vikten av att vara en god förebild
		Som gärna har tidigare erfarenhet av servicebranschen
		Känner du igen dig i detta så tycker vi du ska skicka din ansökan redan idag! Välkommen!

		#welcometalent

		Övrigt
		Rekrytering sker löpande
		Arbetstid 16-01`,
	};

	const companyData = {
		about:
			'Burger King är ett av världens största restaurangföretag. För oss är självklart engagerade, motiverade och trevliga medarbetare nyckeln till vår framgång. Därför värderar vi vår personal högt och erbjuder en tydlig karriärstege med fortbildning och goda utvecklingsmöjligheter.',
		url: 'www.burgerking.se',
	};

	return (
		<Container fluid className="p-0">
			<JobDetail jobDataObj={jobData} />
			<Middle />
			<CompanyDetail companyDataObj={companyData} />
			<Footer />
		</Container>
	);
}

export default App;
