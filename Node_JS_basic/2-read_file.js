const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== '');

  const students = lines.slice(1);
  console.log(`Number of students: ${students.length}`);

  const fields = {};

  students.forEach((student) => {
    const [firstname, , , field] = student.split(',');

    if (!fields[field]) {
      fields[field] = [];
    }

    fields[field].push(firstname);
  });

  Object.entries(fields).forEach(([field, firstnames]) => {
    console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
  });
}

module.exports = countStudents;
