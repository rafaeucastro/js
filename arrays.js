let show = console.log;
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';

let array = myData.split(','); //dividir uma string e transformar num array

show(array);

let myNewString = array.join(','); //same as array.toString();

//show(myNewString);

array.pop(); //remove o último elemento do array
array.push("Heitor"); //insere no final do array
array.unshift("Edgar", "Marcele"); //inserir no início do array
array.shift(); //Remover do início do array
let result = array.reduce((previousValue, current, i) => previousValue + "," + `${i} - ` + current); //junta os elementos
show(array);
show(result);

let slice = array.slice(2, 4); //pegar uma parte do array
show(slice);

let products = ['Underpants:6.99','Socks:5.99','T-shirt:14.99','Trousers:31.99','Shoes:23.99'];
let total = 0;
let itemText = '';

for(let i = 0; i < products.length; i++) {
    let product = products[i].split(':');
    let productName = product[0];
    let price = Number(product[1]);

    total += price;

    itemText = `${productName} -- \$${price}`;
    show(itemText);
}

show('Total: $' + total.toFixed(2));