import React, { Component, useMemo } from 'react';
import styles from './table.module.css';
import { useTable, useFilters, } from 'react-table';
// import TableCell from '@material-ui/core/TableCell';

export default function Table() {
    //header 
    const columns = useMemo(
        () => [
        {
        Header: 'Stock Details Table',
        columns: [
        {
        Header: 'Compnay NAME',
        accessor: 'cname',
        },
        {
        Header: 'SYMBOL',
        accessor: 'symbol',
        },
        {
        Header: 'MARCKET CAP',
        accessor: 'oprice',
        },
        {
        Header: 'Action',
        accessor: 'click-me-button',
        render: ({ row }) => (<button onClick={(e) => this.handleButtonClick(e, row)}>Click Me</button>)
        },
        {
        Header: 'CURRENT PRICE',
        accessor: 'cprice',
        },
        
        ],
        },
        
        ],
        []
       )

       //data
       const data = useMemo(() =>
       [
       {
       cname: '141 Captial lnc',
       symbol: 'oncp',
       oprice: '$145.4k',
       cprice: '$0.001 USD',
       },
       {
        cname: 'Cardlytics Inc',
        symbol: 'CDLX',
        oprice: '$1.8B',
        cprice: '$86 USD',
        },
        {
            cname: 'Brightcove Inc',
            symbol: 'BCOV',
            oprice: '$394M',
            cprice: '$10 USD',
            },
            {
            cname: '141 Captial lnc',
            symbol: 'oncp',
            oprice: '$145.4k',
            cprice: '$0.001 USD',
            },
            {
            cname: 'BigString Corp',
            symbol: 'BSGC',
            oprice: '$543K',
            cprice: '$0.003 USD',
            },
            {
            cname: 'Akamai Technologies Inc',
            symbol: 'AKAM',
            oprice: '$145.4K',
            cprice: '$106 USD',
            },
       ],
       []
      )
    
      
    const {

        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
       } = useTable({ columns, data }, useFilters,)

       

       {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
            ...
        </tr>
        ))}	
    //search box
        function TextFilter({
            column: { filterValue, preFilteredRows, setFilter },
           }) {
            const count = preFilteredRows.length
           
            return (
              <input
                value={filterValue || ''}
                onChange={e => {
                  setFilter(e.target.value || undefined)
                }}
                placeholder={`Search by Company Name ${count} records...`}
              />
            )
           }
        
           const defaultColumn = useMemo(
            () => ({
              Filter: TextFilter,
            }),
            []
           )

        //    const {
        //     getTableProps,
        //     ...headerGroup} = useTable(
        //     {
        //       columns,
        //       data,
        //       defaultColumn,
        //     },
        //     useFilters,
        //    )

      
          
	return (
		<>
        

        <div className={styles.table}>
        	<table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                    <tr  {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                        <th className={styles.thr}  {...column.getHeaderProps()}>{column.render('Header')}
                        {/* <div>{column.canFilter ? column.render('Filter') : null}</div> */}
                        </th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody className={styles.tbody} {...getTableBodyProps()}>
                    {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr  {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td className={styles.thd} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                        </tr>
                    )
                    })}
                </tbody>
                </table>
            </div>
		</>
	);
}
