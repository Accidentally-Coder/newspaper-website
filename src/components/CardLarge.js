import React from 'react'
import { Typography } from '@mui/material';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';



const CardLarge = () => {
    return (
        <div>
            <Card sx={{ maxWidth: 800 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="540"
                        image={process.env.PUBLIC_URL + '/reptile.jpg'}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            <b>Lizard</b>
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

export default CardLarge
