import Refractor from 'react-refractor';
import js from 'refractor/lang/javascript';
import powershell from 'refractor/lang/powershell';
import json from 'refractor/lang/json';
import CodeBlock from '@components/blocks/Code';
import ImageModule from '@components/modules/image';

Refractor.registerLanguage(js);
Refractor.registerLanguage(powershell);
Refractor.registerLanguage(json);

const myPortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="inlineImg">
          <ImageModule {...value} />
        </div>
      );
    },
    code: ({ value }) => {
      const {
        language,
        code,
        highlightedLines = [],
        filename,
      } = value;
      return code ? (
        <CodeBlock
          value={code}
          language={language === 'sh' ? 'powershell' : language}
          markers={highlightedLines}
          filename={filename}
        />
      ) : null;
    },
  },
};

export default myPortableTextComponents;
