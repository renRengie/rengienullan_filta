let cartItemHolder = document.getElementById('cart-items-holder')
const atcForm = document.getElementById('add-to-cart-form')
let cartItems = []

atcForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let selectedSize = document.querySelector("input[type='radio'][name='size']:checked")
    if(!selectedSize){alert('Please Select A Size First'); return true;}
    let newItem = {
        'size': selectedSize.value,
        'qty': 1
    }
    let existingData = cartItems.find(item => item.size == selectedSize.value)

    if(existingData){
        cartItems.map(item => {
            if(existingData.size == item.size){
                return item.qty++
            }

            return item
        })
    } else {
        cartItems.push(newItem)
    }

    buildCartItem(cartItems)

})

function buildCartItem(itemData){
    let itemRender = itemData.map(item => {
        return `
        <div class="cart-item p-6 flex">
            <div class="img-cont max-w-[80px] mr-4">
                <img src="./assets/classic-tee.jpg" alt="Classic Tee">
            </div>
            <div class="cart-details flex-1">
                <h1 class="title mb-2">Classic Tee</h1>
                <div class="qty-price mb-2">
                    <span class="qty">${item.qty}</span>x
                    <span class="price font-bold">$75.00</span>
                </div>
                <div class="size">Size: <span>${item.size}</span></div>
            </div>
        </div>
        `
    })
    let qtySum = itemData.map(item => item.qty).reduce((a,b) => a + b)
    cart_count.innerHTML = ""
    cart_count.insertAdjacentText('afterbegin', `(${qtySum})`)
    cartItemHolder.innerHTML = ""
    cartItemHolder.insertAdjacentHTML('afterbegin', itemRender)
}