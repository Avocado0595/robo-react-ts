import { Box, Typography, styled } from '@mui/material';
const MyHeader = styled(Typography)({
    fontFamily: 'Bigelow Rules, cursive',
    fontSize: '4rem',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '0',
    paddingTop: '10px'
})
function Header() {
    return (
        <Box sx={{ height: '100px' }}>
            <MyHeader variant="h1">ROBOTO REACT APP</MyHeader>
        </Box>
    );
}

export default Header;