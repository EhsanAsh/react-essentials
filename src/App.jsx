import { useState } from 'react'; // React hooks should be used only inside components and only at top level, which means that we can't use them inside a function or any conditional statements and such.
// useState is one of the most important react hook which allows us to control and execute UI changes and update UI. It's some data that is stored by React, which when changed will trigger the corresponding component function that the hook belongs, to be revaluated and re-executed
// this hook accepts an arguments, which is the default value that we want to be stored and saved by react the first time that the page is rendered. Then it returns an array with two elements that we can deconstruct and save on a variable.

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';

function App() {
	// const [objOne, objTwo, objThree, objFour] = CORE_CONCEPTS;

	// the first element is the default value the first time that this component is rendered, and the second one is a function returned by React, that we can use to store a new data in the first element to update the UI. So by calling the second value to save a data on the first value, React notifies that the page should be re-executed
	const [selectedTopic, setSelectedTopic] = useState(null);

	function handleSelect(selectedBtn) {
		setSelectedTopic(selectedBtn);
	}

	// instead of using if statement inside the jsx code like down below, we could:
	/*
	let tabContent = <p>Please select a topic.</p>;
	if (selectedTopic) {
		tabContent = 	
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
	}
	*/
	// Then use {tabContent} instead of the written code down below

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
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
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton
							isSelected={selectedTopic === 'components'}
							onSelect={() => handleSelect('components')}>
							Components
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'jsx'}
							onSelect={() => handleSelect('jsx')}>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'props'}
							onSelect={() => handleSelect('props')}>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'state'}
							onSelect={() => handleSelect('state')}>
							State
						</TabButton>
					</menu>
					{!selectedTopic ? <p>Please select a topic.</p> : null}
					{selectedTopic && (
						<div id="tab-content">
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					)}
				</section>
			</main>
		</div>
	);
}

export default App;
