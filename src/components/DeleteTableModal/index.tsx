import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/globalStyles";
import Button from "../Button";
import { useTables } from "../../contexts/tables";
import { DeleteTableModalProps } from "../../interfaces";
import { api } from "../../services";
import { DeleteModalContainer } from "./styles";

const DeleteTableModal = ({
  tableId,
  handleOpenDeleteModal,
  setTable,
}: DeleteTableModalProps) => {
  const { handleGetTables } = useTables();

  const handleDeleteTable = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.delete(`/tables/${tableId}`, headers).then(() => {
      toast.success("Mesa excluida com sucesso!");
      handleGetTables();
      setTable(undefined);
      handleOpenDeleteModal();
    });
  };

  return (
    <ModalOverlay>
      <DeleteModalContainer>
        <h2>Delete Table</h2>
        <div>
          <Button
            onClick={() => {
              setTable(undefined);
              handleOpenDeleteModal();
            }}
            text="Cancel"
            variant="cancel"
          />
          <Button text="Delete" onClick={handleDeleteTable} />
        </div>
      </DeleteModalContainer>
    </ModalOverlay>
  );
};

export default DeleteTableModal;
