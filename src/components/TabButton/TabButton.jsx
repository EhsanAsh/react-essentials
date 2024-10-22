const TabButton = ({ children, onSelect, isSelected }) => {
	return (
		<li>
			<button className={isSelected ? 'active' : undefined} onClick={onSelect}>
				{children}
			</button>
		</li>
	);
};

export default TabButton;
// children property is always available on props object which refers to any content between the component that we are working on(here, TabButton). So here its used because we want to display any data between the opening and closing TabButton tags in the App.jsx, which will be displayed as the button text here.
