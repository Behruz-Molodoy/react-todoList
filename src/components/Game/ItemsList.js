import { Box, makeStyles, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import Item from './Item'

const useStyles = makeStyles((theme) => ({
  ItemsLists: {
    display: 'flex',
    width: '80%',
    height: '80%'
  },
  ItemListsSidebar: {
    background: '#9575cd',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
    textAlign: 'center',
    boxShadow: '0 19px 38px rgba(0 , 0, 0, 0.3), 0 15px 12px rgba(0,0,0,.1)',
    zIndex: '2'
  },
  ItemListsTitle: {
    fontSize: '3rem',
    color: '#fff',
    fontWeight: 'bold',
    margin: 60,
  },
  ImgSidebar: {
    width: '50%',
    objectFit: 'cover',
    boxShadow: '0 19px 38px rgba(0 , 0, 0, 0.3), 0 15px 12px rgba(0,0,0,.1)',
    borderRadius: '50%',
  },
  ItemListsStiker: {
    minHeight: '90%',
    width: '70%',
    background: '#fff',
    alignItems: 'center',
    boxShadow: '0 19px 38px rgba(0 , 0, 0, 0.3), 0 15px 12px rgba(0,0,0,.1)',
    marginTop: '25px',
    overflow: 'auto'
  },
}))

export default function ItemsList() {
  const classes = useStyles()
  const [joke, setJoke] = useState(null)

  async function getEmoji(params) {
    let newEmoji = []
    for (let i = 0; i < 25; i++) {
      const response = await axios.get('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json'
        }
      })
      newEmoji.push({ id: i, text: response.data.joke, votes: 0 })
    }
    setJoke(newEmoji)
  }
  useEffect(() => {
    getEmoji()
  }, [])

  const handleVote = useCallback((id , offset)=>{
    const filterEmoji = joke.filter(item => item.id !== id)
    const emoj =joke.find(item => item.id === id)
    emoj.votes += offset
    filterEmoji.push(emoj)
    filterEmoji.sort((a, b) => b.votes - a.votes)
    setJoke((filterEmoji))
  },[joke , setJoke])

  if (joke) {
    return (
      <Box className={classes.ItemsLists}>
        <Box className={classes.ItemListsSidebar}>
          <Typography className={classes.ItemListsTitle}>
            Behruz
            <br />
            Bro
          </Typography>
          <img className={classes.ImgSidebar} src='https://media.istockphoto.com/photos/chinese-traditional-vases-on-the-table-picture-id657001598?s=612x612' />
        </Box>
        <Box className={classes.ItemListsStiker}>
          {joke.map(item => (
            <Item
              key={item.id}
              votes={item.votes}
              text={item.text}
              upVote={() => handleVote(item.id , 1)}
              downVote={() => handleVote(item.id , -1)}
              />
          ))}
        </Box>
      </Box>
    )
  } else {
    return (
      <div className="spinner-border text-warning d-flex m-auto mt-5" role="status">
        <span className="visually-hidden"></span>
      </div>
    )
  }
}
