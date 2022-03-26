import React, { useContext } from 'react'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { GlobalContext } from '../context/GlobalState';

export const Balance = ({themeScreen}) => {
  console.log(themeScreen, "themeScreen")
  const { transactions } = useContext(GlobalContext);
  
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
  <Grid  container
    direction="column" >
     <Grid item xs={12} lg={12} md={12} sm={12}  >
     <Box fontSize={20} fontWeight={450}    >Your Balance</Box>
     </Grid>

     <Grid item xs={12} lg={12} md={12} sm={12}   >
     <Box fontWeight="fontWeightBold" fontSize={24}  >${total}</Box>
     </Grid>
  </Grid>
  )
}
