package pinkdumbbell.youtubeTrend.domain;

import java.text.DateFormat;
import java.util.Date;

public class VideoData {
    private String videoID;
    private String channelID;
    private Date insertDT;
    private String publishedAT;
    private String title;
    private String description;
    private String channelTitle;
    private String thumbnails;
    private Long viewCount;
    private Long zeroViewCount;
    private int dailyViewCount;
    private int likeCount;
    private int dislikeCount;
    private int commentCount;
    private String URL;
    private int categoryID;
    private Date updateDT;

    public String getVideoID() {
        return videoID;
    }

    public void setVideoID(String videoID) {
        this.videoID = videoID;
    }

    public String getChannelID() {
        return channelID;
    }

    public void setChannelID(String channelID) {
        this.channelID = channelID;
    }

    public Date getInsertDT() {
        return insertDT;
    }

    public void setInsertDT(Date insertDT) {
        this.insertDT = insertDT;
    }

    public String getPublishedAT() {
        return publishedAT;
    }

    public void setPublishedAT(String publishedAT) {
        this.publishedAT = publishedAT;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getChannelTitle() {
        return channelTitle;
    }

    public void setChannelTitle(String channelTitle) {
        this.channelTitle = channelTitle;
    }

    public String getThumbnails() {
        return thumbnails;
    }

    public void setThumbnails(String thumbnails) {
        this.thumbnails = thumbnails;
    }

    public Long getViewCount() {
        return viewCount;
    }

    public void setViewCount(Long viewCount) {
        this.viewCount = viewCount;
    }

    public Long getZeroViewCount() {
        return zeroViewCount;
    }

    public void setZeroViewCount(Long zeroViewCount) {
        this.zeroViewCount = zeroViewCount;
    }

    public int getDailyViewCount() {
        return dailyViewCount;
    }

    public void setDailyViewCount(int dailyViewCount) {
        this.dailyViewCount = dailyViewCount;
    }

    public int getLikeCount() {
        return likeCount;
    }

    public void setLikeCount(int likeCount) {
        this.likeCount = likeCount;
    }

    public int getDislikeCount() {
        return dislikeCount;
    }

    public void setDislikeCount(int dislikeCount) {
        this.dislikeCount = dislikeCount;
    }

    public int getCommentCount() {
        return commentCount;
    }

    public void setCommentCount(int commentCount) {
        this.commentCount = commentCount;
    }

    public String getURL() {
        return URL;
    }

    public void setURL(String URL) {
        this.URL = URL;
    }

    public int getCategoryID() {
        return categoryID;
    }

    public void setCategoryID(int categoryID) {
        this.categoryID = categoryID;
    }

    public Date getUpdateDT() {
        return updateDT;
    }

    public void setUpdateDT(Date updateDT) {
        this.updateDT = updateDT;
    }
}
