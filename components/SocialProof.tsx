import React from 'react';

const SocialProof: React.FC = () => {
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ5sb4H8mIKI6FrB10QGN3Bjf0ZJoNu4NZ2ykXIg0KIlf4-u6UUWicH1X-pQ6iRF3vEYAG2aYjsVZkjrBBOg0in55-RcfNo9-pObiWAx1BpBHcHrMTuLt70a3iZzxMmNGScY6A3R3v5wFEIyRH-9dVSOY_XqKi149kdfyyXi5920tUd4aOlSyAxiqoF5KA6P1LFqWGeBjJWuyXWlF3VjGN4FZlBJn_DzCTcPBFBSStrIhof1irsqTfBdJOTVqf4ygplOramx_oLQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBxmhXytDqFp4K4X8MZoxO7crD_6twKOlgqBXRylxas1VYmHc2tjzTMEFrKo9cQrxDRXhwQXRIHJjrp7dxjcXF3qoCY880Db3tIG-1EmMyp3gT9g-iKcB0qsB5WbP16O8Mk3GmmVvB8YECkfLLXCVmhV69g9LIfiaEpYcHr8KWwUrwAQio1kcWNMkTF8i7KCdHYNZgWjjI7cFH67ksOVmvKgxxRSZZIOXv7gPBB_8bQadGnGtwDcqEuaI2S2jczsifS4HEuMzdKkA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDFoY5-0p4WetCSLsl2RbjOuvR1SXBlpcrv5y2d-JF_9a_gCHOpDpDaLE6a-exl3dkOlAsen_pi0jxmHYDcZQDeJjK8LhQDXKVwPFTkJvKxbSQ34-QAL-gukSSctXiyuszYLImT6AvSsbBRn8yH2UhahC6-GcHpiYImLa-RZ-RRyjXtNzqYimH8w_38dp-y8AT3dg_i__P9DEzug2f7ehVUJQLBXyLAVGfxFqNPoDeeQjtQW9xUXlWDR-eAxoZwRSaXd44aE4o5yg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCXNShCnNDsJ4QH0o6WQGs363yLVmfbrxdY8ExJERD9cfSi4nplTjiFAP1wRNdEYkJZU0pj8DLvAeMJDU2VSiUguPp-hC7jV0yRjQRNp33pyg-RlPYJ5d5ctDHTFNX2WniYzUAntsIr2wzIWpX6BxjI9KA0sYMiy8Ew23cbdXSW3JzUhdC7VhdvCkA0qHpm1wgQX469VSvDhdDo_CY67OzdV7noBYAIPX31eAklTypFbWTk7ep1SBpivsJmZlh9-SZ9XCY6eYuWjg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB-swCoErGAovHZb-73Uhx2YmTzuaTvW7-UGoh9cMmpUoe7qnsfn7tMOdoX_yeKycv2ZikRlQNQdFNvyZruWyDv3RRGgxkbaizBkN_6SsguGxcvKaYfNzrj2hfvIHy9TpsNZDLlhTMsZcVVP_yw3Zz5fYzVntuMuuqvyb_p09-D1yzkZn0z05ez3BAjENqPrb6McwTzXBE4tQZy3SRldW6cG2QQD6xrZPHwquP0avOJYCdKUD5HLwnFW0MbVyr2XIG3R32xyeW0Gw"
  ];

  return (
    <section className="py-20 bg-clay/10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-moss/40 mb-12 font-medium">Sanando juntos en</p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16 opacity-40 mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-500">
          {images.map((src, index) => (
            <img 
              key={index} 
              alt="Logo de institución" 
              className="h-6 lg:h-8 object-contain" 
              src={src} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;