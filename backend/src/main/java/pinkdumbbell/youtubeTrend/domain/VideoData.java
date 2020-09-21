package pinkdumbbell.youtubeTrend.domain;

import java.text.DateFormat;
import java.util.Date;

public class VideoData {
    private Long index;
    private String channelID;
    private String channelTitle;
    private int dailyViewCount;
    private String publishedAT;
    private String thumbnails;
    private String title;
    private String videoID;
    private Long viewCount;

    public Long getIndex() {
        return index;
    }

    public void setIndex(Long index) {
        this.index = index;
    }

    public String getChannelID() {
        return channelID;
    }

    public void setChannelID(String channelID) {
        this.channelID = channelID;
    }

    public String getChannelTitle() {
        return channelTitle;
    }

    public void setChannelTitle(String channelTitle) {
        this.channelTitle = channelTitle;
    }

    public int getDailyViewCount() {
        return dailyViewCount;
    }

    public void setDailyViewCount(int dailyViewCount) {
        this.dailyViewCount = dailyViewCount;
    }

    public String getPublishedAT() {
        return publishedAT;
    }

    public void setPublishedAT(String publishedAT) {
        this.publishedAT = publishedAT;
    }

    public String getThumbnails() {
        return thumbnails;
    }

    public void setThumbnails(String thumbnails) {
        this.thumbnails = thumbnails;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getVideoID() {
        return videoID;
    }

    public void setVideoID(String videoID) {
        this.videoID = videoID;
    }

    public Long getViewCount() {
        return viewCount;
    }

    public void setViewCount(Long viewCount) {
        this.viewCount = viewCount;
    }
}
