import * as React from 'react';

//MUI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    Comp: React.ComponentType;
    //Comp: React.ComponentType<{someKey: string}>;
}

export default function BasicModal({open, setOpen, Comp } : Props) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <div>
      <Dialog
        fullScreen
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Comp/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
