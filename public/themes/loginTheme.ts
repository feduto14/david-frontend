import { createTheme } from '@mui/material/styles';

const loginTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#106BC8 !important',
                    color: 'white',
                    height: '56px',
                    borderRadius: '1.5',
                    borderColor: '#106BC8',
                    /*'&:hover': {
                        backgroundColor: '#5F9CD9',
                    }, */
                },
            },
        },
    },
});

export default loginTheme;