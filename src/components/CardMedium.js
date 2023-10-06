import React from 'react'
import { Typography } from '@mui/material';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';



const CardMedium = () => {
    return (
        <div>
            <Card sx={{ maxWidth: 500, marginBottom: '10px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={process.env.PUBLIC_URL + '/reptile.jpg'}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default CardMedium