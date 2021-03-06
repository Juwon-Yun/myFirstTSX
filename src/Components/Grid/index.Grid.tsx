import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridRowParams, GridValueGetterParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import Detail from '../../Pages/Detail/index.Detail'

import * as A from '../../Modules/Actions/Grid'
import { useHistory } from 'react-router-dom';
import { RootState } from '../../Modules';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
    sortable: false,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false,
    sortable: false,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: false,
    sortable: false,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: false,
    sortable: false,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 13, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 14, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 15, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 16, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Grid = () => {
  
  const dispatch = useDispatch()
  const history = useHistory()
  const state = useSelector( (state:RootState) => state.grid)

  // click row and set Reducer
  const consoleView = (data: GridRowParams)  => { 
    dispatch(A.setDetailId(data.row.id))

    dispatch(A.setDetail(data.row))

    console.log(state.id)
    
    // useEffect(() => {
      
    // }, [state.id])
    

    // history.push(`/detail/:${state.id}`)
    history.push("/detail")
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        onRowClick={consoleView}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
        // disableSelectionOnClick  
      />
    </div>
  );
}

export default Grid