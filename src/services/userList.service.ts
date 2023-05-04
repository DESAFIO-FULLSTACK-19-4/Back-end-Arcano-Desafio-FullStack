import axios from "axios";

export const userListService = async (id: string) => {
  const carrinhos = await axios(`https://fakestoreapi.com/carts/`);

  const userDados = await axios(`https://fakestoreapi.com/users/${id}`);

  let arr = [];

  for (let i = 0; i < carrinhos.data.length; i++) {
    if (carrinhos.data[i].userId == id) {
      arr.push(carrinhos.data[i].products);
    }
  }

  let mostrarDados = {
    nome: `${userDados.data.name.firstname} ${userDados.data.name.lastname}`,
    email: `${userDados.data.email}`,
    ultimasCompras: arr,
  };

  return mostrarDados;
};
