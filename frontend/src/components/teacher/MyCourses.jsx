import { BookOpen } from "lucide-react";

function MyCourses({ courses }) {

    return (

        <div className="bg-white rounded-xl shadow-sm p-6 mt-6">

            <h2 className="text-xl font-bold mb-5">
                My Courses
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

                {courses.length === 0 ? (

                    <p>No courses assigned.</p>

                ) : (

                    courses.map((course) => (

                        <div

                            key={course.id}

                            className="border rounded-lg p-5"

                        >

                            <BookOpen

                                className="text-blue-600 mb-3"

                                size={24}

                            />

                            <h3 className="font-semibold">

                                {course.name}

                            </h3>

                            <p className="text-slate-500 text-sm mt-2">

                                {course.description}

                            </p>

                        </div>

                    ))

                )}

            </div>

        </div>

    );

}

export default MyCourses;