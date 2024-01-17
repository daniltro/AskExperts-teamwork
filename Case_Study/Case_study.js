function openFileExplorer() {
  // Создаем input элемент типа file
  const input = document.createElement("input");
  input.type = "file";

  // Устанавливаем обработчик события при выборе файла
  input.addEventListener("change", handleFileSelect);

  // Запускаем окно выбора файла
  input.click();
}

function handleFileSelect(event) {
  const file = event.target.files[0];
  const imageContainer = document.getElementById("image-container");

  // Создаем элемент img и устанавливаем выбранную картинку в качестве src
  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);

  // Добавляем созданный img элемент в контейнер для картинки
  imageContainer.appendChild(img);
}
