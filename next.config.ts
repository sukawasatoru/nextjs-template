/*
 * Copyright 2019, 2021, 2022, 2023, 2025 sukawasatoru
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import type {NextConfig} from 'next';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

const nextConfig: NextConfig = {
  webpack: (config, context) => {
    if (context.dev && context.isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }

    if (process.env.BUNDLE_ANALYZER) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }

    return config;
  },
  poweredByHeader: false,
  reactStrictMode: true,
  staticPageGenerationTimeout: 30,
  output: 'export',
  experimental: {
    typedRoutes: true,
  },
};

const pathContext = process.env.PATH_CONTEXT;
if (pathContext) {
  nextConfig.assetPrefix = pathContext;
  nextConfig.basePath = pathContext;
}

export default nextConfig;
