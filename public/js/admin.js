const deleteProduct = (button) => {
  const productId = button.parentNode.querySelector("[name=productId]").value;
  const csrfToken = button.parentNode.querySelector("[name=_csrf]").value;

  const productElement = button.closest("article");

  fetch(`/admin/product/${productId}`, {
    method: "DELETE",
    headers: {
      "csrf-token": csrfToken,
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
      productElement.parentNode.removeChild(productElement);
    })
    .catch((err) => {
      console.log(err);
    });
};
