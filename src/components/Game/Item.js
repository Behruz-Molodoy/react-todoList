import { Box, makeStyles, Typography } from '@material-ui/core'
import { ArrowDownward, ArrowUpward, BorderBottom } from '@material-ui/icons'
import React, { useCallback } from 'react'
const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 400,
    borderBottom: '5px solid teal'
  },
  itemBtn: {
    display: 'flex',
    margin: '0 15px',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%'
  },
  ArrowIcon: {
    fontSize: '2erm',
    margin: 10,
    cursor: 'pointer'
  },
  voteLevel: {
    fontSize: 20
  },
  itemText: {
    width: '75%',
    fontSize: '1.2rem',
    display: 'flex',
    justifyContent: 'center'
  },
  itemEmoji: {
    fontSize: '20px',
    width: 'max-content',
    borderRadius: '50%',
    boxShadow: '0 19px 38px rgba(0 , 0, 0, 0.3), 0 15px 12px rgba(0,0,0,.1)'
  }
}))
export default function Item({ votes, text, upVote, downVote }) {
  const classes = useStyles()
  const getEmoji = useCallback((votes) => {
    if(votes >= 9){
      return 'em em-rolling_on_the_floor_laughing'
    }
    else if(votes >= 6){
      return 'em em-laughing;'
    }
    else if(votes >= 3){
      return 'em em-slightly_smiling_face'
    }
    else if(votes >= 0){
      return 'em em-neatral_face'
    }else{
      return 'em em-angry'
    }
  }, [])
  return (
    <Box className={classes.item}>
      <Box className={classes.itemBtn}>
        <ArrowUpward className={classes.ArrowIcon} onClick={upVote} />
        <Typography className={classes.voteLevel}>{votes}</Typography>
        <ArrowDownward className={classes.ArrowIcon} onClick={downVote} />
      </Box>
      <Box className={classes.itemText}>
        {text}
      </Box>
      <Box className={classes.itemEmoji} >
        <i className={getEmoji(votes)}></i>
      </Box>
    </Box>
  )
}


