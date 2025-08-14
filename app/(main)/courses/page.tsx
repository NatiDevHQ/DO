import { getCourses } from "@/db/queries";

const CoursesPage = async () => {
  const data = await getCourses();

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Languages Courses</h1>
      {JSON.stringify(data)}
      <List courses={courses} activeCourseId={1} />
    </div>
  );
};

export default CoursesPage;
