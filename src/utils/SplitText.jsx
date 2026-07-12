import React from 'react';

export default function SplitText({ text, className = "" }) {
  const words = text.split(" ");

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden align-bottom">
          <span className="split-word inline-block transform translate-y-full pb-1">
            {word}
          </span>
          {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
