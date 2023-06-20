import type { Preset, Rule } from 'unocss';
import { defineConfig, presetAttributify, presetUno } from 'unocss';

import presetRemToRpx from './preset-rem-to-rpx';

const sizeMapping: Record<string, string> = {
  fs: 'font-size'
};

function getSizeRules(Mapping: Record<string, string>): Rule<{}>[] {
  return Object.keys(Mapping).map((key) => {
    const value = Mapping[key];
    return [new RegExp(`^${key}-(\\d+)$`), ([, d]) => ({ [value]: `${d}rpx` })];
  });
}

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetRemToRpx({
      baseFontSize: 4
    }) as Preset
  ],
  theme: {
    preflightRoot: ['page,::before,::after']
  },
  rules: getSizeRules(sizeMapping)
});
