import { useEffect, useState } from "react";
import { getProduct } from "../../services";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    getProduct(itemId)
      .then((response) => {
        setItem(response);
      })
      .catch(() => {
        setItem(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemId]);

  return <ItemDetail item={item} isLoading={isLoading} />;
};

export default ItemDetailContainer;
