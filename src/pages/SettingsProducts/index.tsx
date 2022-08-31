import Menu from "../../components/Menu";
import * as Styled from "./styles";
import Button from "../../components/Button";
import SettingsProductCard from "../../components/SettingsProductCard";
import { useProducts } from "../../contexts/products";
import { useState } from "react";
import ProductModal from "../../components/ProductModal";
import DeleteProductModal from "../../components/DeleteProductModal";
import { useCategories } from "../../contexts/categories";
import SettingsMenu from "../../components/SettingsMenu";
import { Category, Product } from "../../interfaces";

const SettingsProducts = () => {
  const { products } = useProducts();
  const { categories } = useCategories();

  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0] || ({} as Category)
  );

  const filteredProducts: Product[] = products.filter(
    (element) => selectedCategory && element.categoryId === selectedCategory.id
  );

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  return (
    <Styled.SettingsContainer>
      <Menu path="settings" />
      <SettingsMenu path="products" />
      <Styled.EntitiesEditContainer>
        <h2>Manage Products</h2>
        <Styled.EntitiesEditCategoriesSelector className="entities-edit-categories-selector">
          {categories.map((element) => {
            return (
              <Styled.EntitiesEditCategoriesButton
                active={element.name === selectedCategory.name}
                onClick={() => setSelectedCategory(element)}
              >
                {element.name}
              </Styled.EntitiesEditCategoriesButton>
            );
          })}
        </Styled.EntitiesEditCategoriesSelector>
        <Styled.EntitiesEditList>
          <Styled.AddEntityCard onClick={handleOpenModal}>
            <h3>+</h3>
            <p>Add Item</p>
          </Styled.AddEntityCard>
          {filteredProducts.map((element) => (
            <SettingsProductCard
              handleOpenModal={handleOpenModal}
              handleOpenDeleteModal={handleOpenDeleteModal}
              setProduct={setProduct}
              product={element}
              key={element.id}
            />
          ))}
        </Styled.EntitiesEditList>
        <Styled.ConfirmationContainer>
          <Button text="Cancel" variant="cancel" />
          <Button text="Save" />
        </Styled.ConfirmationContainer>
      </Styled.EntitiesEditContainer>
      {openModal && (
        <ProductModal
          setProduct={setProduct}
          product={product}
          handleOpenModal={handleOpenModal}
        />
      )}
      {openDeleteModal && (
        <DeleteProductModal
          setProduct={setProduct}
          productId={product?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />
      )}
    </Styled.SettingsContainer>
  );
};

export default SettingsProducts;
