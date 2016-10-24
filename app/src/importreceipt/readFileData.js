const readFileData = (blob, FileReader) => (
  new Promise((resolve) => {
    const reader = new FileReader();

    reader.addEventListener("loadend", () => {
      const dataUrl = reader.result;
      const content = dataUrl.substr(dataUrl.indexOf(',') + 1);

      resolve({dataUrl, content});
    });

    reader.readAsDataURL(blob);
  })
);

export default readFileData;