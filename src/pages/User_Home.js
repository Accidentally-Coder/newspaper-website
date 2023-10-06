import React from 'react';
import Layout from '../components/Layout';
import Grid from '@mui/joy/Grid';
import { Divider, Typography } from '@mui/material';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import CardLarge from '../components/CardLarge';
import CardMedium from '../components/CardMedium';
import CardSmall from '../components/CardSmall';
import Paper from '@mui/material/Paper';


const User_Home = () => {

    return (
        <Layout>
            <div style={{ marginTop: '80px', marginRight: '50px', marginLeft: '50px' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {/* Left Column */}
                        <Grid item xs={8}>
                            <div style={{ padding: '2px' }}>
                                {/* Row 1 */}
                                <Grid container spacing={0}>
                                    <Grid item xs={6} sx={{ marginRight: '10px' }}>
                                        <CardLarge />
                                    </Grid>
                                    <Grid item xs={5} sx={{ marginLeft: '30px', marginRight: '-10px' }}>
                                        <CardMedium />
                                        <CardMedium />
                                        <CardMedium />
                                    </Grid>
                                </Grid>

                                <Divider />
                                {/* Row 2 */}
                                <Grid container spacing={0}>
                                    <Grid item xs={12}>
                                        <Paper elevation={1} style={{ padding: '16px', textAlign: 'center' }}>
                                            <Typography variant="h6">Advertisement</Typography>
                                            <img src='reptile.jpg' style={{ height: 200, width: 700 }} />
                                        </Paper>
                                    </Grid>
                                </Grid>

                                {/* Row 3 */}
                                <Grid container spacing={0}>
                                    <Grid item xs={12}>
                                        <div style={{ padding: '8px' }}>
                                        </div>
                                    </Grid>
                                </Grid>

                                {/* Nested rows and columns inside Row 3 */}
                                <Grid container spacing={0}>
                                    {/* First nested row */}
                                    <Grid container spacing={0} sx={{ marginBottom: '20px' }}>
                                        <Grid item xs={4}>
                                            <CardSmall />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <CardSmall />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <CardSmall />
                                        </Grid>
                                    </Grid>

                                    {/* Second nested row */}
                                    <Grid container spacing={0} sx={{ marginBottom: '20px' }}>
                                        <Grid item xs={4}>
                                            <CardSmall />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <CardSmall />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <CardSmall />
                                        </Grid>
                                    </Grid>

                                    {/* Third nested row */}
                                    <Grid container spacing={0} sx={{ marginBottom: '20px' }}>
                                        <Grid item xs={4}>
                                            <CardSmall />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <CardSmall />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <CardSmall />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider />

                                {/* Row 4 */}
                                <Grid container spacing={0}>
                                    <Grid item xs={12} sx={{ marginTop: 10 }}>
                                        <Paper elevation={1} style={{ padding: '16px', textAlign: 'center' }}>
                                            <Typography variant="h6">Advertisement</Typography>
                                            <img src='reptile.jpg' style={{ height: 200, width: 700 }} />
                                        </Paper>
                                    </Grid>
                                </Grid>


                                {/* Nested rows and columns inside Row 5 */}
                                <Grid container spacing={0}>
                                    {/* First nested row */}
                                    <Grid container spacing={0} sx={{ marginBottom: '20px' }}>
                                        <Grid item xs={4}>
                                            <CardSmall />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <CardSmall />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <CardSmall />
                                        </Grid>
                                    </Grid>

                                    {/* Second nested row */}
                                    <Grid container spacing={0} sx={{ marginBottom: '20px' }}>
                                        <Grid item xs={4}>
                                            <CardSmall />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <CardSmall />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <CardSmall />
                                        </Grid>
                                    </Grid>

                                    {/* Third nested row */}
                                    <Grid container spacing={0} sx={{ marginBottom: '20px' }}>
                                        <Grid item xs={4}>
                                            <CardSmall />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <CardSmall />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <CardSmall />
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </div>
                        </Grid>

                        {/* Vertical Divider */}
                        {/* <Grid item> */}
                        <Divider orientation="vertical" flexItem />
                        {/* <div className='dividerHere'>
                            Hello
                        </div> */}
                        {/* </Grid> */}

                        {/* Right Column */}
                        <Grid item xs={3}>
                            <div style={{ padding: '10px' }}>
                                {/* Row 1 */}
                                <Grid container spacing={0}>
                                    <Grid item xs={12} sx={{ marginBottom: 2 }}>
                                        <CardSmall />
                                    </Grid>
                                </Grid>

                                {/* Row 2 */}
                                <Grid container spacing={0}>
                                    <Grid item xs={12} sx={{ marginBottom: 2 }}>
                                        <CardSmall />
                                    </Grid>
                                </Grid>

                                {/* Row 3 */}
                                <Grid container spacing={0}>
                                    <Grid item xs={12} sx={{ marginBottom: 2 }}>
                                        <CardSmall />
                                    </Grid>
                                </Grid>

                                {/* Row 4 */}
                                <Grid container spacing={0}>
                                    <Grid item xs={12} sx={{ marginBottom: 2 }}>
                                        <CardSmall />
                                    </Grid>
                                </Grid>

                                {/* Row 5 */}
                                <Grid container spacing={0}>
                                    <Grid item xs={12} sx={{ marginBottom: 2 }}>
                                        <CardSmall />
                                    </Grid>
                                </Grid>

                            </div>
                        </Grid>
                    </Grid>

                </Box>
            </div >
        </Layout >
    )
}

export default User_Home