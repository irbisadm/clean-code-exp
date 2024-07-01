import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';


export default [
    {
        input: 'src/index.ts',
        output: {
            format: 'es', file: 'dist/index.mjs'
        },
        plugins: [
            typescript({tsconfig: './tsconfig.json'}),
            nodeResolve(),
            terser(),
        ],
    }
];
