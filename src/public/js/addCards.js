const imgInput = document.querySelector("input[accept='image/*']");
const vidInput = document.querySelector("input[accept='video/*']");

const thumbnais = document.querySelectorAll(".target");
const imgButtons = document.querySelectorAll(".image");
const vidButtons = document.querySelectorAll(".video");

function previewVideo(output, fileInput) {
  const video = document.getElementById("video");
  const canvas = document.getElementById('canvas');

  const reader = new FileReader();

  reader.addEventListener("loadend", (e) => {
    video.src = e.target.result;
    video.currentTime = 1;
    video.load();
  });

  video.addEventListener("loadeddata", (e) => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    output.src = canvas.toDataURL('image/png');
    output.style.display = "block";
  });

  reader.readAsDataURL(fileInput.files[0]);
}

function previewThumbnail(output, fileInput) {

  const reader = new FileReader();
  reader.onloadend = function () {
    output.style.display = "block";
    output.src = reader.result;
  }

  reader.readAsDataURL(fileInput.files[0]);
}

imgInput.addEventListener("change", () => {
  previewThumbnail(thumbnais[0], imgInput);
  imgButtons[0].style.display = "none";
})

vidInput.addEventListener("change", () => {
  previewVideo(thumbnais[1], vidInput);
  vidButtons[0].style.display = "none";
})


imgButtons[0].addEventListener("click", () => {
  imgInput.click();
});

imgButtons[1].addEventListener("click", () => {
  imgInput.click();
});

vidButtons[0].addEventListener("click", () => {
  vidInput.click();
});

vidButtons[1].addEventListener("click", () => {
  vidInput.click();
});
