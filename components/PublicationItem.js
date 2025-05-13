export default function PublicationItem({ publication, index, visibleAbstracts, visibleBibtex, toggleAbstract, toggleBibtex }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white">{publication.title}</h3>
      <p className="text-sm text-gray-400">{publication.authors}</p>
      <p className="text-sm text-gray-400">
        {publication.journal || publication.conference}, {publication.year}
      </p>
      <div className="mt-4 flex space-x-2">
        <a
          href={publication.doi}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 text-white px-2 py-1 text-sm rounded hover:bg-gray-600"
          aria-label="View DOI"
        >
          DOI
        </a>
        <button
          onClick={() => toggleAbstract(index)}
          className="bg-gray-700 text-white px-2 py-1 text-sm rounded hover:bg-gray-600"
          aria-label={visibleAbstracts[index] ? "Hide abstract" : "Show abstract"}
        >
          {visibleAbstracts[index] ? 'Hide Abs' : 'Abs'}
        </button>
        <button
          onClick={() => toggleBibtex(index)}
          className="bg-gray-700 text-white px-2 py-1 text-sm rounded hover:bg-gray-600"
          aria-label={visibleBibtex[index] ? "Hide BibTeX" : "Show BibTeX"}
        >
          {visibleBibtex[index] ? 'Hide Bib' : 'Bib'}
        </button>
      </div>
      {/* Abstract */}
      {visibleAbstracts[index] && (
        <div className="mt-4 text-foreground-secondary text-sm">
          {publication.abstract}
        </div>
      )}
      {/* BibTeX */}
      {visibleBibtex[index] && (
        <div className="mt-4 text-foreground-secondary text-sm whitespace-pre">
          {publication.bibtex}
        </div>
      )}
    </div>
  );
}