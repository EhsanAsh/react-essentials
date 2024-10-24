import { useState } from 'react'; // React hooks should be used only inside components and only at top level, which means that we can't use them inside a function or any conditional statements and such.
// useState is one of the most important react hook which allows us to control and execute UI changes and update UI. It's some data that is stored by React, which when changed will trigger the corresponding component function that the hook belongs, to be revaluated and re-executed
// this hook accepts an arguments, which is the default value that we want to be stored and saved by react the first time that the page is rendered. Then it returns an array with two elements that we can deconstruct and save on a variable.

import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs';
import { EXAMPLES } from '../data.js';

const Examples = () => {
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
		<Section title="Examples" id="examples">
			<Tabs
				// ButtonsContainer="menu"
				buttons={
					<>
						<TabButton
							isSelected={selectedTopic === 'components'}
							onClick={() => handleSelect('components')}>
							Components
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'jsx'}
							onClick={() => handleSelect('jsx')}>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'props'}
							onClick={() => handleSelect('props')}>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'state'}
							onClick={() => handleSelect('state')}>
							State
						</TabButton>
					</>
				}>
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
			</Tabs>
		</Section>
	);
};

export default Examples;
