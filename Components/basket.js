import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Badge, Grid, IconButton, Popover } from '@mui/material';
import Image from 'next/image';
import iconCart from '../public/images/icon-cart.svg'
import Context from '@/context/context';
import icondelt from '../public/images/icon-delete.svg'

export default function BasicCard() {
    const {badgeContent, setBadgeContent, setCart, cart} = useContext(Context)
    const [anchorEl, setAnchorEl] = useState(null);
    const orange = 'hsl(26, 100%, 55%)'

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const delt=()=>{
        setCart(null)
        setBadgeContent(0)
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  return (
    <div>
        <IconButton className='me-2' aria-describedby={id} onClick={handleClick}>
            <Badge sx={{'& .MuiBadge-badge':{backgroundColor:'hsl(26, 100%, 55%)',color:'white'}}} badgeContent={badgeContent}>
                <Image src={iconCart}/>
            </Badge>
        </IconButton>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose} 
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            className='mt-5'
        >
            <Grid width={{sm:'22rem',xs:'90vw'}}>
                <Card sx={{width:'100%'}}>
                    <CardContent >
                        <Typography paddingBottom={2} className='border-bottom border-secondary' fontWeight={700} gutterBottom>
                            Cart
                        </Typography>
                        {cart ?
                        <Grid paddingTop={2} container alignItems='center' justifyContent='space-between'> 
                            <Box>                        
                                <Image className='rounded' width={50} height={50} src={cart.img}/>
                            </Box>
                            <Box color='GrayText'>
                                <Typography>{cart.title}</Typography>
                                <Typography component='span'>${cart.price} x {badgeContent} <Typography color='black' fontWeight={700} component='span'>${cart.price*badgeContent}</Typography></Typography>
                            </Box>
                            <Box>
                                <Image onClick={()=>delt()} style={{cursor:'pointer'}} src={icondelt}/>
                            </Box>
                        </Grid>: 
                        <Grid  container paddingTop={2} alignItems='center' justifyContent='center'>
                            <Typography>Card is empty</Typography>
                        </Grid>
                        
                        }
                    </CardContent>
                    {cart && 
                    <CardActions>
                        <Button fullWidth variant="contained" sx={{fontWeight:700, backgroundColor: orange,'&:hover':{bgcolor:'hsl(26, 100%, 70%)'}}}>Checkout</Button>
                    </CardActions>}
                </Card>
            </Grid>
        </Popover>
    </div>
  );
}
