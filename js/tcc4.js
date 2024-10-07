let orderItems = [];
let totalValue = 0;
 
// Adiciona um item ao pedido
function addToOrder(itemName, itemPrice) {
    // Adiciona item ao array
    orderItems.push({ name: itemName, price: itemPrice });
    totalValue += itemPrice;
 
    // Atualiza a lista de pedidos
    updateOrderList();
}
 
// Atualiza a lista de pedidos
function updateOrderList() {
    const orderList = document.getElementById('order-list');
    const itemCount = document.getElementById('item-count');
    const totalValueElement = document.getElementById('total-value');
 
    // Limpa a lista existente
    orderList.innerHTML = '';
 
    // Adiciona itens à lista
    orderItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - R$${item.price.toFixed(2)};`
 
        // Cria um botão para remover o item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => {
            removeFromOrder(index);
        };
 
        // Adiciona o botão ao item da lista
        listItem.appendChild(removeButton);
        orderList.appendChild(listItem);
    });
 
    // Atualiza contadores
    itemCount.textContent = orderItems.length;
    totalValueElement.textContent = totalValue.toFixed(2);
}
 
// Remove um item do pedido
function removeFromOrder(index) {
    // Remove item do array
    totalValue -= orderItems[index].price;
    orderItems.splice(index, 1);
 
    // Atualiza a lista de pedidos
    updateOrderList();
}
 
// Adiciona um evento ao carregar a página para garantir que tudo esteja pronto
window.onload = () => {
    console.log('Lanchonete carregada');
};
