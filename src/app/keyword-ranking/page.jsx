'use client'
import React, { useState } from 'react'
import KeywordRankingComponents from '../../../components/KeyWordRankingComponents'
import SeoComponents from "../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";


const page = () => {
    const pathname = usePathname();
    const [domainName, setDomainName] = useState("");
  
    const title = " Improve Your Keyword Ranking  ";
    const description =
      "Boost your search engine rankings with iVistaz's keyword optimization services. Our team uses advanced SEO techniques to enhance your visibility and drive organic traffic to your site, ensuring you stay ahead of the competition.";
    const path = `${pathname}`;
    const metaImage = "";

    return (
        <> 
         <SeoComponents
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
      
        <div>
            <KeywordRankingComponents />
        </div>
        </>
    )
}

export default page
