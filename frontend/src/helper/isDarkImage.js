const isDarkImage = (img) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = img.width;
  canvas.height = img.height;

  context.drawImage(img, 0, 0, img.width, img.height);

  const imageData = context.getImageData(0, 0, img.width, img.height);
  const data = imageData.data;

  let r, g, b, avg;
  let colorSum = 0;

  for (let x = 0, len = data.length; x < len; x += 4) {
    r = data[x];
    g = data[x + 1];
    b = data[x + 2];

    avg = Math.floor((r + g + b) / 3);
    colorSum += avg;
  }

  const brightness = Math.floor(colorSum / (img.width * img.height));
  return brightness < 128; // If brightness is less than 128, the image is dark
};

export default isDarkImage;
