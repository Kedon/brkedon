import Ts from 'rollup-plugin-typescript2'

export default {
    input: [
        'src/index.ts',
        'src/atoms/Color/Color.tsx',
        'src/atoms/Margin/Margin.tsx',
        'src/molecules/Select/Select.tsx',
    ],
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true,
        preserveModules: true
    },
    plugins: [Ts()],
    external: ['react', '@ad.e/foundation']
}