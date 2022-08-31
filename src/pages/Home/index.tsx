import { useEffect, useState } from "react"
import { Category, Favorite, Product, User } from "../../interfaces"
import { DateTime } from "luxon";
import * as Styled from "./style"
import Menu from "../../components/Menu";
import { SearchIcon } from "../../assets/icons";
import ProductsList from "../../components/ProductsList";
import OrderDetails from "../../components/OrderDetails";
import { useCategories } from "../../contexts/categories";
import { useProducts } from "../../contexts/products";
import { useTables } from "../../contexts/tables";
import { api } from "../../services";

const Home = () => {
  const { categories } = useCategories();
  const { products } = useProducts();
  const { tables } = useTables();
  
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0] || ({} as Category)
  );
  
  const [isFavoritesList, setIsFavoritesList] = useState<boolean>(false);
  const [userFavoritesList, setUserFavoritesList] = useState<Product[]>([]);
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  
  const filteredProducts: Product[] = products.filter(
    (element) => selectedCategory && element.categoryId === selectedCategory.id
  );

  const handleGetFavorites = async () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const user: User = JSON.parse(localStorage.getItem("user") || "")

    const res = await api.get<Favorite[]>(
      `/favorites/user/${user?.id}`,
      headers
    );

    const favorites = res.data;

    const favoritesNames: string[] = favorites.map((elem) => elem.productName);

    const favoritesList: Product[] = products.filter((elem) => {
      return favoritesNames.includes(elem.name);
    });

    setUserFavoritesList(favoritesList);
  };

  const actualDate = DateTime.now();
  const expelDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`
  
  useEffect(() => {
    handleGetFavorites();
  }, [products]);
  
  return (
    <Styled.HomeContainer>
      <Menu path="home" />
      <Styled.HomeContentContainer>
        <Styled.HomeContentHeader>
          <Styled.TitleContainer>
            <h1>Project Burger</h1>
            <p>{expelDate}</p>
          </Styled.TitleContainer>
          <Styled.SearchInputContainer>
            <SearchIcon />
            <input
              value={searchInputValue}
              onChange={(e) => setSearchInputValue(e.target.value)}
              placeholder="Search"
            />
          </Styled.SearchInputContainer>
        </Styled.HomeContentHeader>
        <section>
          <Styled.CategoriesNavigationBar>
            {categories.map((element) => {
              return (
                <Styled.CategoriesNavigationButton
                  active={element.name === selectedCategory.name}
                  onClick={() => {
                    setSelectedCategory(element);
                    setIsFavoritesList(false);
                  }}
                  key={element.id}
                >
                  {element.name}
                </Styled.CategoriesNavigationButton>
              );
            })}
            <Styled.CategoriesNavigationButton
              active={isFavoritesList}
              onClick={() => {
                setIsFavoritesList(true);
                setSelectedCategory({} as Category);
              }}
            >
              Favorites
            </Styled.CategoriesNavigationButton>
          </Styled.CategoriesNavigationBar>
          <Styled.ProductsHeaderContainer>
            <h2>Choose your Burger</h2>
            <Styled.TableSelect defaultValue="">
              <option value="" disabled>
                Choose your table
              </option>
              {tables.map((elem) => {
                return <option value={elem.number}>{elem.number}</option>;
              })}
            </Styled.TableSelect>
          </Styled.ProductsHeaderContainer>
          <ProductsList
            isFavoritesList={isFavoritesList}
            handleGetFavorites={handleGetFavorites}
            list={
              isFavoritesList
                ? userFavoritesList
                : searchInputValue !== ""
                ? filteredProducts.filter((elem) =>
                    elem.name
                      .toLowerCase()
                      .includes(searchInputValue.toLowerCase())
                  )
                : filteredProducts
            }
          />
        </section>
      </Styled.HomeContentContainer>
      <OrderDetails />
    </Styled.HomeContainer>
  );
};

export default Home;
