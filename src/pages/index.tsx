/*
 * Copyright 2021, 2022 sukawasatoru
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

import {GetStaticProps, NextPage} from 'next';
import Head from 'next/head';

type Props = {
  msg: string;
};

const Index: NextPage<Props> = ({msg}) => {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>
        Next.js template
      </title>
    </Head>
    <div className="container mx-auto max-w-5xl sm:px-6 py-8">
      <p>
        {msg}
      </p>
    </div>
  </>;
};

export default Index;

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      msg: 'Hello',
    },
  };
};
