'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/src/components/layout/container';
import Button from '@/src/components/ui/button';
import MainImage from '@/src/components/ui/mainImage';

const Page = () => {

  return (
    <div className="w-full">
      <div className="relative w-[100%] h-screen overflow-hidden">
        <Container>
          <div className=' w-[100%] md:w-[50%] h-[100vh] relative z-10 bottom-0 flex flex-col justify-end items-center'>
              <div className=' w-[100%] h-[80%] flex flex-col'>
                  <h1 className='text-[#fff] font-bold'>We&apos;ve got your morning covered with</h1> 
                  <div className=' w-[100%] h-[50%] relative my-1 md:my-6'>
                    <Image
                      alt="coffee"
                      src="/assets/coffee-name.png"
                      objectFit="contain"
                      layout="fill"
                      quality={100}
                    />

                  </div>
                  <h1 className='text-[#fff] '>
                      It is best to start your day with a cup of coffee. Discover the
                      best flavours coffee you will ever have. We provide the best
                      for our customers.
                  </h1>
                  <Button
                    name="Order Now"
                    className="w-40 h-10 hover:bg-[#ffe6bf] bg-[#F9C06A] hover:text-[#000] text-[#000] transition duration-500 ease-in-out mt-7"
                    onClick = {() => {console.log('clicked')}}
                  />
              </div>
          </div>
        </Container>
        <MainImage alt="main-image" src="/assets/main-bg.png" />
      </div>

      <Container>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minus voluptatem doloribus? Officia, explicabo illo quod delectus animi, nostrum nihil beatae maiores nisi, optio atque! Debitis, ipsum facere! Similique iste libero officia aliquam et amet ipsa sit iure velit esse praesentium, culpa sed quae est assumenda. Libero, obcaecati cumque magni et expedita inventore repudiandae culpa, ex nobis modi quaerat doloribus, facere earum repellendus quo eveniet quas aliquam sint explicabo. Recusandae maxime nulla iste quae tenetur sequi aliquid saepe similique modi architecto nobis ut esse dolores corrupti, dolor minima nostrum autem ducimus aut reprehenderit incidunt sapiente reiciendis ipsam! Expedita eveniet distinctio molestiae sunt. Voluptates quas architecto aperiam dicta porro debitis, minus itaque magni hic fugit fuga reiciendis eum facilis incidunt voluptatum autem ducimus ex laboriosam quasi cumque consequuntur! Excepturi beatae pariatur vitae doloremque qui quibusdam provident quas aut dignissimos consequatur soluta facilis, fugit tenetur inventore dolorem laboriosam accusamus reprehenderit enim odit. Accusantium vero veritatis quis consequatur necessitatibus molestiae dolor cumque. Provident a cupiditate incidunt nulla magni sit harum vero alias, eos, voluptatem quis nihil tempore dolorum porro vel nemo ratione enim facilis. Similique, mollitia explicabo! Quia, magnam ad! Iusto, ea, quidem aliquam saepe deleniti esse quia rem veniam laboriosam vitae quibusdam, ab assumenda! Enim sed nemo dolore vero, quis iusto voluptas quam, obcaecati officiis ducimus natus commodi, quisquam asperiores! Blanditiis unde accusamus sapiente porro? At porro consectetur, recusandae sed officia doloremque autem molestiae inventore magnam dicta a obcaecati sit dolore? Repudiandae cumque, eum cum velit architecto voluptas corporis, blanditiis, et quibusdam inventore voluptatem sed sunt error laudantium. Aliquam eum maxime consectetur ad! Obcaecati nisi repellat provident consequuntur sed, officia qui, architecto facilis nam, sunt ratione neque? Quia quaerat animi nulla veniam nisi impedit a tenetur, illum soluta quos voluptatem porro perferendis culpa ab ea libero rem, nobis, aliquid facere pariatur maiores dicta reiciendis illo. Eius fugit facilis doloremque! Earum, vero quae. Quod at alias repellat! Rerum optio molestias eveniet qui! Aliquam praesentium quam voluptate laboriosam, animi perferendis nostrum molestias modi, magni omnis dolorum enim recusandae deleniti rerum debitis esse illum! Iste id quam dignissimos consectetur amet consequatur vel dolorum natus tenetur, nulla voluptatem facere corrupti facilis nemo voluptas a saepe debitis? Autem, vel exercitationem aliquam nulla, aperiam architecto reprehenderit deserunt dolorem voluptas libero sequi sed fugiat aspernatur praesentium ipsam fuga iste id? Debitis aliquid ex harum error eaque iusto magni quo deserunt, accusantium dicta, reiciendis velit, fuga quia alias dolorum vitae. Beatae maxime corrupti aspernatur ducimus quae assumenda debitis, reprehenderit molestiae culpa velit, id quibusdam minus voluptatum cupiditate quas, sequi minima commodi perferendis expedita pariatur excepturi ad consequatur molestias! Sunt itaque eaque magni molestias numquam quae omnis commodi fuga, nobis eius enim? Rerum dicta possimus nisi ullam aut eum ut expedita magni laborum quos culpa amet sit natus quis incidunt a aspernatur unde dolore omnis quisquam, facilis deleniti quo corporis! Natus accusantium nulla id maiores suscipit perferendis quisquam odit soluta sint, voluptate, fugiat quam odio reprehenderit! Fuga placeat voluptatibus, sed sit sequi neque consectetur expedita a fugit officiis eveniet natus illum, blanditiis excepturi quos eligendi consequuntur temporibus officia ex ut fugiat quibusdam, quaerat voluptatem? Consequuntur pariatur sit ad dolores. Cumque qui quam, alias cum libero sint error in, omnis numquam quae optio amet. Corporis illum recusandae officia consectetur enim error possimus, ducimus facilis iste exercitationem odit natus, rerum accusamus laborum quas illo, necessitatibus odio reprehenderit id sed eligendi libero beatae aut unde? Quos quisquam, perspiciatis officiis id nulla nemo, totam molestiae iste laboriosam dignissimos possimus maxime autem voluptatum excepturi omnis asperiores perferendis, minima voluptatem libero corrupti pariatur iure aut fugit ut. Nobis ad minima iure dignissimos obcaecati porro expedita reprehenderit dolor consectetur aliquam recusandae, ullam autem, aliquid soluta accusantium, nemo modi incidunt! Architecto similique, facilis deserunt animi est laboriosam laudantium nam laborum id accusantium reiciendis! Aut voluptatum ipsam perferendis. Sunt, voluptatum nisi magni laudantium facilis praesentium nam nihil incidunt minus a explicabo neque quibusdam aspernatur repellat cupiditate at quae similique molestias omnis natus commodi aperiam voluptates illum? Nesciunt reiciendis nobis fugit non sunt aut? Harum, itaque voluptas? Libero odit aspernatur at iste? Tempore, possimus explicabo recusandae a nemo sequi modi, impedit fugiat ut aliquid et corrupti! Unde libero explicabo dignissimos, laboriosam culpa beatae rem harum earum eligendi assumenda labore sunt? Quisquam dolore explicabo sed quam nemo, molestiae impedit tenetur, consequatur in magni aliquid repudiandae quae vel fugit cumque nobis vitae aspernatur maxime optio non architecto doloremque debitis eos? Maiores, perspiciatis laboriosam incidunt dolore voluptates aperiam repellat ea in quaerat nulla eius voluptatum quisquam neque iusto, qui fugiat optio necessitatibus assumenda hic sequi! Blanditiis tenetur nemo quaerat temporibus magnam earum explicabo deleniti sequi, vero consequatur, eius labore repudiandae quis eveniet esse commodi! Obcaecati debitis a cum optio dolores provident. Explicabo in molestias, facilis accusantium tenetur saepe unde ullam corrupti suscipit mollitia illo eum repellendus magnam inventore, nobis dolorem placeat magni, obcaecati voluptatum. Quod sapiente voluptas labore ipsa ab explicabo inventore facere doloribus minima rem nisi id non, necessitatibus veniam delectus, assumenda magni atque voluptate provident facilis! Ex quis vitae inventore laboriosam eos beatae praesentium harum esse culpa id repellat porro tempora natus magnam illum similique hic, dolorum laborum incidunt? Saepe illo necessitatibus vitae est aliquam quaerat officiis totam repellendus, minus rerum, maiores molestias ipsam dolore eos assumenda molestiae quo incidunt consequuntur alias enim velit! Enim explicabo at exercitationem eligendi, adipisci magni temporibus voluptates hic numquam obcaecati facilis reiciendis saepe nihil aspernatur, fugit optio. Tenetur id nostrum suscipit recusandae architecto dolores numquam iusto reiciendis fugit optio ullam, veniam itaque porro vero ratione in esse ipsum voluptate explicabo officiis illo! Eaque, quos. Voluptate neque quae aliquam unde cum id adipisci. Aliquam quasi rerum at, quibusdam recusandae itaque quo maiores rem architecto dolores explicabo cum saepe distinctio sapiente! Eligendi quia beatae autem corporis? Dolor alias qui deserunt officiis corrupti odit voluptatem dignissimos sint non nihil? Possimus, impedit? Fuga beatae deleniti suscipit animi nam, quam, neque doloremque sapiente laudantium rerum magni consectetur aperiam quos ad porro magnam dolorem minus exercitationem praesentium nemo distinctio similique. Architecto rerum, optio illo laborum non voluptates magnam totam voluptatem tenetur repellat.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima autem hic labore nam ab nobis officiis, aut est enim illo officia veniam? Maxime minima officia dolorem recusandae, culpa unde atque doloribus hic nemo eos dolore esse repellat nobis eius qui. Nisi, dolore! Voluptatum a ea perferendis expedita sunt voluptas corrupti culpa blanditiis quisquam, modi nihil, delectus saepe ducimus, cum repellendus vel dicta ipsam molestiae quam sapiente in commodi? Quaerat harum saepe earum hic, enim perspiciatis aut necessitatibus molestias quos cumque! Id minima nihil corporis voluptatibus explicabo harum consequuntur suscipit, officia aliquam odio laboriosam ad quae at fuga, cumque fugiat in.
        </div>
      </Container>
    </div>
  );
};

export default Page;
