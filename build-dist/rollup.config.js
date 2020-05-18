import visualizer from 'rollup-plugin-visualizer';

export default {
    input: ['my-component.js', 'second-component.js'],
    output: {
      dir: 'output'
    },
    plugins: [visualizer()]
  };