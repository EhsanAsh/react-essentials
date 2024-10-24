import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from './CoreConcept.jsx';
import Section from './Section.jsx';

export default function CoreConcepts() {
	// const [objOne, objTwo, objThree, objFour] = CORE_CONCEPTS;
	return (
		<Section title="Core Concepts" id="core-concepts">
			<ul>
				{/* It returns an array including CoreConcept tags. React can render an array like this {[<p>Hello</p>, <p>World!</p> ]} */}
				{CORE_CONCEPTS.map((item, idx) => (
					<CoreConcept key={idx} {...item} />
				))}
				{/* <CoreConcept {...objOne} />
						<CoreConcept
							title={objTwo.title}
							description={objTwo.description}
							image={objTwo.image}
						/>
						<CoreConcept {...objThree} />
						<CoreConcept {...objFour} /> */}
			</ul>
		</Section>
	);
}
