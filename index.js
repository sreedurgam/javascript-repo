console.log("Javscript demo");

//random password generator
const randomPasswordgenerator = (len) => {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let pwd = "";
  for (var i = 0; i < len; i++) {
    pwd += chars[Math.floor(Math.random() * chars.length)];
  }
  return pwd;
};
console.log(randomPasswordgenerator(12));

//coverting a file to base 64
const convertToBase64 = (file, key) => {
  if (!!file) {
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = () => reject(fileReader.result);
    }).then((result) => {
      onDetailsChange(key, result.replace("data:image/png;base64,", ""));
      return result;
    });
  }
};

//converting a url to base 64
const getBase64FromUrl = async (url, key) => {
  const data = await fetch(url);
  const blob = await data.blob();
  convertToBase64(blob, key);
};

//text export file
const sampleArray = ["a", "b", "c", "d"];
const a = document.createElement("a", "");
a.href = URL.createObjectURL(
  new Blob([sampleArray.join("\n")], {
    type: "text/plain",
  })
);
a.setAttribute("download", "VOI Transaction Extract.txt");
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
