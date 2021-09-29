export const mapSources = (data) => {
  return data.map(({ src, id, alt, tags }) => {
    const types = ['.avif', '.jpg'];
    const sizes = ['', '@2x', '@3x'];
    const sources = types.map((type) =>
      sizes.map((size) => {
        const variant = size.replace('@', '');
        return src.replace(/\..+/g, `${size}${type} ${variant}`).trim();
      })
    );
    return { sources, id, alt, tags, src };
  });
};
