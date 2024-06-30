module.exports = {
    // other webpack configuration...

    module: {
        rules: [
            // other rules...
            {
                test: /\.(pdf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/pdf/', // adjust the output path as needed
                        },
                    },
                ],
            },
        ],
    },
};
  