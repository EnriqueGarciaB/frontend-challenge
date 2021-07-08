import { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { GETCOLUMNS } from "../../getColumns";
import "../../index.scss";

export default function OffersTable({ offers, ...props }) {
    const data = useMemo(() => offers.data, [offers.data]);
    const columns = useMemo(() => GETCOLUMNS, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy,
    );

    return (
        <div className="tableContainer">
            <table {...getTableProps()} class="mainTable">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(clmn => (
                                <th
                                    {...clmn.getHeaderProps(
                                        clmn.getSortByToggleProps(),
                                    )}>
                                    {clmn.render("Title")}
                                    <span>
                                        {clmn.isSorted
                                            ? clmn.isSortedDesc
                                                ? " ↓"
                                                : " ↑"
                                            : ""}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
