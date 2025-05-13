import projectsData from '../../data/projects.json';
import ResearchProject from '../../components/ResearchProject';

export default function Research() {
  return (
    <div>
      {/* Research Projects Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-lsue mb-6 border-b-2 border-[#FDD023] inline-block text-center">
          Research Projects
        </h2>
        <div className="grid grid-cols-1 space-y-6">
          {projectsData.map((project, index) => (
            <ResearchProject key={index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}