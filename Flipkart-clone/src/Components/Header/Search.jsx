import { InputBase,Box, styled, List, ListItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// overwriting
const SearchContainer = styled(Box)`
background:#fff;
width:35%;
border-radius:2px;
margin-left:10px;
display:flex
`
const InputSearchBase = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`
const SearchIconWrapper = styled(Box)`
color:blue;
padding:3px;
dispaly:flex;
`

const ListWrapper = styled(List)`
position:absolute;
background:#ffffff;
color:#000;
margin-top:36px
`
const Search = () => {
    const [text,setText] = useState('');
    const {products} = useSelector(state=>state.getProducts);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts())

    },[dispatch])
    const getText = (text)=>{
        setText(text);
    }
    return (
        <SearchContainer>
            <InputSearchBase
            placeholder='Search for Products,brands'
            onChange={(e)=>getText(e.target.value)}
            value={text}
            />
            <SearchIconWrapper><SearchIcon/></SearchIconWrapper>
            {
                text&&
                <ListWrapper>
                    {
                        products.filter(product=> product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>{
                            
                            return(<ListItem>
                                <Link 
                                onClick={()=>setText('')}
                                to={`/product/${product.id}`}
                                style={{textDecoration:'none',color:'inherit'}}
                                >
                                {product.title.longTitle}
                                </Link>
                            </ListItem>)
                        })
                    }
                </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search
