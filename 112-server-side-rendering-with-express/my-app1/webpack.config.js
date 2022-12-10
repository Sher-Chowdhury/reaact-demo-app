import path from "path"

const config = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(process.cwd(), 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
};

export {config}
