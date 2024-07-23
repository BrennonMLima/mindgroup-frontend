import { TableHeaderStyled } from './molecules.styles';
import Th from '../atoms/table/th';
import Tr from '../atoms/table/tr';

const TableHeader = () => {
  return (
    <TableHeaderStyled className='table-header'>
      <Tr>
        <Th width="40%">Descrição</Th>
        <Th width="15%">Valor</Th>
        <Th width="15%">Tipo</Th>
        <Th width="15%">Categoria</Th>
        <Th width="15%">Data</Th>
      </Tr>
    </TableHeaderStyled>
  );
};

export default TableHeader;
