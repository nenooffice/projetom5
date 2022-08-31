import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/globalStyles";
import { useProducts } from "../../contexts/products";
import { DeleteProductModalProps } from "../../interfaces";
import { api } from "../../services";
import Button from "../Button";
import { DeleteModalContainer } from "./styles";

const DeleteProductModal = ({
  productId,
  handleOpenDeleteModal,
  setProduct,
}: DeleteProductModalProps) => {
  const { handleGetProducts } = useProducts();

  const handleDeleteProduct = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.delete(`/products/${productId}`, headers).then(() => {
      toast.success("Produto excluido com sucesso!");
      handleGetProducts();
      setProduct(undefined);
      handleOpenDeleteModal();
    });
  };

  return (
    <ModalOverlay>
      <DeleteModalContainer>
        <h2>Excluir produto</h2>
        <div>
          <Button
            onClick={() => {
              setProduct(undefined);
              handleOpenDeleteModal();
            }}
            text="Cancelar"
            variant="cancel"
          />
          <Button text="Excluir" onClick={handleDeleteProduct} />
        </div>
      </DeleteModalContainer>
    </ModalOverlay>
  );
};

export default DeleteProductModal;
