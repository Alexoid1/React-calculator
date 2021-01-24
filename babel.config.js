module.exports = {
    plugins: [
      ['babel-plugin-transform-import-ignore', {
        patterns: [/\.s?css$/, /\.less$/],
      }],
    ],
};