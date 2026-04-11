const http = require('http');
const fs = require('fs');

function getStudentsReport(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line !== '');

      const students = lines.slice(1);
      const report = [`Number of students: ${students.length}`];
      const fields = {};

      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstname);
      });

      Object.entries(fields).forEach(([field, firstnames]) => {
        report.push(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
      });

      resolve(report.join('\n'));
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    const database = process.argv[2];

    getStudentsReport(database)
      .then((report) => {
        res.end(`This is the list of our students\n${report}`);
      })
      .catch((error) => {
        res.end(`This is the list of our students\n${error.message}`);
      });
    return;
  }

  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
