/** @jsxImportSource theme-ui */
import Refractor from 'react-refractor';
import js from 'refractor/lang/javascript';
import powershell from 'refractor/lang/powershell';
import json from 'refractor/lang/json';

Refractor.registerLanguage(js);
Refractor.registerLanguage(powershell);
Refractor.registerLanguage(json);

const CodeBlock = ({value, language, markers, filename}) => {
  return (
    <div
      className='code-wrapper'
      sx={{
        my: 4,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Refractor
        value={value}
        language={language === 'sh' ? 'powershell' : language}
        markers={markers}
      />
      {filename && (
        <span className='caption' sx={{fontSize: 0}}>
          {filename}
        </span>
      )}
    </div>
  );
};

export default CodeBlock;
