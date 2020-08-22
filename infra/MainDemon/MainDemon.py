#!/usr/bin/python

from apiclient.discovery import build
from apiclient.errors import HttpError
from oauth2client.tools import argparser
import configparser
import MariaController
import datetime
import sys
import os.path


YOUTUBE_API_SERVICE_NAME = "youtube"
YOUTUBE_API_VERSION = "v3"
cateID = 1

def youtube_search(Max_Result, apiKey):
  youtube = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION,
    developerKey=apiKey)

  # Call the search.list method to retrieve results matching the specified
  # query term.
  videos_response = youtube.videos().list(
    part="snippet, statistics, player",
    chart='mostPopular',    
    maxResults=Max_Result,
    regionCode='KR',
    videoCategoryId=cateID
  ).execute()

  videos = []
  maria_controller = MariaController.MController(config['DB']['IP'], int(config['DB']['PORT']), config['DB']['ID'], config['DB']['PW'], config['DB']['DBNAME'])  
  NowDate = datetime.date.today() 
  NowDateTime = datetime.datetime.today() 

  for search_result in videos_response.get("items", []):
    videos.append(search_result["id"])      
    videos.append(search_result["snippet"]["channelId"])      
    videos.append(search_result["snippet"]["publishedAt"])          
    videos.append(search_result["snippet"]["title"])
    videos.append(search_result["snippet"]["description"])
    videos.append(search_result["snippet"]["channelTitle"])    
    videos.append(search_result["snippet"]["thumbnails"]["default"]["url"])
    videos.append(search_result["statistics"]["viewCount"])   
    try:
      videos.append(search_result["statistics"]["likeCount"])    
    except:
      videos.append(-1)  
    try:      
      videos.append(search_result["statistics"]["dislikeCount"])   
    except:
      videos.append(-1)   
    try:         
      videos.append(search_result["statistics"]["commentCount"])    
    except:
      videos.append(-1)         
    videos.append("https://www.youtube.com/watch?v=" + search_result["id"])    

    qry = 'select * from VideoData where VideoID = "{}" and ChannelID = "{}" and InsertDT = "{}"'.format(videos[0], videos[1], NowDate)
    sResult = maria_controller.select_query(qry)
    if len(sResult) == 0:
      qry = 'insert into VideoData values ("{}","{}","{}",{},"{}","{}","{}","{}","{}",{},{},{},{},{},"{}","{}", "{}")'.format(
        videos[0],  #VideoID
        videos[1],  #ChannelID
        NowDate,    #InsertDT        
        cateID,     #CategoryId    
        videos[2],  #PublishedAT
        videos[3].replace('"', '""',),  #Title
        videos[4].replace('"', '""',),  #Description
        videos[5],  #ChannelTitle
        videos[6],  #Thumbnails
        videos[7],  #ViewCount
        videos[7],  #ZeroViewCount
        0,          #DailyViewCount    
        videos[8],  #LikeCount
        videos[9],  #DislikeCount 
        videos[10], #CommentCount
        videos[11], #URL     
        NowDateTime) #UpdateDT    
    else:
      qry = 'update VideoData set Title="{}", Description="{}" ,ChannelTitle="{}",Thumbnails="{}",ViewCount={}, DailyViewCount={}, LikeCount={}, DislikeCount={}, CommentCount={}  where VideoID="{}" and ChannelID="{}" and InsertDT="{}" and CategoryId="{}"'.format(
        videos[3].replace('"', '""',),  #Title
        videos[4].replace('"', '""',),  #Description
        videos[5],  #ChannelTitle
        videos[6],  #Thumbnails
        videos[7],  #ViewCount
        int(videos[7]) - int(sResult[0][9]), #DailyViewCount
        videos[8],  #LikeCount
        videos[9],  #DislikeCount
        videos[10], #CommentCount    
        sResult[0][0],  #VideoID
        sResult[0][1],  #ChannelID
        sResult[0][2],  #InsetDT
        cateID          #CategoryId
      )
      # print(qry)
    maria_controller.execute_query(qry)        
    print(videos[3])    
    videos = [] 


if __name__ == "__main__":   

    config = configparser.ConfigParser()
    inipath = sys.path[0] + '\config.ini'
    config.read(inipath)           
    ResultCnt = config['YOUTUBE']['ResultCnt']

    try:
        youtube_search(ResultCnt, config['YOUTUBE']['ApiKey'])
    except HttpError as e:
        print ("An HTTP error %d occurred:\n%s" % (e.resp.status, e.content))