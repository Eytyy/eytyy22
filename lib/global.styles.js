import {Global} from '@emotion/react';
import React from 'react';

const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => [
        {
          '@font-face': {
            fontFamily: 'Plex',
            src: "url('/fonts/IBMPlexMono-Regular.woff2') format('woff2')",
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'PlexB',
            src: "url('/fonts/IBMPlexMono-Bold.woff2') format('woff2')",
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
          'body,h1,h2,h3,h4,h5, p,figure,picture': {
            margin: 0,
          },
          strong: {
            fontWeight: 'normal',
          },
          img: {
            width: '100%',
          },
          pre: {
            width: '100%',
          },
          'pre[class*="language-"], code[class*="language-"]': {
            color: '#d4d4d4',
            fontSize: '13px',
            textShadow: 'none',
            fontFamily:
              'Plex, Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            lineHeight: '1.5',
            mozTabSize: '4',
            oTabSize: '4',
            tabSize: '4',
            webkitHyphens: 'none',
            mozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
          },
          'pre[class*="language-"]::selection, code[class*="language-"]::selection, pre[class*="language-"] *::selection, code[class*="language-"] *::selection':
            {
              textShadow: 'none',
              background: '#264F78',
            },
          '@media print': {
            'pre[class*="language-"], code[class*="language-"]': {
              textShadow: 'none',
            },
          },
          'pre[class*="language-"]': {
            padding: '1em',
            margin: '.5em 0',
            overflow: 'auto',
            background: '#1e1e1e',
          },
          ':not(pre) > code[class*="language-"]': {
            padding: '.1em .3em',
            borderRadius: '.3em',
            color: '#db4c69',
            background: '#1e1e1e',
          },
          // Tokens
          '.namespace': {
            opacity: '.7',
          },
          '.token.doctype .token.doctype-tag': {
            color: '#00ddff',
          },
          '.token.doctype .token.name': {
            color: '#b857ff',
          },
          '.token.comment, .token.prolog': {
            color: '#00ff9d',
          },
          '.token.punctuation, .language-html .language-css .token.punctuation, .language-html .language-javascript .token.punctuation':
            {
              color: '#d4d4d4',
            },

          '.token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.inserted, .token.unit':
            {
              color: '#b5cea8',
            },
          '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.deleted':
            {
              color: '#ff8d26',
            },
          '.language-css .token.string.url': {
            textDecoration: 'underline',
          },
          '.token.operator, .token.entity': {
            color: '#d4d4d4',
          },
          '.token.operator.arrow': {
            color: '#00ddff',
          },
          '.token.atrule': {
            color: '#ff8d26',
          },
          '.token.atrule .token.rule': {
            color: '#c586c0',
          },
          '.token.atrule .token.url': {
            color: '#b857ff',
          },
          '.token.atrule .token.url .token.function': {
            color: '#fff000',
          },
          '.token.atrule .token.url .token.punctuation': {
            color: '#d4d4d4',
          },
          '.token.keyword': {
            color: '#00ddff',
          },

          '.token.keyword.module, .token.keyword.control-flow': {
            color: '#c586c0',
          },
          '.token.function, .token.function .token.maybe-class-name': {
            color: '#fff000',
          },
          '.token.regex': {
            color: '#d16969',
          },
          '.token.important': {
            color: '#00ddff',
          },
          '.token.italic': {
            fontStyle: 'italic',
          },
          '.token.constant': {
            color: '#b857ff',
          },
          '.token.class-name, .token.maybe-class-name': {
            color: '#4ec9b0',
          },
          '.token.console': {
            color: '#b857ff',
          },
          '.token.parameter': {
            color: '#b857ff',
          },
          '.token.interpolation': {
            color: '#b857ff',
          },

          '.token.punctuation.interpolation-punctuation': {
            color: '#00ddff',
          },

          '.token.boolean': {
            color: '#00ddff',
          },

          '.token.property, .token.variable, .token.imports .token.maybe-class-name, .token.exports .token.maybe-class-name':
            {
              color: '#b857ff',
            },
          '.token.selector': {
            color: '#d7ba7d',
          },
          '.token.escape': {
            color: '#d7ba7d',
          },
          '.token.tag': {
            color: '#00ddff',
          },
          '.token.tag .token.punctuation': {
            color: '#808080',
          },
          '.token.cdata': {
            color: '#808080',
          },
          '.token.attr-name': {
            color: '#b857ff',
          },
          '.token.attr-value, .token.attr-value .token.punctuation': {
            color: '#ff8d26',
          },
          '.token.attr-value .token.punctuation.attr-equals': {
            color: '#d4d4d4',
          },
          '.token.entity': {
            color: '#00ddff',
          },
          '.token.namespace': {
            color: '#4ec9b0',
          },
          //  Language Specific
          'pre[class*="language-javascript"], code[class*="language-javascript"], pre[class*="language-jsx"], code[class*="language-jsx"], pre[class*="language-typescript"], code[class*="language-typescript"], pre[class*="language-tsx"], code[class*="language-tsx"]':
            {
              color: '#b857ff',
            },
          'pre[class*="language-css"], code[class*="language-css"]': {
            color: '#ff8d26',
          },

          'pre[class*="language-html"], code[class*="language-html"]': {
            color: '#d4d4d4',
          },
          '.language-regex .token.anchor': {
            color: '#fff000',
          },
          '.language-html .token.punctuation': {
            color: '#808080',
          },
          // Line highlighting
          'pre[class*="language-"] > code[class*="language-"]': {
            position: 'relative',
            zIndex: '1',
          },
          '.refractor-marker': {
            background: '#000',
            boxShadow: 'inset 5px 0 0 #e91e63',
            zIndex: '0',
          },
        },
      ]}
    />
  );
};

export default GlobalStyles;
