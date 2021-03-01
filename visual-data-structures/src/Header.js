import { Component } from 'react';

/**
 * Creates the header for the Data Visualization Tool. Mostly just for aesthetics. May offer navigation features in future.
 */
function Header({dataStructure}) {
        return (
            <div>
                <h1>Data Structure Visualization Tool</h1>
                <h2>Currently Viewing: {dataStructure}</h2>
            </div>
        );
}

export default Header;