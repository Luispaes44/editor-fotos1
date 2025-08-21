const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let img = new Image();

document.getElementById("upload").addEventListener("change", function(e) {
  const reader = new FileReader();
  reader.onload = function(event) {
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.filter = "none";
      ctx.drawImage(img, 0, 0);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
});

function applyFilter(filter) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.filter = filter;
  ctx.drawImage(img, 0, 0);
}

function addText() {
  ctx.font = "40px Arial";
  ctx.fillStyle = "red";
  ctx.fillText("Minha Foto 😎", 50, 50);
}

function downloadImage() {
  const link = document.createElement("a");
  link.download = "foto-editada.png";
  link.href = canvas.toDataURL();
  link.click();
}
