import peopleData from '../../data/people.json';
import Person from '../../components/Person';

export default function People() {
  // Group people by category
  const faculty = peopleData.filter(member => member.category === 'Faculty');
  const phdStudents = peopleData.filter(member => member.category === 'Ph.D. Students');
  const mastersStudents = peopleData.filter(member => member.category === "Master's Students");
  const alumni = peopleData
    .filter(member => member.category === 'Alumni')
    .sort((a, b) => parseInt(b.year) - parseInt(a.year)); // Sort by year, descending

  return (
    <div>
      {/* Faculty Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-lsue mb-6 border-b-2 border-[#FDD023] inline-block">
          Director
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {faculty.map((member, index) => (
            <Person key={index} member={member} />
          ))}
        </div>
      </section>

      {/* Ph.D. Students Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-lsue mb-6 border-b-2 border-[#FDD023] inline-block">
          Ph.D. Students
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {phdStudents.map((member, index) => (
            <Person key={index} member={member} />
          ))}
        </div>
      </section>

      {/* Master's Students Section */}
      {mastersStudents.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-lsue mb-6 border-b-2 border-[#FDD023] inline-block">
          {"Master's Students"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {mastersStudents.map((member, index) => (
              <Person key={index} member={member} />
            ))}
          </div>
        </section>
      )}

      {/* Alumni Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-lsue mb-6 border-b-2 border-[#FDD023] inline-block">
          Alumni
        </h2>
        <div className="space-y-4">
          {alumni.map((member, index) => (
            <div key={index} className="text-foreground-secondary">
              {member.name} ({member.degree}, {member.year}) → {member.affiliations.join(' → ')}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}