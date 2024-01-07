/* insert name

add name to paragraph
- interpolation of name variable

randomise sentences
- sentences in array
- select a random sentence
*/

function getValueOfTextField() {
    var usersName = document.getElementById("name").value;
    document.getElementById("storyAndName").innerHTML = usersName
}

