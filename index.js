function openFrame() {
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;

  document.getElementById(
    "frame"
  ).src = `https://justpilz.github.io/iframe-child/?firstname=${firstname}&lastname=${lastname}`;
}

function reloadFrame() {
  document.getElementById("frame").contentWindow.location.reload(true);
}

function closeForm() {
  document.getElementById("frame").style.display = "none";
}

window.closeForm = closeForm;
