import type IForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import webpack from "webpack";
import dotenv from "dotenv";
dotenv.config();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: "webpack-infrastructure",
  }),
  new webpack.DefinePlugin({
    "process.env.REACT_APP_SUPABASE_URL": JSON.stringify(
      process.env.REACT_APP_SUPABASE_URL
    ),
    "process.env.REACT_APP_SUPABASE_KEY": JSON.stringify(
      process.env.REACT_APP_SUPABASE_KEY
    ),
  }),
  new webpack.EnvironmentPlugin(['REACT_APP_SUPABASE_KEY', 'REACT_APP_SUPABASE_URL'])
];
