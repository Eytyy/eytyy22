export const projectQuery = `
 *[_type == 'project' && defined(slug) && slug.current == $slug][0] {
    title, body, year, role, team[],
    showMainMedia,
    "mainMedia": {
      "type": mainMediaType,
      "style": mainMediaStyle,
      mainMediaType == 'video' => {
        "video": { "autoPlay": mainVideo.autoPlay, "loop": mainVideo.loop, "url": mainVideo.file.asset->.url }
      },
      mainMediaType == 'image' => {
        'image': mainImage
      },
    },
    "status": status->.slug.current, year,
    launchDate,
    sections[] {
      _key, type, hasBody, body, name, layout, link,
      content[] {
        ...,
        _type == 'videoModule' => {
          "url": file.asset->.url
        }
      }
    }
  }
`;

export const allProjects = `
  "projects": *[_type == 'project'] | order(year desc) {
    _type,
    _id,
    title,
    "slug": slug.current,
    year
}`;

export const allPosts = `
  "posts": *[_type in ["post"]] | order(_createdAt asc) {
    _id,
    _type,
    "slug": slug.current,
    title
  }
`;

export const navQuery = `
  ${allProjects},
  ${allPosts}
`;
