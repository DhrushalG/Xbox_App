import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';

const Tab = (props) => {
    const { tabsList, currentTab, setCurrentTab } = props;

    const selectedTab = (choice) => {
        if (choice === currentTab) {
            return "selectedTab";
        } else {
            return "unselectedTab";
        }
    }

    const setSelectedTab = (choice) => {
        setCurrentTab(choice);
    }

    // MUI PAGE THEME
    const theme = createTheme({
        palette: {
            primary: {
                light: '#6d6d6d',
                main: '#424242',
                dark: '#1b1b1b',
                contrastText: '#ffffff',
            },
            secondary: {
                light: '#9cff57',
                main: '#64dd17',
                dark: '#1faa00',
                contrastText: '#000000',
            },
        },
    });

    return (

        <ThemeProvider theme={theme}>
            {
                tabsList.map((tab, choice) => (
                    <div className={`${selectedTab(choice)}`} onClick={(e) => setSelectedTab(choice)}>
                        <Button sx={{ color: 'secondary.main' }}>
                        {tab.title}
                        </Button>
                    </div>
                ))
            }
        </ThemeProvider>

    )
}

export default Tab;