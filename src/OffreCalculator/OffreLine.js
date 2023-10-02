import { Box, Divider, FormLabel, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import './style.css';
import styled from 'styled-components';
import { Delete, Edit } from '@mui/icons-material';

const DeleteIcon = styled.a`
    &:hover {
    color: #C70000
    ;
`;
const EditIcon = styled.a`
    &:hover {
    color: #00a5ff
    ;
`;

const OffreLine = (props) => {
    const { estimation, data, handleClickOpenEdit, deleteOffre } = props;
    const percentage = 100 - (data.montant / estimation) * 100;
    return (
        <>
            <Stack direction="row" alignItems="center">
                <Box
                    className="percentage"
                    sx={{
                        padding: '15px 10px',
                        width: '60px',
                        backgroundColor:
                            percentage > 0
                                ? 'rgba(209, 232, 217, 0.61)'
                                : percentage === 0 || isNaN(estimation) || estimation === ''
                                ? 'rgb(245, 245, 245)'
                                : 'rgb(253, 232, 231)',
                        color: percentage > 0 ? '#00a854' : percentage === 0 ? 'rgb(140, 140, 140)' : '#f04134',
                        borderRadius: '100%',
                        border:
                            percentage > 0
                                ? '1px solid #3ec277'
                                : percentage === 0 || isNaN(estimation) || estimation === ''
                                ? '1px solid rgb(140, 140, 140)'
                                : '1px solid #f04134',
                        marginRight: '6%',
                        fontWeight: '600',
                        textAlign: 'center'
                    }}
                >
                    {isNaN(percentage) || isNaN(estimation) || estimation === '' ? '' : percentage.toFixed(2) + '%'}
                </Box>
                <Typography
                    className="text"
                    sx={{
                        marginRight: '10px',
                        fontSize: '25px',
                        width: '37%'
                    }}
                >
                    {data.nom} :
                </Typography>
                <Typography
                    className="text"
                    sx={{
                        marginRight: '10px',
                        fontSize: '25px',
                        fontWeight: '600',
                        width: '38%'
                    }}
                >
                    {data.montant} DHS
                </Typography>
                <Box>
                    <EditIcon>
                        <Edit className="text" style={{ cursor: 'pointer', fontSize: '25px' }} onClick={() => handleClickOpenEdit(data)} />
                    </EditIcon>
                    <DeleteIcon>
                        <Delete className="text" style={{ cursor: 'pointer', fontSize: '25px' }} onClick={() => deleteOffre(data.id)} />
                    </DeleteIcon>
                </Box>
            </Stack>
            <Divider sx={{ marginY: '10px' }} />
        </>
    );
};

export default OffreLine;
