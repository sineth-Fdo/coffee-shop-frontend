'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Container from '@/src/components/layout/container';

const Page = () => {
 

  return (
    <div className="w-[100%]">
      <div className="relative w-[100%] h-screen">

        {/* Image */}
        <Image
          alt="coffee banner"
          src="/assets/main-bg.png"
          objectFit="cover"
          layout="fill"
        />
      </div>

      <Container>
        <div>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima autem hic labore nam ab nobis officiis, aut est enim illo officia veniam? Maxime minima officia dolorem recusandae, culpa unde atque doloribus hic nemo eos dolore esse repellat nobis eius qui. Nisi, dolore! Voluptatum a ea perferendis expedita sunt voluptas corrupti culpa blanditiis quisquam, modi nihil, delectus saepe ducimus, cum repellendus vel dicta ipsam molestiae quam sapiente in commodi? Quaerat harum saepe earum hic, enim perspiciatis aut necessitatibus molestias quos cumque! Id minima nihil corporis voluptatibus explicabo harum consequuntur suscipit, officia aliquam odio laboriosam ad quae at fuga, cumque fugiat in.
        </div>
      </Container>
    </div>
  );
};

export default Page;
