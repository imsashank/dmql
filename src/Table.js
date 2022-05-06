import React from "react";

export default function Table({ data }) {
    const mapDynamicColumns = () => {
       let columns = Object.keys(data.value.admins[0])
       console.log(columns);
        return columns.map(column => {
            return (
                <>
                <th>
                    {column}
                </th>
                &nbsp; &nbsp; &nbsp;
                </>
            )
        })
    };

    const mapDynamicRows = () => {
        let rows = Object.values(data.value.admins)
        let columns = Object.keys(data.value.admins[0])
        return rows.map(row => {
            return(
                <tr>
                    {
                        columns.map(column =>
                            {
                                return (
                                    <>
                                    <td>
                                        {row[column]} 
                                    </td>
                                    &nbsp;&nbsp;&nbsp;
                                    </>
                                )
                            }
                        )
                    }
                </tr>
            )
        })
    };



    return (
        <table>
            <thead>
                <tr>{mapDynamicColumns()}</tr>
            </thead>
            <tbody>
                {mapDynamicRows()}
            </tbody>
        </table>
    )
}