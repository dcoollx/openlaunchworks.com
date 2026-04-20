import esbuild from 'esbuild';

esbuild.build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    platform: 'node',
    target: 'node20',
    outfile: './nodejs/index.js',
    external: ['aws-sdk'], // AWS SDK is available in Lambda environment
}).catch(() => process.exit(1));