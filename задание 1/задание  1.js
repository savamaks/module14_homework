const parser = new DOMParser();
const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
              <first>Петр</first>
              <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
         </student>
         
    </list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");



list = new Array();

for (let i=0;i<xmlDOM.getElementsByTagName("student").length;i++){

    list[i] = {
        name: xmlDOM.getElementsByTagName("first")[i].textContent + ' ' + xmlDOM.getElementsByTagName("second")[i].textContent,
        age: xmlDOM.getElementsByTagName("age")[i].textContent,
        prof: xmlDOM.getElementsByTagName("prof")[i].textContent,
        lang: xmlDOM.querySelectorAll("name")[i].getAttribute("lang"),
    }
}

console.log(list);

