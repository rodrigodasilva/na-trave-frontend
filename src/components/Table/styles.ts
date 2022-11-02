import styled from "styled-components";

export const TableOverflow = styled.div`
  overflow-x: auto;
  padding: 1px; // Para resolver problema ao utilizar borda na tabela
`;

export const TableWrapper = styled.table`
  font-size: 14px;
  line-height: 143%;
  color: var(--gray-600);
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  th {
    font-weight: 600;
  }

  thead tr {
    border: none;
  }

  td,
  th {
    font-size: 14px;
    color: var(--gray-600);
    padding: 8px 8px;
  }

  tbody {
    box-shadow: 0 0 0 1px var(--gray-200);
    border-radius: var(--rounded-xs);
  }

  tbody tr:nth-child(2n) {
    background: var(--slate-100);
  }
`;
