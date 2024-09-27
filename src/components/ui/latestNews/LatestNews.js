import { getAllNews } from '@/utils/getAllNews';
import Image from 'next/image';
import React from 'react';

const LatestNews = async () => {
  const { data } = await getAllNews();
  // console.log(data);

  // console.log(data[0]);

  return (
    <div>
      {/* ===--==first card===--== */}

      <div className="bg-base-100 w-full shadow-xl">
        <figure>
          <Image
            className="w-full h-[600px]"
            src={data[0].thumbnail_url}
            alt="Shoes"
            width={800}
            height={600}
          />
        </figure>
        <div className="p-5 space-y-3">
          <p className="bg-yellow-400 inline-block rounded-md text-white px-4 py-2">
            {data[0].category}
          </p>
          <h3 className="text-3xl">{data[0].title}</h3>
          <p>
            by- {data[0].author.name} {data[0].author.published_date}
          </p>
          <p>
            {data[0].details.length > 200
              ? data[0].details.slice(0, 300) + '.........'
              : data[0].details}
          </p>
        </div>
      </div>

      {/* -------========simillar in look different in data==========------- */}

      <div className="grid grid-cols-2 gap-4">
        {data.slice(1, 5).map(news => (
          <div key={news._id} className="bg-base-100 w-full shadow-xl">
            <figure>
              <Image
                className="w-full h-80"
                src={news?.image_url}
                alt="Shoes"
                width={800}
                height={600}
              />
            </figure>
            <div className="p-5 space-y-3">
              <h3 className="text-2xl">{news.title}</h3>
              <p className="bg-yellow-400 inline-block rounded-md text-white px-2 py-1">
                {news.category}
              </p>

              <p>
                by- {news.author.name} {news.author.published_date}
              </p>
              <p>
                {news.details.length > 100
                  ? news.details.slice(0, 150) + '.........'
                  : news.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
