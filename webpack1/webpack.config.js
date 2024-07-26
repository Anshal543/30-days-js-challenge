import path from 'path';


export default {
  entry: './src/index.js', // Entry file path
  output: {
      path: path.resolve("dist"), // Output directory path
      filename: 'bundle.js' // Output bundle file
  },
  mode: 'development',
};