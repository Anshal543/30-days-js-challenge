function collectionOfItems(){
    let items = [];
    return {
        addItem:function(item){
            items.push(item);
        },
        removeItem:function(item){
            items = items.filter(function(element){
                return element !== item;
            });
        },
        getItems:function(){
            return items;
        }
    }
}
const myCollection = collectionOfItems();
myCollection.addItem('item1');
myCollection.addItem('item2');
myCollection.addItem('item3');
myCollection.removeItem('item2');
console.log(myCollection.getItems());