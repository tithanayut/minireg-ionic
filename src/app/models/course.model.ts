export interface Course {
  studyProgram: string;
  semester: string;
  academicYear: string;
  course: CourseData;
}

export interface AllCourses {
  studyProgram: string;
  semester: string;
  academicYear: string;
  courses: CourseData[];
}

export interface CourseData {
  courseNo: string;
  abbrName: string;
  courseNameTh: string;
  courseNameEn: string;
  department: string;
  credit: number;
  creditHours: string;
  genEdType: string;
  updatedAt: string;
}
