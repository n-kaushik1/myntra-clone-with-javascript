let bagItems;
onLoad();

function onLoad(){
  let bagItemsstr = localStorage.getItem('bagItems');
  bagItems = bagItemsstr ? JSON.parse(bagItemsstr) : [];
  displayItemsOnHomePage();
  displaybagicon();
}

function addtobag(itemid){
  bagItems.push(itemid);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displaybagicon();
}

function displaybagicon(){
  let bagitemcountElement = document.querySelector('.bag-item-count');
  if(bagItems.length>0){
    bagitemcountElement.style.visibility = 'visible';
    bagitemcountElement.innerHTML = bagItems.length;
  } else{
    bagitemcountElement.style.visibility = 'hidden';
  }
  
}

function displayItemsOnHomePage(){
  let itemscontainerElement = document.querySelector('.items-container');
  if (!itemscontainerElement){
    return;
  }

let innerHTML = '';
items.forEach(item =>{
  innerHTML += `<div class="item-container">
          <img class="item-img" src="${item.image}" alt="item image">
          <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
          </div>
        
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addtobag(${item.id});">Add to Bag</button>
        </div>`
});
itemscontainerElement.innerHTML= innerHTML;

}
