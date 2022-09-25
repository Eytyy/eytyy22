/** @jsxImportSource theme-ui */

export default function Info() {
  return (
    <div sx={{ variant: 'superGrid' }}>
      <div sx={{ gridColumn: ['2/8', null, '2/9'], mt: 9 }}>
        <div sx={{ variant: 'text.body', color: 'black' }}>
          <span sx={{ mb: 4, mr: '1ch', fontFamily: 'heading' }}>
            About_
          </span>
          {`Hi there. I've been building websites and digital
          experiences as a solo contractor for over 10 years. Before that I worked
          as a Digital Team Lead at Syntax Design and a Front-end Development team lead at Spring Technologies.`}
        </div>
        <p></p>
      </div>
      <div sx={{ gridColumn: ['2/8', null, '2/9'], mt: 9 }}>
        <div sx={{ variant: 'text.body', color: 'black' }}>
          <span sx={{ mb: 4, mr: '1ch', fontFamily: 'heading' }}>
            Services_
          </span>
          <br />
          Headless Shopify based Ecommerce, Marketing Websites,
          Editorial Websites, Microsites, Technical Consultation,
          Creative Direction.
        </div>
      </div>
    </div>
  );
}
