import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import * as yup from "yup"
import { MessageError, ModalOverlay } from "../../assets/styles/globalStyles"
import { useTables } from "../../contexts/tables"
import { TableData, TableModalProps } from "../../interfaces"
import { api } from "../../services"
import Button from "../Button"
import { StyledInput } from "../Input/styles"
import { ModalContainer } from "./styles"

const tableSchema = yup.object().shape({
  number: yup.number().required("Must inform table number")
})

const TableModal = ({ handleOpenModal, table, setTable }: TableModalProps) => {
  const { handleGetTables } = useTables();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TableData>({
    resolver: yupResolver(tableSchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewTable = (data: TableData) => {
    api
      .post("/tables", data, headers)
      .then(() => {
        toast.success("Table created!")
        handleGetTables();
        handleOpenModal();
      })
      .catch(() => {
        toast.error("Error")
      });
  };

  const handleUpdateTable = (data: TableData) => {
    api 
      .patch(`/tables/${table?.id}`, data, headers)
      .then(() => {
        toast.success("Table updated")
        handleGetTables();
        handleOpenModal();
      })
      .catch(() => {
        toast.error("Error")
      });
  };

  return (
    <ModalOverlay>
      <ModalContainer
        onSubmit={handleSubmit(table ? handleUpdateTable : handleNewTable)}
      >
        <h2>{table ? "Edit Table" : "Create new Table"}</h2>
        <StyledInput
          placeholder="Table number"
          {...register("number")}
          defaultValue={table ? table.number : ""}
          type="number"
          min="1"
        />
        <MessageError>{errors.number?.message}</MessageError>
        <div>
          <Button
            text="Cancel"
            variant="cancel"
            onClick={() => {
              setTable(undefined);
              handleOpenModal();
            }}
            size="small"
          />
          <Button text="Submit" type="submit" size="small" />
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default TableModal;