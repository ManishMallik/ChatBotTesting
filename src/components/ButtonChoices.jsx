import React from 'react'

export default function Buttons(props) {

    const initialAction = () => {
        props.actions.initialAction();
    }

    const analyze = () => {
        props.actions.analyze();
    }

    return (
        <div>
            <button className='chatbot-btn' onClick={() => initialAction()}>About website</button>
            <button className='chatbot-btn' onClick={() => analyze()}>Analyze Picks</button>
        </div>
    )
}