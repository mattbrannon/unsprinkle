export default function Picture({ sources, src, children }) {
  return (
    <picture>
      {sources.map((imgSrc, i) => {
        const type = 'image/' + imgSrc[0].slice(src.lastIndexOf('.') + 1);
        const srcSet = imgSrc.join(', ');
        return <source key={i} type={type} srcSet={srcSet} />;
      })}
      {children}
    </picture>
  );
}
