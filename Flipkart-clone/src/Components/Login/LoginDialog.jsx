import React, { useState,useContext } from 'react'
import { Button, Dialog, TextField, Box, Typography, styled } from '@mui/material'
import {authenticateSignup,authenticateLogin} from '../../Service/api.js'
import {DataContext} from '../../context/DataProvider'

//overwriting
const BoxComp = styled(Box)`
height:70vh;
width:90vh;
`
const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png
) center 85% no-repeat;
height:83%;
width:30%;
padding:45px 30px;
&>h5,&>p{
    color:#ffffff;
    font-weight:600,
}
`
const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 30px;
flex:1;
&>div, &>button,&>p{
    margin-top:20px;
}
`;
const LoginButton = styled(Button)`
text-transform:none;
background:#fb641b;
color:#fff;
height:48px;
border-radus:2px;
`;
const RequestButton = styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
border-radus:2px;
box-shadow:0 2px 4px 0 rgb( 0 0 0/20%);
`;
const TextTypo = styled(Typography)`
font-size:12px;
color:#878787;
`;

const CreateAccount = styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer;
`;

const accountInitialValue = {
    login: {
        view: 'login',
        heading:'login',
        subHeading:'fjsadklfjljfajsf fjsjf klasfj afj'
    },
    signup: {
        view: 'signup',
        heading:'Looks like you are new here',
        subHeading:'sign up with your moblie number'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email:'',
    password: '',
    phone:'',

}

const loginInitialValues = {
    username:'',
    password:''
}
const LoginDialog = (props) => {

    const [account, toggleAccount] = useState(accountInitialValue.login);
    const [signup,setSignup] = useState(signupInitialValues);
    const [login,setLogin] = useState(loginInitialValues);
    const [error,setError] = useState(false);
    const {setAccount} = useContext(DataContext);
    const handleClose = () => {
        props.setOpen(false);
        toggleAccount(accountInitialValue.login);
        setError(false);
    }
    const toggleSignup = ()=>{
        toggleAccount(accountInitialValue.signup);
    }

    const onInputChange = (e)=>{
        // console.log(e.target.value);
        setSignup({...signup,[e.target.name]:e.target.value});
        // console.log(signup);
    }
    const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }
    const signUpUser = async()=>{
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }
    const loginUser = async()=>{
        let response = await authenticateLogin(login);
        console.log(response);
        if(response.status === 200){
            handleClose();
            setAccount(response.data.data.firstname);
        }
        else{
            setError(true);
        }
    }
    return (
        <Dialog PaperProps={{ sx: { maxWidth: 'unset' } }} onClose={handleClose} open={props.open}>
            <BoxComp>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }} >{account.subHeading}</Typography>
                    </Image>
                    {account.view === 'login' ?
                        <Wrapper>
                            <TextField onChange={(e)=>onValueChange(e)} name='username' variant='standard' label='Enter Username' />
                            {error &&
                            <Typography style={{color:'#ff6161',fontSize:10,fontWeight:600}}>Please enter valid username OR password</Typography>}
                            <TextField onChange={(e)=>onValueChange(e)} name='password'variant='standard' label='Enter Password' />
                            <TextTypo>by cnfjdaslfl kdlfjlasdfjdsklfj fjasdfjkl asdfjdkdfj aksdjflka flkjd </TextTypo>
                            <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <RequestButton>Request OTP</RequestButton>
                            <CreateAccount onClick={() => toggleSignup()}>New to flipkart?Create and account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField onChange={(e)=>onInputChange(e)} 
                            name='firstname'variant='standard' label='Enter First Name' />

                            <TextField onChange={(e)=>onInputChange(e)}  name='lastname'variant='standard' label='Enter Last Name' />

                            <TextField onChange={(e)=>onInputChange(e)}  name='username'variant='standard' label='Enter UserName' />

                            <TextField onChange={(e)=>onInputChange(e)}  name='email'variant='standard' label='Enter Email' />

                            <TextField onChange={(e)=>onInputChange(e)}  name='password'variant='standard' label='Enter Password' />

                            <TextField onChange={(e)=>onInputChange(e)}  name='phone'variant='standard' label='Enter Phone' />

                            <LoginButton onClick={()=>signUpUser()}>Continue</LoginButton>

                        </Wrapper>
                    }
                </Box>
            </BoxComp>

        </Dialog>
    )
}

export default LoginDialog
