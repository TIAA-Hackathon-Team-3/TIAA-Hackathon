// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel'
import RadioGroup from '@mui/material/RadioGroup'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControlLabel from '@mui/material/FormControlLabel'
import axios from 'axios'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Birth Date' fullWidth {...props} />
})

const TabInfo = () => {
  const [data, setData] = useState({
    title: "",
    discription: "",
    image: "",
    category: ""
  })
  const [image, setImage] = useState("");
  const handleImageChange = async () => {
    const data = new FormData();
    data.append("file", data.image);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "dd9cmhunr");

    const res = await axios.post(`https://api.cloudinary.com/v1_1/dd9cmhunr/image/upload`, data);
    
    console.log(res);
  }
  
  const handaleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }
    const handleOnClick = async () => {
      await handleImageChange();
      debugger
      const createPost = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/createPost/${userId}`,
        data, {
        headers: {
          'x-access-token': `${token}`
        }
      })
      console.log(createPost);
    }

    return (
      <CardContent>
        <form>
          <Grid container spacing={7}>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Title'
                name="title"
                placeholder='Your title Is here'
                onChange={handaleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                name="discription"
                label='Description'
                minRows={9}
                onChange={handaleChange}
                placeholder='Your content Is here'
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select label='Category' name='category' >
                  <MenuItem value='Sports'>Sports</MenuItem>
                  <MenuItem value='Technology'>Technology</MenuItem>
                  <MenuItem value='Education'>Education</MenuItem>
                  <MenuItem value='Health'>Health</MenuItem>
                  <MenuItem value='Finance'>Finance</MenuItem>
                  <MenuItem value='Cooking'>Cooking</MenuItem>
                  <MenuItem value='Travel'>Travel</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                type="file"
                name='image'
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Grid>

            <Grid item xs={15}>
              <Button variant='contained' sx={{ marginRight: 3.5 }} onClick={handleOnClick}>
                Create Post
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    )

    }
    export default TabInfo
