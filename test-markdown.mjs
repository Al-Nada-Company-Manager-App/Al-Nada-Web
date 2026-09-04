import React from 'react';
import { renderToString } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const markdown = `<h1 align="center"> <img src="https://example.com/img.png" width="500" /> </h1>
<div align="center"> <img src="./octocat.png" width="400" /> </div>
About Me
Currently enhancing my expertise in full-stack development...`;

const output = renderToString(
  React.createElement(ReactMarkdown, {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeRaw],
    children: markdown
  })
);

console.log(output);
