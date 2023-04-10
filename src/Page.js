import React from 'react';
import replaceLinks from './linkProcessor';

const Page = ({ page, onInternalLinkClick }) => {
  if (!page) {
    return <p>Select a page from the search results to display its content.</p>;
  }

  const contentParts = replaceLinks(page.extract, onInternalLinkClick);

  return (
    <div>
      <h1>{page.title}</h1>
      <div>
        {contentParts.map((part, index) => {
          if (part.type === 'text') {
            return <span key={index}>{part.content}</span>;
          }

          if (part.type === 'link') {
            return (
              <button
                key={index}
                onClick={part.onClick}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  color: 'blue',
                  padding: 0,
                  display: 'inline',
                  fontSize: 'inherit',
                }}
              >
                {part.content}
              </button>
            );
          }

          return null;
        })}
      </div>
      <a href={page.fullurl} target="_blank" rel="noopener noreferrer">
        Read more on Wikipedia
      </a>
    </div>
  );
};

export default Page;

