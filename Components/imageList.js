import React, { useContext, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import { Box, Hidden, IconButton } from '@mui/material';
import style from './layout.module.css';
import nextIcon from '../public/images/icon-next.svg'
import prevIcon from '../public/images/icon-previous.svg'
import Context from '@/context/context';

export default function StandardImageList({modal}) {
    const {handleOpen} = useContext(Context)
    const [show, setShow] = useState(itemData[0])
    const next = (x)=>{
      let index= x.id
      index<=2 ? index++ : index=0
      return setShow(itemData[index])
    }
    const prev = (x)=>{
      let index= x.id
      index>=1 ? index-- : index=3
      return setShow(itemData[index])
    }
    const hideStyle=modal ? {mdUp: false, mdDown:false} :{mdUp: true, mdDown:true}
  return (
    <>
    <Box marginBottom={2} position='relative'>
      <Hidden mdUp={hideStyle.mdUp}>
        <IconButton onClick={()=>next(show)} className='bg-light rounded-circle' style={{position:'absolute', right:'5%', top:'50%', width:'2rem', height:'2rem'}}>
          <Image  src={nextIcon}/>
        </IconButton>
        <IconButton onClick={()=>prev(show)} className='bg-light rounded-circle' style={{position:'absolute', left:'5%', top:'50%', width:'2rem', height:'2rem'}}>
          <Image  src={prevIcon}/>
        </IconButton>
      </Hidden>

      <Hidden mdDown>
        <Image onClick={()=>handleOpen()} className='rounded' height={500} width={500} style={{cursor:'pointer', width:'100%', height:'auto', objectFit:'contain'}} src={show.img2}/>
      </Hidden>
      <Hidden mdUp>
        <Image className='rounded' height={500} width={500} style={{width:'100%', height:'auto', objectFit:'contain'}} src={show.img2}/>
      </Hidden>
    </Box>
    <Hidden mdDown={hideStyle.mdDown}>
      <ImageList cols={4} gap={20}>
        {itemData.map((item,index) => (
          <ImageListItem key={item.img}
          className={`rounded-3`}
          sx={[
            {
              '&:hover': {
                opacity:0.6,
              },
            },
            show===item && {
              border:'0.2rem solid hsl(26, 100%, 55%)' ,
            },         
          ]}
            onClick={()=>setShow(item)}>
            <Image
              height={1000}
              width={1000}
              style={{zIndex:-1, cursor:'pointer', width:'100%', height:'auto', objectFit:'contain'}}
              src={item.img}
              alt='product'
              loading="lazy"
              className={`rounded-1 ${show===item && style.image}`}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Hidden>
    </>
  );
}

const itemData = [
  {
    img: '/images/image-product-1-thumbnail.jpg',
    img2:'/images/image-product-1.jpg',
    id:0
  },
  {
    img: '/images/image-product-2-thumbnail.jpg',
    img2:'/images/image-product-2.jpg',
    id:1
  },
  {
    img: '/images/image-product-3-thumbnail.jpg',
    img2:'/images/image-product-3.jpg',
    id:2
  },
  {
    img: '/images/image-product-4-thumbnail.jpg',
    img2:'/images/image-product-4.jpg',
    id:3
  },
  
];
