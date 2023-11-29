import { AppBar, Toolbar, Typography } from "@mui/material";
import SwitchTheme from "../../features/catalog/SwitchTheme";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange}: Props) {
    return (
        <AppBar position='static' sx={{mb:4}}>
            <Toolbar>
                <Typography variant='h6'>React Store</Typography>
                <SwitchTheme darkMode={darkMode} handleThemeChange={handleThemeChange}/>
            </Toolbar>
        </AppBar>
    )
}