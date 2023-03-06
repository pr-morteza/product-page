import { Box, Button, ButtonGroup, Container, Grid, Typography } from "@mui/material";
import ResponsiveAppBar from "./appBar";
import StandardImageList from "./imageList";
import plusIcon from '../public/images/icon-plus.svg'
import minusIcon from '../public/images/icon-minus.svg'
import Image from "next/image";
import { useContext, useState } from "react";
import Context from "@/context/context";
import iconCart from '../public/images/icon-cart.svg'
import TransitionsModal from "./modal";


export default function MainLayout(){
    const [count, setCount] = useState(1);
    const {setBadgeContent, setCart} = useContext(Context)
    const product = {img: '/images/image-product-1-thumbnail.jpg', title: 'Fall Limited Edition Sneakers', discount: 50, price:125.00, prevPrice:250.00}

    const orange = 'hsl(26, 100%, 55%)'

    return(
        <Container >
            <Grid container direction='column' sx={{minHeight:'100vh'}}>
                <ResponsiveAppBar/>
                <Grid sx={{ flexGrow: 1 }} justifyContent={{md:'space-evenly'}} direction={{md:'row', xs:'column'}} container item alignItems='center'>
                    {/* <Grid container > */}
                        <Grid  md={4} item> 
                            <StandardImageList/>
                        </Grid>
                        <Grid md={4} xs paddingBottom={{sm:0,xs:2}} item container direction='column' justifyContent='center'>
                            {/* <Grid sm={9} container item> */}
                                <Typography color={orange} variant="subtitle2" fontWeight={700}>SNEAKERS COMPANY</Typography>
                                <Typography marginY={2} fontWeight={700} variant="h4" component='h4'>{product.title}</Typography>
                                <Typography textAlign='justify' color='GrayText' variant="body1">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</Typography>
                                <Grid marginY={2} container direction={{sm:'column', xs:'row'}} justifyContent='space-between' alignItems={{sm:'normal', xs:'center'}}>
                                    <Box>
                                        <Grid item container alignItems='center'>
                                            <Typography fontWeight={700} variant="h5" className="m-0">${product.price}</Typography>
                                            <Typography fontWeight={700} color={orange} bgcolor='hsl(25, 100%, 94%)' className="rounded px-1 ms-2">{product.discount}%</Typography>
                                        </Grid>
                                    </Box>
                                    <Typography fontWeight={700} sx={{textDecoration: 'line-through'}} variant="body2" className="text-secondary">${product.prevPrice}</Typography>
                                </Grid>
                                <Grid container direction={{md:'row', xs:'column'}}>
                                    <Grid marginBottom={{md:0,xs:1}} item>
                                        <ButtonGroup fullWidth className="border border-0 bg-light" size='large' variant="text">
                                            <Button
                                                aria-label="reduce"
                                                onClick={() => {
                                                    setCount(Math.max(count - 1, 0));
                                                }}
                                            >
                                                <Image src={minusIcon}/>
                                            </Button>
                                            <Button sx={{fontWeight:700}} className='text-dark'>{count}</Button>
                                            <Button
                                                aria-label="increase"
                                                onClick={() => {
                                                    setCount(count + 1);
                                                }}
                                            >
                                                <Image src={plusIcon}/>
                                            </Button>
                                        </ButtonGroup>
                                    </Grid>
                                    <Grid xs item paddingLeft={{md:1}}>
                                        <Button size="large" onClick={()=>{setBadgeContent(count);setCart(product)}} variant="contained" fullWidth sx={{fontWeight:700, backgroundColor: orange,'&:hover':{bgcolor:'hsl(26, 100%, 70%)'}}} startIcon={<Image style={{filter: 'brightness(500%)'}} src={iconCart}/>}>Add to cart</Button>
                                    </Grid>                             
                                {/* </Grid> */}
                            </Grid>
                        {/* </Grid> */}
                    </Grid>
                </Grid>
            </Grid>
            <TransitionsModal/>
        </Container>
    )
}