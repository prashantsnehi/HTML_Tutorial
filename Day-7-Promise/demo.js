var a = 'https://dummyjson.com/recipes';
var b = 'https://jsonplaceholder.typicode.com/posts';
function getData() {
    fetch(a)
        .then(response => response.json())
        .then(data => {
            console.log(data.recipes);
            var tData = document.createElement("table");
            tData.setAttribute("border", "1");
            tData.setAttribute("cellpadding", "10");
            tData.setAttribute("id", "tblData");
            tData.appendChild(document.createElement("thead"));
            var tHead = document.createElement("tr");
            tHead.innerHTML = "<th>User Id</th><th>Image</th><th>Product Name</th>";
            tData.querySelector("thead").appendChild(tHead);
            for(let i in data.recipes) {
                var tRow = document.createElement("tr");
                tRow.innerHTML = `<td>${data.recipes[i].id}</td>
                    <td><img width="100px" height="100px" src=${data.recipes[i].image} /></td>
                    <td>${data.recipes[i].name}</td>`;
                tData.appendChild(tRow);
            }
            // tHead.innerHTML = `<th>User Id</th>
            //                    <th>Id</th>
            //                    <th>Title</th>
            //                    <th>Body</th>`;
            // tData.querySelector("thead").appendChild(tHead);
            // for(let i in data) {
            //     var tRow = document.createElement("tr");
            //     tRow.innerHTML = `<td>${data[i].userId}</td>
            //         <td>${data[i].id}</td>
            //         <td>${data[i].title}</td>
            //         <td>${data[i].body}</td>`;
            //     tData.appendChild(tRow);
            // }
            document.getElementById("data").appendChild(tData);

        })
        .catch(error => console.error('Error fetching data:', error))
}