import { ButtonHTMLAttributes, Dispatch, InputHTMLAttributes, SetStateAction } from "react";
import { Theme } from "../interfaces/styled-components";


/*
 ? Types Interfaces 
 */

export interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Category {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Table {
  id?: string;
  number: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Favorite {
  id?: string;
  userId: string;
  productName: string;
  favoritedAt?: Date;
}

export interface Order {
  id?: string;
  tableNumber: number;
  userId: string;
  createdAt?: Date;
}

export interface OrderToProduct {
  id?: string;
  productId: string;
  orderId: string;
  quantity: number;
  createdAt?: Date;
}



/*
 ? Style Interfaces
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "disable" | "cancel";
  size?: "small" | "large" | "x-large"
}

export interface StyledButtonProps {
  theme: Theme;
  variant?: "disable" | "cancel";
  size?: "small" | "large" | "x-large";
}

export interface CheckoutCardProps {
  product: Product;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "small" | "large";
}

export interface StyledInputProps {
  inputSize?: "small" | "large";
}

export interface MenuProps {
  path: "home" | "settings";
}

export interface MenuItemProps {
  logout?: boolean;
  active?: boolean;
}

export interface MenuItemButtonProps {
  active?: boolean;
}

export interface ProductCardProps {
  product: Product;
}

export interface CardContainerProps {
  theme: Theme;
  active?: boolean;
}

export interface ProductsListProps {
  list: Product[];
  isFavoritesList: boolean;
  handleGetFavorites: () => void;
}

export interface SettingsProductCardProps {
  product: Product;
}

export interface HomeProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

export interface CategoriesNavigationButtonProps {
  active?: boolean;
}

export interface LoginProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

export interface SettingsProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

export interface ActiveButtonProps {
  active?: boolean;
}

/*
 * New Interfaces
*/

export interface StyledInputProps {
  inputSize?: "small" | "large";
}

export interface CategoryModalProps {
  handleOpenModal: () => void;
  category?: Category;
  setCategory: Dispatch<SetStateAction<Category | undefined>>;
}

export interface CategoryData {
  name: string;
}

export interface DeleteCategoryModalProps {
  categoryId?: string;
  handleOpenDeleteModal: () => void;
  setCategory: Dispatch<SetStateAction<Category | undefined>>;
}

export interface DeleteProductModalProps {
  productId?: string;
  handleOpenDeleteModal: () => void;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
}

export interface DeleteTableModalProps {
  tableId?: string;
  handleOpenDeleteModal: () => void;
  setTable: Dispatch<SetStateAction<Table | undefined>>;
}

export interface ProductCardProps {
  product: Product;
  isFavoritesList: boolean;
  handleGetFavorites: () => void;
}

export interface ProductModalProsp {
  handleOpenModal: () => void;
  product?: Product;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
}

export interface NewProductData {
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  categoryId?: string;
}

export interface ActiveButtonProps {
  active?: boolean;
}

export interface SettingsMenuProps {
  path: "users" | "tables" | "categories" | "products";
}

export interface TableModalProps {
  handleOpenModal: () => void;
  table?: Table;
  setTable: Dispatch<SetStateAction<Table | undefined>>;
}

export interface TableData {
  number: number;
}

export interface SettingsProductCardProps {
  product: Product;
  handleOpenModal: () => void;
  handleOpenDeleteModal: () => void;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
}

export interface LoginData {
  email: string;
  password: string;
}