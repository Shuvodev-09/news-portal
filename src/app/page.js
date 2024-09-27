import LatestNews from '@/components/ui/latestNews/LatestNews';
import Sidebar from '@/components/ui/sidebar/Sidebar';
import React from 'react';

const page = () => {
  return (
    <>
      <div className="flex mt-3">
        <div className="w-3/4 me-3">
          <LatestNews />
        </div>

        <div className="w-1/4 ms-3">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default page;
