import Button from '@mui/material/Button';

export default function MyButton() {
  return (
    <Button 
      variant="outlined" 
      sx={{ backgroundColor: '#010D26', '&:hover': { backgroundColor: '#010D26' } }}
    >
      Fale comigo
    </Button>
  );
}
