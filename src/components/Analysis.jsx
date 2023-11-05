import React from 'react'

export default function AnalyzePicks(props) {

    const analyze = () => {
        props.actions.analyze();
    }

    return (
        <div>
            <button onClick={() => analyze()}>Analyze Picks</button>
        </div>
    )
}