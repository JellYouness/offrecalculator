import { Box, FormLabel, InputAdornment, Dialog, Stack, TextField, DialogContent, DialogActions, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './style.css';

const OffreInput = (props) => {
    const { addOffre, open, setOpen, edit } = props;
    const [nom, setNom] = useState(null);
    const [montant, setMontant] = useState(null);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog disableRestoreFocus open={open} onClose={handleClose}>
            <DialogContent>
                <Stack direction="row" alignItems="center">
                    <Stack sx={{ width: '50%' }}>
                        <FormLabel
                            sx={{
                                color: '#262626'
                            }}
                        >
                            Nom :
                        </FormLabel>
                        <TextField
                            autoFocus
                            type="text"
                            sx={{
                                marginRight: '10px',
                                fontSize: '25px'
                            }}
                            InputLabelProps={{
                                shrink: true
                            }}
                            onChange={(e) => setNom(e.target.value)}
                        />
                    </Stack>
                    <Stack sx={{ width: '50%' }}>
                        <FormLabel
                            sx={{
                                color: '#262626'
                            }}
                        >
                            Montant :
                        </FormLabel>
                        <TextField
                            type="number"
                            InputLabelProps={{
                                shrink: true
                            }}
                            InputProps={{
                                endAdornment: <InputAdornment position="start">DHS</InputAdornment>
                            }}
                            onChange={(e) => setMontant(e.target.value)}
                        />
                    </Stack>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => {
                        nom && montant ? addOffre(nom, montant) : handleClose();
                        setMontant(null);
                        setNom(null);
                        handleClose();
                    }}
                    variant="contained"
                    type="submit"
                >
                    Ajouter
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default OffreInput;
