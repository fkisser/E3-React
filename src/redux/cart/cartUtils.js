export const addProduct = (cartItems, product) => {
  const cartProduct = cartItems.find((cartItem) => {
    return cartItem.id === product.id
  })
  cartProduct ?
    cartItems.map((cartItem) => {
      return cartItem.id === productInCart.id
        ? {
          ...cartItem,
          quantity: cartItem.quantity + 1
        }
        : cartItem
    }) :
    [
      ...cartItems,
      {
        ...product,
        quantity: 1
      }
    ]
}

export const removeProduct = (cartItems, id) => {
  const productToRemove = cartItems.find((item) => item.id === id);

  (productToRemove.quantity > 1) ?
    cartItems.map((item) => {
      return item.id === productToRemove.id
        ? {
          ...item,
          quantity: item.quantity - 1
        }
        : item
    }) :
    cartItems.filter((item) => item.id !== productToRemove.id)
}