import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'test-bundles',
  taskQueue: 'async',
  minifyJs:false,
  
  outputTargets: [
    {
      type: 'dist-custom-elements-bundle',
      
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
