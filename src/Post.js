import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

function Post() {
  return (
    <div>
      <Button variant="contained" color="error"> Add New Post</Button>
     <Table>
<TableHead>
<TableRow>
<TableCell>Title</TableCell>
<TableCell>Description</TableCell>
<TableCell>Picture</TableCell>
<TableCell>Category</TableCell>
<TableCell>Date</TableCell>
</TableRow>
</TableHead>
<TableBody>
<TableCell>Comedy</TableCell>
<TableCell>my First Post</TableCell>
<TableCell>Picture</TableCell>
<TableCell>Category</TableCell>
<TableCell>24</TableCell>
</TableBody>
     </Table>
    </div>
  )
}

export default Post