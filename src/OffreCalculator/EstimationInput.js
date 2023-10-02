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
                padding: '55px 0 65px 0',
                marginX: 'auto'
            }}
        >
            <FormLabel
                className="text"
                sx={{
                    marginRight: '10px',
                    fontSize: '25px',
                    color: 'black'
                }}
            >
                Estimation:
            </FormLabel>
            <TextField
                sx={{
                    // '& fieldset': { border: 'none' },
                    // '&:hover fieldset': { border: '1px solid grey' }
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                    // border: '1px solid grey',
                    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
                }}
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
