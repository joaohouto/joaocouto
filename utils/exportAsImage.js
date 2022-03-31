import * as htmlToImage from "html-to-image";

export const exportAsImage = async (element, imageFileName) => {
  try {
    const imageUrl = await htmlToImage.toJpeg(element, {
      canvasHeight: 990 * 1.5,
      canvasWidth: 770 * 1.5,
    });

    downloadImage(imageUrl, imageFileName);
  } catch (err) {
    console.error(err);
  }
};

const downloadImage = (blob, fileName) => {
  const fakeLink = window.document.createElement("a");
  fakeLink.style = "display:none;";
  fakeLink.download = fileName;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
};
