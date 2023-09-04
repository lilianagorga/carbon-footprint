import React from 'react';

export const FaqGroup = ({ question, answer, subItems }) => {
  return (
    <div className={`faq-item`}>
      <h3>{question}</h3>
      <p>{answer}</p>
      {subItems && subItems.length > 0 && (
        <ul>
          {subItems.map((subItem, index) => (
            <li key={index}>{subItem}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

