import { Box, FormLabel, InputAdornment, Dialog, Stack, TextField, DialogContent, DialogActions, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './style.css';

const OffreEdit = (props) => {
    const { editOffre, openEdit, setOpenEdit, data } = props;
    const [nom, setNom] = useState(data.nom);
    const [montant, setMontant] = useState(data.montant);

    useEffect(() => {
        setMontant(data.montant);
        setNom(data.nom);
    }, [data, openEdit]);

    const handleClose = () => {
        setOpenEdit(false);
    };

    return (
        <Dialog open={openEdit} onClose={handleClose}>
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
                            type="text"
                            sx={{
                                marginRight: '10px',
                                fontSize: '25px'
                            }}
                            InputLabelProps={{
                                shrink: true
                            }}
                            onChange={(e) => setNom(e.target.value)}
                            defaultValue={data ? data.nom : null}
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
                            defaultValue={data ? data.montant : null}
                        />
                    </Stack>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => {
                        nom && montant ? editOffre(data.id, nom, montant) : handleClose();
                        console.log(data.id, nom, montant);
                        setMontant(null);
                        setNom(null);
                        handleClose();
                    }}
                    variant="contained"
                    autoFocus
                >
                    Modifier
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default OffreEdit;
