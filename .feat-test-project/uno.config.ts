import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      background: '#FFE6C9',
      primary: '#73114B',
      secondary: '#7F265B',
      title1: '#525252',
      title2: '#828282',
      inputfield: '#DED2D9',
      placeholder: '#E0E0E0',
      checkbox: '#A1A1A1',
    },
  },
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
