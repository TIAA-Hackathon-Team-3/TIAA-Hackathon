// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'
import CreateIcon from 'mdi-material-ui/Pen';

// ** Demo Tabs Imports
import TabInfo from 'src/views/account-settings/TabInfo'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import { blue, red } from '@mui/material/colors'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const AccountSettings = () => {
  // ** State
  const [value, setValue] = useState('account')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <Tab
          value='Create Post'
          label={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CreateIcon />
              <TabName>Create Post</TabName>
            </Box>
          }
        />
        <TabInfo />
      </TabContext>
    </Card>
  )
}

export default AccountSettings