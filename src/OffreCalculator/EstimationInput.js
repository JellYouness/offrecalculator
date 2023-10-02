import { Box, FormLabel, InputAdornment, Paper, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import './style.css';

const EstimationInput = (props) => {
    const { setEstimation } = props;
    return (
        <Stack
            className="header"
            direction="row"
            alignItems="center"
            sx={{
                width: '31%',
                margin: '55px 0 65px 0',
                marginX: 'auto'
            }}
        >
            <FormLabel
                className="text"
                sx={{
                    marginRight: '10px',
                    fontSize: '25px'
                }}
            >
                Estimation:
            </FormLabel>
            <TextField
                // sx={{
                //     '& fieldset': { border: 'none' },
                //     '&:hover fieldset': { border: '1px solid grey' }
                // }}
                id="outlined-number"
                type="number"
                InputLabelProps={{
                    shrink: true
                }}
                InputProps={{
                    endAdornment: <InputAdornment position="start">DHS</InputAdornment>
                }}
                onChange={(e) => {
                    setEstimation(e.target.value);
                }}
            />
        </Stack>
    );
};

export default EstimationInput;
