function likes(names) {
  // TODO
  var count = names.length;
  var absolute = " likes this";
  var sonuc = "";
  for (var i = 0; i < names.length; i++) {
    sonuc += names[i];
  }
  sonuc = names.length === 1 ? names.join("") : names.join(" and ");
  if (names.length === 3) {
    names.splice(names.length - 1, 0, "and");
    sonuc = names.join(" ");
    sonuc = sonuc.replace(names[0], names[0] + ",");
  } else if (names.length === 4) {
    names.pop();
    names.pop();
    names.splice(names.length, 0, "and");
    sonuc = names.join(" ");
    sonuc = sonuc.replace(names[0], names[0] + ",");
    sonuc = sonuc + ` ${count - 2} others`;
  }
  return names.length == 0
    ? "no one likes this"
    : sonuc + ` ${names.length > 1 ? "like" : "likes"} this`;
}
