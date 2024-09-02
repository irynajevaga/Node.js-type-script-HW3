// Импортируем модуль 'fs'
const fs = require('fs');

// Запись в файл 'info.txt'
fs.writeFile('info.txt', 'Node.js is awesome!', (err) => {
  if (err) {
    return console.error('Ошибка при записи файла:', err);
  }
  console.log('Текст успешно записан в файл "info.txt".');

  // Чтение содержимого файла 'info.txt'
  fs.readFile('info.txt', 'utf8', (err, data) => {
    if (err) {
      return console.error('Ошибка при чтении файла:', err);
    }
    console.log('Содержимое файла "info.txt":');
    console.log(data);
  });
});