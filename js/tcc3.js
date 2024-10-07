function addToOrder(item) {
    const orderList = document.getElementById('order-list');
    const listItem = document.createElement('li');
    listItem.textContent = item;
    orderList.appendChild(listItem);
}