const getData = () => {
    fetch("http://localhost:3000/List_Menu").then(function (response) {
        response.json().then(function (data) {
            console.log(data.data);
            listMhs.innerHTML = " ";
            let i = 1;
            let buku = data.data.books;
            buku.forEach(items => {
                listMhs.innerHTML +=
                    `<tr>
                        <td>${i}</td>
                        <td>${items.id}</td>
                        <td>${items.name}</td>
                        <td>${items.publisher}</td>
                    </tr>`
                ;
                i++;
            })

            // let product = data.products;
            // product.forEach(items => {
            //     listMhs.innerHTML +=
            //     `
            //       <tr>
            //         <td>${i+1}</td>
            //         <td>${fileProduct[i].productName}</td>
            //         <td>${fileProduct[i].description}</td>
            //         <td>${fileProduct[i].stock}</td>
            //         <td>${fileProduct[i].price}</td>
            //       </tr>
            //     `
            // })

        });
    }).catch(function (error) {
        console.log('Fetch Error:', error);
    });
}