import CourseCard from "./CourseCard";

function CourseList({ courses }) {
  return (
    <section className="course-list">
      {courses.map(function (course) {
        return (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
          />
        );
      })}
    </section>
  );
}

export default CourseList;
