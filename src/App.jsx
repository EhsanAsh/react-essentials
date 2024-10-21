import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js';

function App() {
	const [objOne, objTwo, objThree, objFour] = CORE_CONCEPTS;
	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						<CoreConcept {...objOne} />
						<CoreConcept
							title={objTwo.title}
							description={objTwo.description}
							image={objTwo.image}
						/>
						<CoreConcept {...objThree} />
						<CoreConcept {...objFour} />
					</ul>
				</section>
			</main>
		</div>
	);
}

export default App;
