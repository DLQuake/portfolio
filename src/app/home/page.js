import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import IntroduceMe from './components/IntroduceMe/IntroduceMe';
import ConnectWithMe from './components/ConnectWithMe/ConnectWithMe';

export default function Home() {
	return (
		<div className="hero">
			<div className="hero-body p-0">
				<WelcomeSection />
				<IntroduceMe />
				<ConnectWithMe />
			</div>
		</div>
	);
}
