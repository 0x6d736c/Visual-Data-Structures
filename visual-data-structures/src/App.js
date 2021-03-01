import { Fragment, Component } from 'react';
import Header from './Header';
import StructureDisplay from './StructureDisplay';
import Footer from './Footer';



/**
 * Core of the App. Aggregates state, modifies DOM based upon state.
 */
class App extends Component {
    constructor() {
        super();

        this.state = {
            dataStructure: "",
        }
    }

    /**
     * Changes the currently-selected data structure by updating state.
     * @param event - the event passed to the function onClick.
     */
    onSelectStructure = (event) => {
        let value = event.target.value;
        if (this.state.dataStructure !== value) {
            this.setState({dataStructure: value});
        } else {
            console.log(`${value} already selected. No changes made.`);
        }
    }

    /**
     * Displays the application to the DOM.
     * @returns {JSX.Element}
     */
    render() {
        return (
            <Fragment>
                <Header dataStructure={this.state.dataStructure}/>
                <StructureDisplay dataStructure={this.state.dataStructure}/>
                <Footer onSelectStructure={this.onSelectStructure} dataStructure={this.state.dataStructure}/>
            </Fragment>
        );
    }
}

export default App;