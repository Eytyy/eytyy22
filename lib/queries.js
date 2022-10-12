export const metaFields = `
  "title": meta_title,
  "description": meta_description,
  "image": meta_image
`;

export const projectQuery = `
 *[_type == 'project' && defined(slug) && slug.current == $slug][0] {
    title, body, year, role, team[], "slug": slug.current,
    seo {
      ${metaFields}
    },
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

export const otherProjects = `
 "projects": *[_type == 'project' && defined(slug) && slug.current != $slug] | order(year desc) {
   _type,
    _id,
    title,
    "slug": slug.current,
    year
  }
`;

export const allProjects = `
  *[_type == 'project'] | order(year desc) {
    _type,
    _id,
    title,
    "slug": slug.current,
    year,
    launchDate,
    "status": status->.slug.current,
    format,
    link
}`;

export const allPosts = `
  *[_type == "post"] | order(_createdAt asc) {
    _id,
    _type,
    "slug": slug.current,
    title,
    publishedAt,
  }
`;

export const navQuery = `{
  "projects": ${allProjects},
  "posts": ${allPosts}
}`;
