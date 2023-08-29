import { useEffect, useState } from "react";
import { getProducts } from "../../services";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getProducts(categoryId).then((response) => {
      setItems(response);
      setIsLoading(false);
    });
  }, [categoryId]);

  return <ItemList items={items} isLoading={isLoading} />;
};

export default ItemListContainer;
