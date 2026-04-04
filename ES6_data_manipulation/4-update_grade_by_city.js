export default function updateStudentGradeByCity(listStudents, city, newGrades) {
    return listStudents
      .filter((s) => s.location === city)
      .map((s) => {
        let grade = 'N/A';
        for (const object of newGrades) {
          if (s.id === object.studentId) {
            grade = object.grade;
          }
        }
        return { ...s, grade };
      });
  }
