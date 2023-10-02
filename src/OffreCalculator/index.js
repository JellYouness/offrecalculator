import { Button, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './style.css';
import EstimationInput from './EstimationInput';
import OffreInput from './OffreInput';
import OffreList from './OffreList';
import { nanoid } from 'nanoid';
import OffreEdit from './OffreEdit';

const OffreCalculator = () => {
    const [estimation, setEstimation] = useState(NaN);
    const [offres, setOffres] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [data, setData] = React.useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickOpenEdit = (id) => {
        setData(id);
        setOpenEdit(true);
    };

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('offres'));
        if (storedData) {
            setOffres(storedData);
        }
    }, [refresh]);

    const addOffre = (nom, montant) => {
        const updatedData = [...offres, { id: nanoid(), nom: nom, montant: parseFloat(montant) }];
        localStorage.setItem('offres', JSON.stringify(updatedData));
        setRefresh(!refresh);
    };

    const editOffre = (id, nom, montant) => {
        const updatedData = offres.map((offre) => {
            if (offre.id === id) {
                return { ...offre, nom: nom, montant: parseFloat(montant) };
            } else {
                return offre;
            }
        });
        setOffres(updatedData);
        localStorage.setItem('offres', JSON.stringify(updatedData));
        setRefresh(!refresh);
    };

    const deleteOffre = (id) => {
        const updatedData = offres.filter((offre) => offre.id !== id);
        setOffres(updatedData);
        localStorage.setItem('offres', JSON.stringify(updatedData));
        setRefresh(!refresh);
    };

    const resetOffres = () => {
        localStorage.removeItem('offres');
        setOffres([]);
        setEstimation(NaN);
        setRefresh(!refresh);
    };

    return (
        <>
            <EstimationInput setEstimation={setEstimation} />
            <Paper
                className="paper"
                elevation={3}
                sx={{
                    width: '55%',
                    marginX: 'auto',
                    height: '100%',
                    minHeight: '70vh',
                    padding: '15px',
                    position: 'relative'
                }}
            >
                <Button
                    sx={{
                        position: 'absolute',
                        top: -40,
                        left: 0
                    }}
                    variant="contained"
                    color="info"
                    onClick={resetOffres}
                >
                    Reset
                </Button>
                <Button
                    sx={{
                        position: 'absolute',
                        top: -40,
                        right: 0
                    }}
                    variant="contained"
                    color="success"
                    onClick={handleClickOpen}
                >
                    Ajouter
                </Button>
                <OffreInput addOffre={addOffre} open={open} setOpen={setOpen} />
                {data ? <OffreEdit editOffre={editOffre} openEdit={openEdit} setOpenEdit={setOpenEdit} data={data} /> : null}
                <OffreList
                    estimation={estimation}
                    offres={offres}
                    editOffre={editOffre}
                    deleteOffre={deleteOffre}
                    handleClickOpenEdit={handleClickOpenEdit}
                />
            </Paper>
        </>
    );
};

export default OffreCalculator;
