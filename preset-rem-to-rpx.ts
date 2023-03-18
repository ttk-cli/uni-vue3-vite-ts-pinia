const remRE = /(-?[\.\d]+)rem/g;

interface Options {
  baseFontSize?: number;
}
function remToRpxPreset(options: Options = {}) {
  const { baseFontSize = 16 } = options;
  return {
    name: '@unocss/preset-rem-to-rpx',
    postprocess: (util) => {
      util.entries.forEach((i) => {
        const value = i[1];
        if (value && typeof value === 'string' && remRE.test(value))
          i[1] = value.replace(remRE, (_, p1) => `${p1 * baseFontSize}rpx`);
      });
    }
  };
}

export { remToRpxPreset as default };
