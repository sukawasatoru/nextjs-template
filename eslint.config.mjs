/*
 * Copyright 2019, 2021, 2022, 2025 sukawasatoru
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

// @ts-check

import {FlatCompat} from '@eslint/eslintrc';
import {defineConfig} from 'eslint/config';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

export default defineConfig([
    ...compat.config({
        extends: ['next/core-web-vitals'],
        rules: {
            'import/first': 'error',
            'import/order': ['error', {
                alphabetize: {
                    order: 'asc',
                },
                warnOnUnassignedImports: true,
            }],
        },
    }),
    tseslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/adjacent-overload-signatures': 'warn',
            '@typescript-eslint/member-ordering': 'warn',
            '@typescript-eslint/no-for-in-array': 'warn',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
        }
    },
    {
        rules: {
            'lines-between-class-members': 'error',
            'no-multiple-empty-lines': ['error', {
                max: 2,
                maxEOF: 0,
            }],
            'no-trailing-spaces': 'error',
            'no-unused-vars': 'off',
            'quotes': ['error', 'single', {
                allowTemplateLiterals: true,
            }],
            'semi': ['error', 'always'],
        },
    },
]);
