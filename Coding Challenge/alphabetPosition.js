const text = "The sunset sets at twelve o' clock."
function alphabetPosition(text) {
    text = text.split("").filter(v => /[a-zA-Z]/.test(v)).map(v => v.toLowerCase().charCodeAt(0) - 96).join(" ")
    return text;
}

alphabetPosition(text)
