import toast from "react-hot-toast";
import Button from "../Button";
import { ModalContainer } from "./styles";
import { CategoryData, CategoryModalProps } from "../../interfaces";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../services";
import { useForm } from "react-hook-form";
import {
  MessageError,
  ModalOverlay,
  StyledInput,
} from "../../assets/styles/globalStyles";
import { useCategories } from "../../contexts/categories";

const categorySchema = yup.object().shape({
  name: yup.string().required("Obrigatório informar nome da categoria"),
});

const CategoryModal = ({
  handleOpenModal,
  category,
  setCategory,
}: CategoryModalProps) => {
  const { handleGetCategories } = useCategories();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryData>({
    resolver: yupResolver(categorySchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewCategory = (data: CategoryData) => {
    api
      .post("/categories", data, headers)
      .then(() => {
        toast.success("Categoria criada com sucesso");
        handleGetCategories();
        handleOpenModal();
      })
      .catch(() => {
        toast.error("Erro na hora de criar categoria");
      });
  };

  const handleUpdateCategory = (data: CategoryData) => {
    api
      .patch(`/categories/${category?.id}`, data, headers)
      .then(() => {
        toast.success("Categoria editada com sucesso");
        handleGetCategories();
        handleOpenModal();
      })
      .catch(() => {
        toast.error("Erro na hora de editar categoria");
      });
  };

  return (
    <ModalOverlay>
      <ModalContainer
        onSubmit={handleSubmit(
          category ? handleUpdateCategory : handleNewCategory
        )}
      >
        <h2>{category ? "Editar categoria" : "Criar nova categoria"}</h2>
        <StyledInput
          placeholder="Nome da categoria"
          {...register("name")}
          defaultValue={category ? category.name : ""}
        />
        <MessageError>{errors.name?.message}</MessageError>
        <div>
          <Button
            text="Cancelar"
            variant="cancel"
            onClick={() => {
              setCategory(undefined);
              handleOpenModal();
            }}
            size="small"
          />
          <Button text="Enviar" type="submit" size="small" />
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CategoryModal;
