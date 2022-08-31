import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ModalOverlay, MessageError } from "../../assets/styles/globalStyles";
import { useProducts } from "../../contexts/products";
import { ProductModalProsp, NewProductData } from "../../interfaces";
import { mockedCategories } from "../../mocks";
import { api } from "../../services";
import Button from "../Button";
import { StyledInput } from "../Input/styles";
import * as Styled from "./styles"
import * as yup from "yup"

const newProductSchema = yup.object().shape({
  name: yup.string().required("Name required"),

  description: yup.string().required("Description required"),

  price: yup.number().required("Price required"),

  image: yup
    .string()
    .url("URL invalid")
    .required("Image required"),
});

const updateProductSchema = yup.object().shape({
  name: yup.string(),

  description: yup.string(),

  price: yup.number(),

  image: yup.string().url("URL invalid"),
});

const ProductModal = ({
  handleOpenModal,
  product,
  setProduct,
}: ProductModalProsp) => {
  const { handleGetProducts } = useProducts();

  const [categoryId, setCategoryId] = useState<string>(
    product ? product.categoryId : ""
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProductData>({
    resolver: yupResolver(product ? updateProductSchema : newProductSchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewProduct = (data: NewProductData) => {
    data.categoryId = categoryId;

    api
      .post("/products", data, headers)
      .then(() => {
        toast.success("Product registered");
        handleGetProducts();
        handleOpenModal();
        setProduct(undefined);
      })
      .catch(() => toast.error("Select a category"));
  };

  const handleUpdateProduct = (data: NewProductData) => {
    data.categoryId = categoryId;

    api.patch(`/products/${product?.id}`, data, headers).then(() => {
      toast.success("Product updated");
      handleGetProducts();
      handleOpenModal();
      setProduct(undefined);
    });
  };

  return (
    <ModalOverlay>
      <Styled.ModalContainer
        onSubmit={
          product
            ? handleSubmit(handleUpdateProduct)
            : handleSubmit(handleNewProduct)
        }
      >
        <h2>{product ? "Edit product" : "Add product"}</h2>
        <StyledInput
          defaultValue={product ? product.name : ""}
          placeholder="Product Name"
          {...register("name")}
        />
        <StyledInput
          defaultValue={product ? product.description : ""}
          placeholder="Product Description"
          {...register("description")}
        />
        <StyledInput
          defaultValue={product ? product.price : ""}
          type="number"
          step="0.01"
          placeholder="Product Price"
          {...register("price")}
        />
        <StyledInput
          defaultValue={product ? product.image : ""}
          placeholder="Product Image URL"
          {...register("image")}
        />
        <Styled.Select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option>Selecione a categoria</option>
          {mockedCategories.map((element) => (
            <option key={element.id} value={element.id}>
              {element.name}
            </option>
          ))}
        </Styled.Select>
        <MessageError>
          {errors.name?.message ||
            errors.description?.message ||
            errors.price?.message ||
            errors.image?.message}
        </MessageError>
        <div>
          <Button
            onClick={() => {
              setProduct(undefined);
              handleOpenModal();
            }}
            size="small"
            text="Cancel"
            variant="cancel"
          />
          <Button size="small" text="Submit" type="submit" />
        </div>
      </Styled.ModalContainer>
    </ModalOverlay>
  );
};

export default ProductModal;
