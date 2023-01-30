import { Box } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import AdminCards from '../../Card/AdminCards'
import Cards from '../../Card/Cards'

const Wrapper = styled.div`
    width: 60%;
    padding-left: 20%;
`

function PlanPreview() {
    const [planFetch, setPlanFetch] = useState([]);

    useEffect(()=>{
        const fetchPlan = async ()=>{
            const res = await axios.get("/plans/getplans");
            setPlanFetch(res.data)
        }
        fetchPlan();
    },[])
    
  return (
    <Box bgcolor={'#360336'}>
        <Wrapper>
        {
            planFetch.map((plan)=>
            <AdminCards  key={plan._id} name={plan.name} amount={plan.amount} hour={plan.hour} 
            daily={plan.daily} cycle={plan.cycle} total={plan.totalprofit} 
            pic={plan.imgUrl} plan={plan}
            
            />
            )
        }
        </Wrapper>
    </Box>
  )
}

export default PlanPreview
