import S from '@sanity/desk-tool/structure-builder';
import {
  CgHeart,
  CgFilters,
  CgTimelapse,
  CgAsterisk,
} from 'react-icons/cg';

const Projects = S.listItem()
  .title('Projects')
  .icon(CgAsterisk)
  .child(
    S.documentTypeList('project')
      .title('Projects')
      .child((documentId) =>
        S.document().documentId(documentId).schemaType('project')
      )
      .canHandleIntent(
        (intent, { type }) =>
          ['create', 'edit'].includes(intent) && type === 'project'
      )
  );

const ProjectTypes = S.listItem()
  .title('Project Types')
  .icon(CgFilters)
  .child(
    S.documentTypeList('projectType')
      .title('Project Types')
      .child((documentId) =>
        S.document().documentId(documentId).schemaType('projectType')
      )
      .canHandleIntent(
        (intent, { type }) =>
          ['create', 'edit'].includes(intent) &&
          type === 'projectType'
      )
  );

const Status = S.listItem()
  .title('Status')
  .icon(CgTimelapse)
  .child(
    S.documentTypeList('status')
      .title('Status')
      .child((documentId) =>
        S.document().documentId(documentId).schemaType('status')
      )
      .canHandleIntent(
        (intent, { type }) =>
          ['create', 'edit'].includes(intent) && type === 'status'
      )
  );

const Work = S.listItem()
  .title('Work')
  .icon(CgHeart)
  .child(
    S.list().title('Work').items([Projects, ProjectTypes, Status])
  );

export default Work;
