import React from 'react';
import styled from 'styled-components/macro';
import Picture from '../Picture';

const PhotoGridItem = ({ id, src, alt, tags, sources }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Picture sources={sources} src={src} alt={alt}>
          <Image alt={alt} src={src} />
        </Picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  gap: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0px, min-content));
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default PhotoGridItem;
