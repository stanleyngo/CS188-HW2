/**
Creates a shopping list and displays it on shopping.innerHTML
*/

//
window.onload= function(){
    //You will call the functions you wrote here
        var list = newList();
        printList(list);
        var total = findTotal(list);
        this.document.getElementById('total').innerHTML = "Your total is $" + total;
    }
    
    //Prints the shopping list on the web page by changing the html code
    //list: Array of items
    function printList(list){
        for(let i = 0; i < list.length; i++){
            document.getElementById("shoppingList").innerHTML += "<tr><td>" + list[i].name  + "</td> <td>" + list[i].price  + "</td> <td>" + list[i].count  +'</td></tr>';
        }
    }

    var Obj = function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    function newList() {
        var list = [];
        var buy = prompt("What would you like to buy?");
        var p = prompt("What is its price?");
        var num = prompt("How many do you want?");
        var j = new Obj(buy, p, num);
        list[0] = j;
        while(buy != null && p != null && num != null){
            var buy = prompt("What would you like to buy?");
            var p = prompt("What is its price?");
            var num = prompt("How many do you want?");
            var i = new Obj(buy, p, num);
            list.push(i);
        }
        list.pop();
        return list;
    }

    function findTotal(list){
        var total = 0;
        for (i = 0; i < list.length; i++){
        total += parseInt(list[i].price) * parseInt(list[i].count);
        }
        return total;
    }