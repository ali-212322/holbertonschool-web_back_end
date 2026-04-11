const express = require('express');
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

const app = express();
const database = process.argv[2];

app.get('/', (req, res) => {
  res.type('text/plain');
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  getStudentsReport(database)
    .then((report) => {
      res.type('text/plain');
      res.status(200).send(`This is the list of our students\n${report}`);
    })
    .catch((error) => {
      res.type('text/plain');
      res.status(200).send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(1245);

module.exports = app;
