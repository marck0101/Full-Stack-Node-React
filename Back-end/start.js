const { exec } = require('child_process');

const runScraper = 'node scraper/scraper.js';
const runFileWatcher = 'node scraper/fileWatcher.js'; // Ajuste do caminho para o fileWatcher.js

exec(runScraper, (err, stdout, stderr) => {
  if (err) {
    console.error('Error executing scraper:', err);
    return;
  }
  console.log('Scraper executed successfully');
});

exec(runFileWatcher, (err, stdout, stderr) => {
  if (err) {
    console.error('Error executing fileWatcher:', err);
    return;
  }
  console.log('FileWatcher executed successfully');
});
