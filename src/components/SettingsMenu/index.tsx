import { useNavigate } from "react-router-dom"
import { MarketIcon, PromotionIcon, InfoIcon } from "../../assets/icons";
import { SettingsMenuProps } from "../../interfaces"
import * as Styled from "./styles"

const SettingsMenu = ({ path }: SettingsMenuProps) => {
  const navigate = useNavigate();
  return (
    <Styled.SettingsNavigationContainer>
      <h2>Settings</h2>
      <Styled.SettingsNavigationButtonsList>
        <Styled.SettingsNavigationButtonContainer
          active={path === "tables"}
          onClick={() => navigate("/settings/tables")}
        >
          <Styled.SettingsNavigationButtonSelected active={path === "tables"}>
            <MarketIcon />
            <h2>Customize your Table</h2>
          </Styled.SettingsNavigationButtonSelected>
        </Styled.SettingsNavigationButtonContainer>
        <Styled.SettingsNavigationButtonContainer
          active={path === "products"}
          onClick={() => navigate("/settings/products")}
        >
          <Styled.SettingsNavigationButtonSelected active={path === "products"}>
            <PromotionIcon />
            <h2>Manage Products</h2>
          </Styled.SettingsNavigationButtonSelected>
        </Styled.SettingsNavigationButtonContainer>
        <Styled.SettingsNavigationButtonContainer
          active={path === "categories"}
          onClick={() => navigate("/settings/categories")}
        >
          <Styled.SettingsNavigationButtonSelected
            active={path === "categories"}
          >
            <PromotionIcon />
            <h2>Manage Categories</h2>
          </Styled.SettingsNavigationButtonSelected>
        </Styled.SettingsNavigationButtonContainer>
        <Styled.SettingsNavigationButtonContainer
          active={path === "users"}
          onClick={() => navigate("/settings/users")}
        >
          <Styled.SettingsNavigationButtonSelected active={path === "users"}>
            <InfoIcon />
            <h2>Manage Users</h2>
          </Styled.SettingsNavigationButtonSelected>
        </Styled.SettingsNavigationButtonContainer>
      </Styled.SettingsNavigationButtonsList>
    </Styled.SettingsNavigationContainer>
  )
};

export default SettingsMenu;