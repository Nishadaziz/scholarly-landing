import CourseCard from "../components/ui/CourseCard";

export default function CoursesSection() {
  const courses = [
    {
      slug: "det-complete", // ✅ ADD THIS
      title: "Reading • Writing • Listening • Speaking",
      subtitle: "Complete Duolingo English Test Track",
      badge: "With Support",
      features: [
        "4 skills coverage",
        "Exam-style practice",
        "Guided feedback",
        "Structured weekly roadmap",
      ],
    },
    {
      slug: "det-reading-speaking", // ✅ ADD THIS
      title: "Reading • Speaking",
      subtitle: "Focused Duolingo English Test Track",
      badge: null,
      features: [
        "2 skills coverage",
        "Fast practice sets",
        "Speaking confidence training",
      ],
    },
  ];

  return (
    <section className="mt-20 border-t border-gray-200 pt-12">
      <h2 className="ty-section">Duolingo English Test Courses</h2>
      <p className="ty-section-lead">
        Choose the preparation track that matches your goals.
      </p>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.slug} {...course} />
        ))}
      </div>
    </section>
  );
}