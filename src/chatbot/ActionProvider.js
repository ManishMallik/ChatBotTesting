// ActionProvider starter code
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    
    const initialAction = () => {
        const botMessage = createChatBotMessage('Hi, welcome to Coppington! This is a website where you can get started' + 
        ' on investing.', {widget: 'Button Choices'});
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
    };

    const analyze = () => {
        const botMessage = createChatBotMessage('There are some factors to consider when choosing a token to invest in.',
        {widget: 'Button Choices'});
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
    };

    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.', {widget: 'Button Choices'});
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
    };

    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            actions: {
                handleHello,
                initialAction,
                analyze
            },
          });
        })}
      </div>
    );
  };
 
 export default ActionProvider;