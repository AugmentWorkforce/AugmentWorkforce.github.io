"use client";

import { useState } from 'react';
import publicationsData from '../../data/publications.json';
import PublicationItem from '../../components/PublicationItem';

export default function Publications() {
  // State to manage visibility of abstracts and BibTeX entries
  const [visibleAbstracts, setVisibleAbstracts] = useState({});
  const [visibleBibtex, setVisibleBibtex] = useState({});

  // Toggle abstract visibility
  const toggleAbstract = (index) => {
    setVisibleAbstracts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Toggle BibTeX visibility
  const toggleBibtex = (index) => {
    setVisibleBibtex(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div>
      {/* Publications Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-lsue mb-6 border-b-2 border-[#FDD023] inline-block text-center">
          Publications
        </h2>
        <div className="space-y-6">
          {publicationsData.map((publication, index) => (
            <PublicationItem
              key={index}
              publication={publication}
              index={index}
              visibleAbstracts={visibleAbstracts}
              visibleBibtex={visibleBibtex}
              toggleAbstract={toggleAbstract}
              toggleBibtex={toggleBibtex}
            />
          ))}
        </div>
      </section>
    </div>
  );
}