import { marked } from 'marked';

export const ParsedHtml = ({ toParse }) => {
  const markdown = marked.parse(toParse);
  const markup = { __html: markdown };
  return (
    <>
      <div dangerouslySetInnerHTML={markup} />
    </>
  );
};
