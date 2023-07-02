import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CasinoIcon from "@mui/icons-material/Casino";
import DnsIcon from "@mui/icons-material/Dns";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import Paper from "@mui/material/Paper";

export const AppBottomBar: React.FC = () => {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef<HTMLDivElement>(null);

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />

            <Paper
                sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
                elevation={3}
            >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction
                        label="Игра"
                        icon={<CasinoIcon />}
                    />
                    <BottomNavigationAction
                        label="Выбор комнаты"
                        icon={<DnsIcon />}
                    />
                    <BottomNavigationAction
                        label="Баланс"
                        icon={<CurrencyRubleIcon />}
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    );
};
