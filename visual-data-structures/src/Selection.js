import { Component } from 'react';
import "./Button.css";

function Selection({dataStructure, onSelectStructure}) {
    const dataStructures = ["Singly Linked List", "Binary Search Tree", "Doubly Linked List"];

    /**
     * Loop through the list of dataStructures currently available and create a button for each with appropriate
     * characteristics -- button HTML, value, and a function that runs when clicked. If the button is already selected,
     * it's highlighted.
     */
    const buttons = []
    let key = 0;

    for (let structure of dataStructures) {
        if (structure === dataStructure) {
            buttons.push(<button key={key} className={"selected"} value={structure} onClick={onSelectStructure}>{structure}</button>)
        } else {
            buttons.push(<button key={key} value={structure} onClick={onSelectStructure}>{structure}</button>)
        }

        key += 1;
    }

    return (<div>
                <h3>Choose a Data Structure:</h3>
                {buttons}
            </div>);
}

export default Selection;