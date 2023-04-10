const replaceLinks = (text, onClickLink) => {
    const wikiLinkRegex = /\[\[(.*?)\]\]/g;
    const parts = [];
    let lastIndex = 0;
  
    text.replace(wikiLinkRegex, (match, linkContent, index) => {
      parts.push({
        type: 'text',
        content: text.slice(lastIndex, index),
      });
  
      const [link, displayText] = linkContent.split('|');
      parts.push({
        type: 'link',
        content: displayText || link,
        onClick: () => onClickLink(link),
      });
  
      lastIndex = index + match.length;
    });
  
    parts.push({
      type: 'text',
      content: text.slice(lastIndex),
    });
  
    return parts;
  };
  
  export default replaceLinks;
  