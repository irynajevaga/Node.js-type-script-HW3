
// Импортируем модуль 'fs'
const fs = require('fs');

// Создание каталога 'myFolder'
fs.mkdir('myFolder', (err) => {
  if (err) {
    return console.error('Ошибка при создании каталога:', err);
  }
  console.log('Каталог "myFolder" успешно создан.');

  // После успешного создания каталога, удаляем его
  fs.rmdir('myFolder', (err) => {
    if (err) {
      return console.error('Ошибка при удалении каталога:', err);
    }
    console.log('Каталог "myFolder" успешно удалён.');
  });
});