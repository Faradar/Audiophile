export const getCartQuantity = (cart) => {
  return cart.reduce((acc, item) => acc + item.quantity, 0);
};

export const getCartTotal = (cart) => {
  return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
};

export const mapCartToOrderItems = (cart) => {
  return cart.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity,
      price: item.price,
      title: item.title,
      category: item.categoryId,
      image: item.imageId,
      nickname: item.nickname,
    };
  });
};
