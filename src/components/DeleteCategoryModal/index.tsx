import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/globalStyles";
import { useCategories } from "../../contexts/categories";
import { DeleteCategoryModalProps } from "../../interfaces";
import { api } from "../../services";
import Button from "../Button";
import { DeleteModalContainer } from "./styles";

const DeleteCategoryModal = ({
  categoryId,
  handleOpenDeleteModal,
  setCategory,
}: DeleteCategoryModalProps) => {
  const { handleGetCategories } = useCategories();

  const handleDeleteCategory = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.delete(`/categories/${categoryId}`, headers).then(() => {
      toast.success("Categoria excluida com sucesso!");
      handleGetCategories();
      setCategory(undefined);
      handleOpenDeleteModal();
    });
  };

  return (
    <ModalOverlay>
      <DeleteModalContainer>
        <h2>Excluir categoria</h2>
        <div>
          <Button
            onClick={() => {
              setCategory(undefined);
              handleOpenDeleteModal();
            }}
            text="Cancelar"
            variant="cancel"
          />
          <Button text="Excluir" onClick={handleDeleteCategory} />
        </div>
      </DeleteModalContainer>
    </ModalOverlay>
  );
};

export default DeleteCategoryModal;
