const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
(async () => {
  const ReactMarkdown = (await import('react-markdown')).default;
  const rehypeRaw = (await import('rehype-raw')).default;
  const md = "<h1 align='center'>Hello</h1>";
  const element = React.createElement(ReactMarkdown, { rehypePlugins: [rehypeRaw] }, md);
  console.log("Raw HTML:", renderToStaticMarkup(element));

  const escapedMd = "&lt;h1 align='center'&gt;Hello&lt;/h1&gt;";
  const element2 = React.createElement(ReactMarkdown, { rehypePlugins: [rehypeRaw] }, escapedMd);
  console.log("Escaped HTML:", renderToStaticMarkup(element2));
})();
