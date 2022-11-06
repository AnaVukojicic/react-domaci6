import React from "react";
import './Table.css';

const Table=({headers=[],rows=[],onRowClick=()=>{}})=>{
    return(
        <div className="table-container">
            <table className="content-table">
                <thead>
                    <tr>
                        {Array.isArray(headers) && 
                            headers.map((header,index)=>
                                <th key={index}>{header['title']}</th>    
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(rows) &&
                        rows.map((row,index)=>
                            <tr key={index} onClick={()=>onRowClick(row)}>
                                {headers.map(header=>
                                    Object.keys(row).map((keyRow,index)=>
                                        header['property']===keyRow && 
                                        <td key={index}>
                                            {keyRow==='image' ? 
                                                <img src={row[keyRow]} alt=""/> 
                                                : 
                                                (keyRow==='actors' ? row[keyRow].join(',').replaceAll(',',', ') : row[keyRow])}
                                        </td>
                                    )
                                )}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;