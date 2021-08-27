function borderColorize(para) {
  let bobj = document.getElementById("searchBarCover");
  if (para === 1) {
    bobj.style.borderBottom = "1px solid var(--sky-blue)";
  } else {
    bobj.style.borderBottom = "1px solid var(--condensed-white)";
  }
}
