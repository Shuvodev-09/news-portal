import { getAllNews } from '@/utils/getAllNews';
import Image from 'next/image';
import React from 'react';
import pic from '@/assets/editorsInsight2.png';

const Sidebar = async () => {
  const { data } = await getAllNews();

  console.log(data);

  return (
    <div className="space-y-4">
      {/* --------=-====sidebar first card---=--------===== */}
      <div className="bg-base-100 w-full shadow-xl">
        <figure>
          <Image
            className="w-full h-60"
            src={data[14].thumbnail_url}
            alt="Shoes"
            width={800}
            height={600}
          />
        </figure>
        <div className="p-3">
          <h3 className="text-3xl">{data[14].title}</h3>
        </div>
      </div>

      {/* --------=-====similar in look different in data---=--------===== */}

      {data.slice(4, 13).map(news => (
        <div key={news._id} className="bg-base-100 w-full shadow-xl">
          <div className="flex p-3">
            <figure>
              <Image
                className="w-44 h-20"
                src={news?.image_url}
                alt="Shoes"
                width={200}
                height={200}
              />
            </figure>
            <div className="ps-2">
              <h3 className="text-xl">{news.title}</h3>
            </div>
          </div>
        </div>
      ))}

      <div className='pt-10'>
        <Image className="w-full h-80" src={pic} alt="pp" width={800} height={800} />
      </div>
    </div>
  );
};

export default Sidebar;
