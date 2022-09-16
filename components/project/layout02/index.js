/** @jsxImportSource theme-ui */
import { useReducer } from 'react';
import Head from 'next/head';
import { PortableText } from '@portabletext/react';
import { BsEye } from 'react-icons/bs';

import myPortableTextComponents from '@lib/portablet-text-component';

import HomeLink from '@components/blocks/HomeLink';
import PrjctInfoBtn from '@components/blocks/PrjctInfoBtn';
import Block from '@components/design/block';
import BtnBlock from '@components/blocks/BtnBlock';
import { useCallback } from 'react';
import { useState } from 'react';

function reducer(state, { type, payload }) {
  switch (type) {
    case 'TOGGLE_MAIN':
      return {
        ...state,
        mainVisible: !state.mainVisible,
      };
    case 'TOGGLE_SECTION':
      return {
        ...state,
        visibleSection: payload,
      };
    case 'CLOSE_SECTION':
      return {
        ...state,
        visibleSection: null,
      };
    default:
      return state;
  }
}

const initialState = { mainVisible: false, visibleSection: null };

export default function ProjectContainer({
  title,
  year,
  team,
  body,
  role,
  sections,
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [top, setTop] = useState(30);

  function onClickTitle() {
    dispatch({ type: 'TOGGLE_MAIN' });
  }

  const { mainVisible, visibleSection } = state;
  const freeze = mainVisible || visibleSection;

  const mainBtn = useCallback((node) => {
    setTop(node?.getBoundingClientRect().height);
  }, []);

  const sectionsById = sections.reduce(
    (c, n) => ((c[n._key] = { ...n }), c),
    {}
  );

  const section = sectionsById[visibleSection];
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Eytyy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article>
        <Header
          top={top}
          visible={state.mainVisible}
          title={title}
          body={body}
          year={year}
          role={role}
          team={team}
        />
        <div
          sx={{
            pt: '0px',
            height: freeze ? '100vh' : 'auto',
            overflowY: freeze ? 'hidden' : 'auto',
          }}
        >
          <div
            sx={{
              display: 'grid',
              gridTemplateColumns: [
                'repeat(2,1fr)',
                'repeat(4,1fr)',
                'repeat(6,1fr)',
              ],
              position: 'relative',
            }}
          >
            <HomeLink ref={mainBtn} />
            <PrjctInfoBtn
              freeze={freeze}
              title={title}
              onClick={onClickTitle}
              active={mainVisible}
            />
            {sections?.map((section) => (
              <Section
                visible={mainVisible}
                key={section._key}
                id={section._key}
                {...section}
              />
            ))}
          </div>
        </div>
        {/* {section && <SectionText section={section} top={top} />} */}
      </article>
    </>
  );
}

function SectionText({ section, top }) {
  return (
    <div
      sx={{
        position: 'fixed',
        overflowY: 'scroll',
        top: 0,
        zIndex: 10,
        width: '50%',
        right: 0,
        height: top,
      }}
    >
      <div
        sx={{
          position: 'relative',
          variant: 'text.body',
          p: [7],
          color: 'white',
          bg: 'red',
        }}
      >
        <PortableText
          value={section.body}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
}

function Section({ content, name, visible, id }) {
  return (
    <>
      {/* {!visible && (
        <BtnBlock
          Icon={BsEye}
          iconColor="white"
          iconSize="0.5"
          title={name}
          bg="red"
          color="blue"
          speed={0.4}
        />
      )} */}
      {content?.map((block, index) => (
        <Block
          index={index}
          visible={visible}
          key={block._key}
          format="square"
          width="400"
          height="400"
          {...block}
        />
      ))}
    </>
  );
}

const Header = ({ title, body, year, role, visible, team, top }) => {
  return (
    <header
      style={{
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
      }}
      sx={{
        color: '#FFF',
        position: 'fixed',
        zIndex: 10,
        top: 0,
        variant: 'superGrid',
        height: '100%',
        overflowY: 'scroll',
      }}
    >
      <div sx={{ variant: 'nestedGrid', gridColumn: ['2/14'] }}>
        <header sx={{ gridColumn: ['1/9'], mt: top, mb: 6, mb: 4 }}>
          <h1 sx={{ variant: 'text.pageTitle' }}>{title}</h1>
          <div sx={{ variant: 'meta' }}>
            {year && <div>{year}</div>}
            {role && <div>{role}</div>}
          </div>
          {team && (
            <div sx={{ pt: 8 }}>
              {team.map((m) => (
                <div key={m._key} sx={{ display: 'flex', mt: 2 }}>
                  <h3 sx={{ fontFamily: 'body', fontSize: 1 }}>
                    {m.name}
                  </h3>
                  : {m.role}
                </div>
              ))}
            </div>
          )}
        </header>
        <div
          sx={{
            position: 'relative',
            gridColumn: ['9/-1'],
            variant: 'text.body',
            pb: '106px',
            color: 'white',
            mt: [9],
          }}
        >
          <div sx={{ position: 'sticky', top: 0 }}>
            <PortableText
              value={body}
              components={myPortableTextComponents}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
