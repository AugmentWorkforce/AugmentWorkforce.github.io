import TeachingItem from '../../components/TeachingItem';
import teachingData from '../../data/teaching.json';

export default function Teaching() {
  return (
    <div>
      {/* Teaching Section */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-purple-lsue mb-6 border-b-2 border-[#FDD023] inline-block text-center">
          Teaching
        </h1>
        <div className="space-y-6 mt-6">
          {teachingData.map((course, index) => (
            <TeachingItem key={index} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}