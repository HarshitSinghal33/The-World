import React, { useEffect } from 'react'
import { TextField } from '@mui/material'
import { textFieldStyles } from '../utils/MUI_styles'
import { useAppContext } from '../Context/Context'

export default function Search() {
    const { search, setSearch, darkMode, setCurrentPage } = useAppContext();
    const handleSearch = ({target : {value}}) => {
        setSearch(value);
        setCurrentPage(1)
    }
    return (
        <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            onChange={handleSearch}
            value={search}
            sx={textFieldStyles(darkMode)}
        />
    )
}
