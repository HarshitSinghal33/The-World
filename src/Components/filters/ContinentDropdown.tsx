import { useAppContext } from '../../Context/Context';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { selectFieldStyles } from '../../utils/MUI_styles';
import { SelectChangeEvent } from '@mui/material/Select';
type Regions = 'All' | 'Asia' | 'Africa' | 'North America' | 'South America' | 'Australia' | 'Europe' | 'Antarctica';

const regions: Regions[] = [
    'All', 'Asia', 'Africa', 'North America', 'South America', 'Australia', 'Europe', 'Antarctica'
];
export default function ContinentDropdown() {
    const { continent, setContinent, darkMode, setCurrentPage } = useAppContext()
    const handleContinentChange = (event : SelectChangeEvent<string>) => {
        setContinent(event.target.value)
        setCurrentPage(1)
    }
    return (
        <FormControl sx={{ width: "90px", minWidth: "60px" }} >
            <InputLabel
                sx={{ color: `${darkMode ? 'white' : 'black'}` }}
                id="demo-simple-select-label"
            >Continents</InputLabel>
            <Select
                sx={selectFieldStyles(darkMode)}
                className='dark:text-white'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={continent}
                label="Continents"
                onChange={handleContinentChange}
            >
                {regions.map(val => (
                    <MenuItem key={val} value={val === 'Australia' ? 'Oceania' : val} >{val}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
