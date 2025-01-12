import WelcomeSection from '../components/WelcomeSection';
import AboutMe from '../components/AboutMe';
import ConnectWithMe from '../components/ConnectWithMe';

export default function Home() {
	return (
		<>
			<div className="hero">
				<div className="hero-body p-0">
					<WelcomeSection />
					<AboutMe />
					<ConnectWithMe />
				</div>
			</div>
		</>
	);
}
