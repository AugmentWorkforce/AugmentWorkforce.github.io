export default function Person({ member }) {
  return (
    <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border-1 border-neutral-800">
      <img
        src={member.photo}
        alt={member.name}
        className="w-32 h-32 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
      <p className="text-sm text-gray-400">{member.position}</p>
      <p className="text-foreground-secondary mt-2">{member.bio}</p>
      {/* Links Buttons */}
      <div className="mt-4 flex flex-wrap gap-1">
        {member.website && (
          <a
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-1 py-0 rounded-sm text-xs leading-5 min-w-[40px] hover:bg-purple-lsue hover:text-white transition-colors"
          >
            Website
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-1 py-0 rounded-sm text-xs leading-5 min-w-[40px] hover:bg-purple-lsue hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        )}
        {member.googleScholar && (
          <a
            href={member.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-1 py-0 rounded-sm text-xs leading-5 min-w-[40px] hover:bg-purple-lsue hover:text-white transition-colors"
          >
            Google Scholar
          </a>
        )}
        {member.cv && (
          <a
            href={member.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-1 py-0 rounded-sm text-xs leading-5 min-w-[30px] hover:bg-purple-lsue hover:text-white transition-colors"
          >
            CV
          </a>
        )}
      </div>
    </div>
  );
}