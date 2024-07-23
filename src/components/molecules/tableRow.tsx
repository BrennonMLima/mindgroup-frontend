import React from 'react';
import Td from '../atoms/table/td';
import Tr from '../atoms/table/tr';

interface TableRowProps {

}
  const TableRow: React.FC<TableRowProps> = ({ }) => {
  return (
    <Tr>
      <Td width="40%">Descrição</Td>
      <Td width="15%">Valor</Td>
      <Td width="15%" alignCenter={true}>Tipo</Td>
      <Td width="15%" alignCenter={true}>Categoria</Td>
      <Td width="15%" alignCenter={true}>Data</Td>
    </Tr>
  );
};

export default TableRow;
