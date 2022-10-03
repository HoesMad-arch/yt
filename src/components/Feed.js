import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import {fetchFromAPI } from "../utils/FetchApi";
import Sidebar from "./SideBar";
import Videos from "./Videos";
import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://youtube-v31.p.rapidapi.com/search',
//   params: {
//     relatedToVideoId: '7ghhRHRP6t4',
//     part: 'id,snippet',
//     type: 'video',
//     maxResults: '50',
//   },
//   headers: {
//     'X-RapidAPI-Key': '0c83f0fe66msh5fcb17bf4bf7426p15df18jsne6804795da2d',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items ))
      // console.log(videos);
    }, [selectedCategory]);
  // useEffect(()=>{
  //   axios.request(options).then(function (response) {
  //     // console.log(response.data.items);
  //     setVideos(response.data.items)
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // },[selectedCategory])
   
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      
      <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
        Copyright © 2022 JiGODJi Media
      </Typography>
    </Box>

    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        {selectedCategory} <span style={{ color: "#d9ee13" }}>Videos</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  </Stack>
  )
}
// "#FC1503"
export default Feed